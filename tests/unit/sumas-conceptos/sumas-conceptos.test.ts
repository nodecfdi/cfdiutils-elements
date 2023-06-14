import { CNode } from '@nodecfdi/cfdiutils-common';

import { SumasConceptos } from '~/common/sumas-conceptos/sumas-conceptos';
import { Comprobante as Comprobante33 } from '~/cfdi33';
import { Comprobante as Comprobante40 } from '~/cfdi40';
import { ImpuestosLocales } from '~/imp-local10/impuestos-locales';

describe('SumasConceptos', () => {
    test('constructor', () => {
        const sc = new SumasConceptos(new CNode('x'));
        expect(sc.getPrecision()).toBe(2);
        expect(sc.getSubTotal()).toBe(0);
        expect(sc.getTotal()).toBe(0);
        expect(sc.getDescuento()).toBe(0);
        expect(sc.getImpuestosRetenidos()).toBe(0);
        expect(sc.getImpuestosTrasladados()).toBe(0);
        expect(sc.getLocalesImpuestosRetenidos()).toBe(0);
        expect(sc.getLocalesImpuestosTrasladados()).toBe(0);
        expect(Object.values(sc.getRetenciones())).toHaveLength(0);
        expect(Object.values(sc.getTraslados())).toHaveLength(0);
        expect(Object.values(sc.getExentos())).toHaveLength(0);
        expect(sc.getLocalesRetenciones()).toHaveLength(0);
        expect(sc.getLocalesTraslados()).toHaveLength(0);
        expect(sc.hasRetenciones()).toBeFalsy();
        expect(sc.hasTraslados()).toBeFalsy();
        expect(sc.hasExentos()).toBeFalsy();
        expect(sc.hasLocalesRetenciones()).toBeFalsy();
        expect(sc.hasLocalesTraslados()).toBeFalsy();
        expect(sc.foundAnyConceptWithDiscount()).toBeFalsy();
    });

    test.each([
        ['tax uses 1 dec', 1, 333.33, 53.4, 386.73],
        ['tax uses 6 dec', 6, 333.33, 53.33, 386.66]
    ])(
        'with concepts decimals %s',
        (_test: string, taxDecimals: number, subtotal: number, traslados: number, total: number) => {
            const comprobante = new Comprobante33();
            comprobante
                .addConcepto({
                    Importe: '111.11'
                })
                .addTraslado({
                    Base: '111.11',
                    Impuesto: '002',
                    TipoFactor: 'Tasa',
                    TasaOCuota: '0.160000',
                    Importe: (111.11 * 0.16).toFixed(taxDecimals)
                });
            comprobante
                .addConcepto({
                    Importe: '222.22'
                })
                .addTraslado({
                    Base: '222.22',
                    Impuesto: '002',
                    TipoFactor: 'Tasa',
                    TasaOCuota: '0.160000',
                    Importe: (222.22 * 0.16).toFixed(taxDecimals)
                });
            const sc = new SumasConceptos(comprobante, 2);
            expect(sc.getSubTotal()).toBe(subtotal);
            expect(sc.getImpuestosTrasladados()).toBe(traslados);
            expect(sc.getTotal()).toBe(total);

            // These are zero
            expect(sc.getDescuento()).toBe(0);
            expect(sc.getImpuestosRetenidos()).toBe(0);
            expect([...Object.entries(sc.getRetenciones())]).toHaveLength(0);
            expect([...Object.entries(sc.getExentos())]).toHaveLength(0);
        }
    );

    test('with impuestos locales', () => {
        const taxDecimals = 4;
        const comprobante = new Comprobante33();
        comprobante
            .addConcepto({
                Importe: '111.11'
            })
            .addTraslado({
                Base: '111.11',
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.160000',
                Importe: (111.11 * 0.16).toFixed(taxDecimals)
            });
        comprobante
            .addConcepto({
                Importe: '222.22'
            })
            .addTraslado({
                Base: '222.22',
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.160000',
                Importe: (222.22 * 0.16).toFixed(taxDecimals)
            });
        const impuestosLocales = new ImpuestosLocales();
        impuestosLocales.addTrasladoLocal({
            ImpLocTrasladado: 'IH', // Fixed, taken from a sample,
            TasadeTraslado: '2.5',
            Importe: (333.33 * 0.025).toFixed(2)
        });
        comprobante.getComplemento().add(impuestosLocales);
        const sc = new SumasConceptos(comprobante, 2);

        expect([...Object.entries(sc.getTraslados())]).toHaveLength(1);
        expect(sc.hasTraslados()).toBeTruthy();
        expect(sc.getLocalesTraslados()).toHaveLength(1);

        expect(sc.getSubTotal()).toBe(333.33);
        expect(sc.getImpuestosTrasladados()).toBe(53.33);
        expect(sc.getLocalesImpuestosTrasladados()).toBe(8.33);
        expect(sc.getTotal()).toBe(Number((333.33 + 53.33 + 8.33).toFixed(2)));

        // These are zero
        expect(sc.getDescuento()).toBe(0);
        expect(sc.getImpuestosRetenidos()).toBe(0);
        expect([...Object.entries(sc.getRetenciones())]).toHaveLength(0);
        expect(sc.getLocalesImpuestosRetenidos()).toBe(0);
        expect(sc.getLocalesRetenciones()).toHaveLength(0);
    });

    test('with impuestos locales and importe not defined', () => {
        const taxDecimals = 4;
        const comprobante = new Comprobante33();
        comprobante
            .addConcepto({
                Importe: '111.11'
            })
            .addTraslado({
                Base: '111.11',
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.160000',
                Importe: (111.11 * 0.16).toFixed(taxDecimals)
            });
        comprobante
            .addConcepto({
                Importe: '222.22'
            })
            .addTraslado({
                Base: '222.22',
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.160000',
                Importe: (222.22 * 0.16).toFixed(taxDecimals)
            });
        const impuestosLocales = new ImpuestosLocales();
        impuestosLocales.addTrasladoLocal({
            ImpLocTrasladado: 'IH', // Fixed, taken from a sample,
            TasadeTraslado: '2.5'
        });
        comprobante.getComplemento().add(impuestosLocales);
        const sc = new SumasConceptos(comprobante, 2);

        expect([...Object.entries(sc.getTraslados())]).toHaveLength(1);
        expect(sc.hasTraslados()).toBeTruthy();
        expect(sc.getLocalesTraslados()).toHaveLength(1);

        expect(sc.getSubTotal()).toBe(333.33);
        expect(sc.getImpuestosTrasladados()).toBe(53.33);
        expect(sc.getLocalesImpuestosTrasladados()).toBe(0);
        expect(sc.getTotal()).toBe(Number((333.33 + 53.33).toFixed(2)));

        // These are zero
        expect(sc.getDescuento()).toBe(0);
        expect(sc.getImpuestosRetenidos()).toBe(0);
        expect([...Object.entries(sc.getRetenciones())]).toHaveLength(0);
        expect(sc.getLocalesImpuestosRetenidos()).toBe(0);
        expect(sc.getLocalesRetenciones()).toHaveLength(0);
    });

    test('found any concept with discount', () => {
        const comprobante = new Comprobante40();
        comprobante.addConcepto({ Importe: '111.11' });
        comprobante.addConcepto({ Importe: '222.22' });
        expect(new SumasConceptos(comprobante).foundAnyConceptWithDiscount()).toBeFalsy();

        // Now add the attribute Descuento
        comprobante.addConcepto({ Importe: '333.33', Descuento: '' });
        expect(new SumasConceptos(comprobante).foundAnyConceptWithDiscount()).toBeTruthy();
    });

    test('impuesto importe with more decimals than the precision is rounded', () => {
        const comprobante = new Comprobante40();
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

        const sumas = new SumasConceptos(comprobante, 3);

        expect(sumas.hasTraslados()).toBeTruthy();
        expect(sumas.getImpuestosTrasladados()).toBe(10);
        expect(sumas.getTraslados()['002:Tasa:0.160000'].Importe).toBe((10).toFixed(3));
        expect(sumas.getTraslados()['002:Tasa:0.160000'].Base).toBe((62.5).toFixed(3));
    });

    test('impuesto with traslados Tasa and Exento', () => {
        const comprobante = new Comprobante33();
        comprobante
            .addConcepto()
            .multiTraslado(
                { Impuesto: '002', TipoFactor: 'Exento', Base: '1000' },
                { Impuesto: '002', TipoFactor: 'Tasa', TasaOCuota: '0.160000', Base: '1000', Importe: '160' }
            );
        comprobante.addConcepto().addTraslado({
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000',
            Base: '1000',
            Importe: '160'
        });
        comprobante.addConcepto().addTraslado({
            Impuesto: '002',
            TipoFactor: 'Exento',
            Base: '234.56'
        });

        const sumas = new SumasConceptos(comprobante, 2);
        expect(sumas.hasTraslados()).toBeTruthy();
        expect(sumas.getImpuestosTrasladados()).toBe(320);
        expect([...Object.entries(sumas.getTraslados())]).toHaveLength(1);

        expect(sumas.hasExentos()).toBeTruthy();
        expect([...Object.entries(sumas.getExentos())]).toHaveLength(1);
        expect(
            Object.values(sumas.getExentos())
                .map((v) => v.Base)
                .reduce((sum: number, value) => sum + Number(value), 0)
        ).toBe(1234.56);
    });

    test('impuesto with Traslados and only Exento without Base', () => {
        const comprobante = new Comprobante40();
        comprobante.addConcepto().multiTraslado({ Impuesto: '002', TipoFactor: 'Exento' });
        comprobante.addConcepto().multiTraslado({ Impuesto: '002', TipoFactor: 'Exento' });

        const sumas = new SumasConceptos(comprobante, 2);
        expect(sumas.hasTraslados()).toBeFalsy();
        expect(sumas.getImpuestosTrasladados()).toBe(0);
        expect([...Object.entries(sumas.getTraslados())]).toHaveLength(0);

        expect(sumas.hasExentos()).toBeTruthy();
        expect(
            Object.values(sumas.getExentos())
                .map((v) => v.Base)
                .reduce((sum: number, value) => sum + Number(value), 0)
        ).toBe(0);
    });

    test('impuesto with Traslados and only Exento with Base', () => {
        const comprobante = new Comprobante40();
        comprobante.addConcepto().multiTraslado({ Impuesto: '002', TipoFactor: 'Exento', Base: '123.45' });
        comprobante
            .addConcepto()
            .multiTraslado(
                { Impuesto: '002', TipoFactor: 'Exento', Base: '543.21' },
                { Impuesto: '001', TipoFactor: 'Exento', Base: '100' }
            );
        comprobante.addConcepto().multiTraslado({ Impuesto: '001', TipoFactor: 'Exento', Base: '150' });

        const sumas = new SumasConceptos(comprobante, 2);
        expect(sumas.hasTraslados()).toBeFalsy();
        expect(sumas.getImpuestosTrasladados()).toBe(0);
        expect([...Object.entries(sumas.getTraslados())]).toHaveLength(0);

        expect(sumas.hasExentos()).toBeTruthy();

        const exentos001 = Object.values(sumas.getExentos()).filter((values) => values.Impuesto === '001');
        expect(exentos001.map((v) => v.Base).reduce((sum: number, value) => sum + Number(value), 0)).toBeCloseTo(250);

        const exentos002 = Object.values(sumas.getExentos()).filter((values) => values.Impuesto === '002');
        expect(exentos002.map((v) => v.Base).reduce((sum: number, value) => sum + Number(value), 0)).toBeCloseTo(
            666.66
        );
    });

    test('impuesto with Retenciones', () => {
        const comprobante = new Comprobante33();
        comprobante.addConcepto().multiRetencion({
            Base: '1000.00',
            Impuesto: '001',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.04000',
            Importe: '40.00'
        });

        const sumas = new SumasConceptos(comprobante, 2);
        expect(sumas.hasRetenciones()).toBeTruthy();
        expect(sumas.getImpuestosRetenidos()).toBe(40);
    });

    test('impuesto with Retenciones and traslados but not importe or base', () => {
        const comprobante = new Comprobante33();
        comprobante.addConcepto().multiRetencion(
            {
                Impuesto: '001',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.04000'
            },
            {
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.100000'
            }
        );
        comprobante.addConcepto().multiRetencion({
            Impuesto: '001',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.04000'
        });
        comprobante.addConcepto().multiTraslado({
            Impuesto: '002',
            TipoFactor: 'Tasa',
            TasaOCuota: '0.160000'
        });

        const sumas = new SumasConceptos(comprobante, 2);
        expect(sumas.hasRetenciones()).toBeTruthy();
        expect(sumas.hasTraslados()).toBeTruthy();
        expect(sumas.getImpuestosRetenidos()).toBe(0);
        expect(sumas.getImpuestosTrasladados()).toBe(0);
    });
});
