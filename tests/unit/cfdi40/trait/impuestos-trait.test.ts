import { UseImpuestos } from './use-impuestos';
import { Impuestos, Retencion, Retenciones, Traslado, Traslados } from '~/cfdi40';

describe('Elements.Cfdi40.Trait.ImpuestosTrait', () => {
    test('get impuestos', () => {
        const element = new UseImpuestos();
        expect(element.searchNode('cfdi:Impuestos')).toBeUndefined();
        const child = element.getElementImpuestos();
        expect(child).toBeInstanceOf(Impuestos);
        expect(element.searchNode('cfdi:Impuestos')).toBe(child);
    });

    test('add traslado', () => {
        const element = new UseImpuestos();
        expect(element.searchNode('cfdi:Impuestos', 'cfdi:Traslados', 'cfdi:Traslado')).toBeUndefined();
        const first = element.addTraslado({ name: 'first' });
        expect(first).toBeInstanceOf(Traslado);
        expect(first.attributes().get('name')).toBe('first');
        expect(element.searchNode('cfdi:Impuestos', 'cfdi:Traslados', 'cfdi:Traslado')).toStrictEqual(first);
    });

    test('multi traslado', () => {
        const element = new UseImpuestos();
        const parent = element.getElementImpuestos().getTraslados();
        expect(parent.count()).toBe(0);
        const multiReturn = element.multiTraslado({ id: 'first' }, { id: 'second' });
        expect(element).toStrictEqual(multiReturn);
        expect(parent.count()).toBe(2);
        expect(parent.searchAttribute('cfdi:Traslado', 'id')).toBe('first');
    });

    test('add retencion', () => {
        const element = new UseImpuestos();
        expect(element.searchNode('cfdi:Impuestos', 'cfdi:Retenciones', 'cfdi:Retencion')).toBeUndefined();
        const first = element.addRetencion({
            name: 'first'
        });
        expect(first).toBeInstanceOf(Retencion);
        expect(first.attributes().get('name')).toBe('first');
        expect(element.searchNode('cfdi:Impuestos', 'cfdi:Retenciones', 'cfdi:Retencion')).toStrictEqual(first);
    });

    test('multi retencion', () => {
        const element = new UseImpuestos();
        const parent = element.getElementImpuestos().getRetenciones();
        expect(parent.count()).toBe(0);
        const multiReturn = element.multiRetencion({ id: 'first' }, { id: 'second' });
        expect(element).toStrictEqual(multiReturn);
        expect(parent.count()).toBe(2);
        expect(parent.searchAttribute('cfdi:Retencion', 'id')).toBe('first');
    });

    test('children get order', () => {
        const element = new UseImpuestos();

        // Add in inverse order
        element.addRetencion();
        element.addTraslado();

        // Retrieve in correct order
        const impuestos = element.getElementImpuestos();
        expect(impuestos.children().get(0)).toBeInstanceOf(Retenciones);
        expect(impuestos.children().get(1)).toBeInstanceOf(Traslados);
    });
});
