/**
 * \@vitest-environment jsdom
 */

import { CNode, XmlNodeUtils, install } from '@nodecfdi/cfdiutils-common';

import { Comprobante, SumasConceptosWriter } from '~/cfdi33';
import { SumasConceptos } from '~/common/sumas-conceptos/sumas-conceptos';
import { ImpuestosLocales } from '~/imp-local10/impuestos-locales';

describe('Cfdi33.SumasConceptosWriter.Browser', () => {
    beforeAll(() => {
        install(new DOMParser(), new XMLSerializer(), document.implementation);
    });

    test('constructor', () => {
        const precision = 6;
        const comprobante = new Comprobante();
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        expect(writer.getComprobante()).toStrictEqual(comprobante);

        expect(writer.getPrecision()).toBe(precision);
        expect(writer.getSumasConceptos()).toStrictEqual(sumasConceptos);
        expect(writer.hasWriteImpuestosBase()).toBeFalsy();
    });

    test('format', () => {
        const precision = 6;
        const comprobante = new Comprobante();
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);

        expect(writer.format(1.234_566_4)).toBe('1.234566');
        expect(writer.format(1.234_566_5)).toBe('1.234567');
        expect(writer.format(1.234_567_4)).toBe('1.234567');
        expect(writer.format(1.234_567_5)).toBe('1.234568');
        expect(writer.format(1)).toBe('1.000000');
    });

    test('put with empty values', () => {
        const precision = 2;
        const comprobante = new Comprobante();
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.get('SubTotal')).toBe('0.00');
        expect(comprobante.offsetExists('Descuento')).toBeFalsy();
        expect(comprobante.get('Total')).toBe('0.00');
        expect(comprobante.searchNode('cfdi:Impuestos')).toBeUndefined();
    });

    test('put with empty conceptos impuestos', () => {
        const precision = 2;
        const comprobante = new Comprobante();
        comprobante.addConcepto({ Importe: 1000, Descuento: 1000 });
        comprobante.addConcepto({ Importe: 2000, Descuento: 2000 });

        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.get('SubTotal')).toBe('3000.00');
        expect(comprobante.get('Descuento')).toBe('3000.00');
        expect(comprobante.get('Total')).toBe('0.00');
        expect(comprobante.searchNode('cfdi:Impuestos')).toBeUndefined();
    });

    test('put with zero conceptos impuestos', () => {
        const precision = 2;
        const comprobante = new Comprobante();
        comprobante.addConcepto({ Importe: '1000' }).addTraslado({
            Base: '1000',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.000000',
            Importe: '0'
        });
        comprobante.addConcepto({ Importe: '2000' }).addTraslado({
            Base: '2000',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.000000',
            Importe: '0'
        });

        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.get('SubTotal')).toBe('3000.00');
        expect(comprobante.offsetExists('Descuento')).toBeFalsy();
        expect(comprobante.get('Total')).toBe('3000.00');
        expect(comprobante.searchNode('cfdi:Impuestos')).not.toBeUndefined();
        const impuestos = comprobante.getImpuestos();
        expect(impuestos.offsetExists('TotalImpuestosTrasladados')).toBeTruthy();
        expect(impuestos.get('TotalImpuestosTrasladados')).toBe('0.00');
        expect(impuestos.offsetExists('TotalImpuestosRetenidos')).toBeFalsy();
    });

    test('put with conceptos impuestos', () => {
        const precision = 2;
        const comprobante = new Comprobante();
        comprobante.addConcepto({ Importe: '2000', Descuento: '1000' }).addTraslado({
            Base: '1000',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000',
            Importe: '160'
        });
        comprobante.addConcepto({ Importe: '4000', Descuento: '2000' }).addTraslado({
            Base: '2000',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000',
            Importe: '320'
        });

        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.get('SubTotal')).toBe('6000.00');
        expect(comprobante.get('Descuento')).toBe('3000.00');
        expect(comprobante.get('Total')).toBe('3480.00');
        expect(comprobante.searchNode('cfdi:Impuestos')).not.toBeUndefined();
        const impuestos = comprobante.getImpuestos();
        expect(impuestos.offsetExists('TotalImpuestosTrasladados')).toBeTruthy();
        expect(impuestos.get('TotalImpuestosTrasladados')).toBe('480.00');
        expect(impuestos.offsetExists('TotalImpuestosRetenidos')).toBeFalsy();
    });

    test('descuento with value zero exists if a concepto has descuento', () => {
        const comprobante = new Comprobante();
        comprobante.addConcepto({}); // First concepto does not have Descuento
        comprobante.addConcepto({ Descuento: '' }); // Second concepto has Descuento

        const precision = 2;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.get('Descuento')).toBe('0.00');
    });

    test('descuento not set if all conceptos does not have descuento', () => {
        const comprobante = new Comprobante({ Descuento: '' }); // Set value with discount
        comprobante.addConcepto(); // First concepto does not have Descuento
        comprobante.addConcepto(); // Second concepto does not have Descuento neither

        const precision = 2;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        // The Comprobante@Descuento attribute must not exist since there is no Descuento in concepts
        expect(comprobante.offsetExists('Descuento')).toBeFalsy();
    });

    test('on complemento impuestos importe sum is rounded cfdi', () => {
        const comprobante = new Comprobante();
        comprobante.addConcepto().addTraslado({
            Base: '48.611106',
            Importe: '7.777777',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000'
        });
        comprobante.addConcepto().addTraslado({
            Base: '13.888888',
            Importe: '2.222222',
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000'
        });

        const precision = 3;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();
        const traslado = comprobante.searchNode('cfdi:Impuestos', 'cfdi:Traslados', 'cfdi:Traslado');

        expect(comprobante.searchAttribute('cfdi:Impuestos', 'TotalImpuestosTrasladados')).toBe('10.000');
        expect(comprobante.searchAttribute('cfdi:Impuestos', 'cfdi:Traslados', 'cfdi:Traslado', 'Importe')).toBe(
            '10.000'
        );
        expect(traslado?.get('Base')).toBe('62.500');
    });

    test('conceptos only with traslados exentos does not write traslados', () => {
        const comprobante = new Comprobante();
        const concepto = comprobante.addConcepto();
        concepto.addTraslado({ Base: '1000', Impuesto: '002', TipoFactor: 'Exento' });
        concepto.addRetencion({
            Base: '1000.00',
            Impuesto: '001',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.04000',
            Importe: '40.00'
        });
        comprobante.addConcepto().addTraslado({ Base: '1000', Impuesto: '002', TipoFactor: 'Exento' });

        const precision = 2;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        const expected = [
            '<cfdi:Impuestos TotalImpuestosRetenidos="40.00">',
            '<cfdi:Retenciones>',
            '<cfdi:Retencion Impuesto="001" Importe="40.00"/>',
            '</cfdi:Retenciones>',
            '</cfdi:Impuestos>'
        ].join('');
        expect(XmlNodeUtils.nodeToXmlString(comprobante.getImpuestos())).toBe(expected);
    });

    test('set required impLocal attributes', () => {
        const comprobante = new Comprobante();
        const impLocal = new ImpuestosLocales();
        for (let index = 0; index < 2; index++) {
            impLocal.addTrasladoLocal({
                ImpLocTrasladado: 'IH',
                Importe: '27.43',
                TasadeTraslado: '2.50'
            });
            impLocal.addRetencionLocal({
                ImpLocTrasladado: 'IH',
                Importe: '27.43',
                TasadeTraslado: '2.50'
            });
        }

        comprobante.addComplemento(impLocal);

        const precision = 2;
        const sumas = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumas, precision);
        writer.put();

        expect(impLocal.get('TotaldeRetenciones')).toBe('54.86');
        expect(impLocal.get('TotaldeTraslados')).toBe('54.86');
    });

    test('remove impLocal complement when is empty and preserves others complements', () => {
        const comprobante = new Comprobante();
        comprobante.addComplemento(new CNode('other:PrimerComplemento'));
        comprobante.addComplemento(new ImpuestosLocales());
        comprobante.addComplemento(new CNode('other:UltimoComplemento'));

        const precision = 2;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.getComplemento().count()).toBe(2);
        expect(comprobante.searchNode('cfdi:Complemento', 'other:PrimerComplemento')).not.toBeUndefined();
        expect(comprobante.searchNode('cfdi:Complemento', 'other:UltimoComplemento')).not.toBeUndefined();
        expect(comprobante.searchNode('cfdi:Complemento', 'implocal:ImpuestosLocales')).toBeUndefined();
    });

    test('RemoveImpLocalComplementAndRemoveComplementoNodeWhenIsEmpty', () => {
        const comprobante = new Comprobante();
        comprobante.addComplemento(new ImpuestosLocales());

        const precision = 2;
        const sumasConceptos = new SumasConceptos(comprobante, precision);
        const writer = new SumasConceptosWriter(comprobante, sumasConceptos, precision);
        writer.put();

        expect(comprobante.searchNode('cfdi:Complemento')).toBeUndefined();
    });
});
