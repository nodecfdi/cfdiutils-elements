import { Impuestos, Retenciones, Traslados } from '~/cfdi40';

describe('Elements.CFDI40.Impuestos', () => {
    test('impuestos', () => {
        const element = new Impuestos();
        expect(element.getElementName()).toBe('cfdi:Impuestos');
        expect(element.getChildrenOrder()).toStrictEqual(['cfdi:Retenciones', 'cfdi:Traslados']);
        expect(element.children().getOrder()).toStrictEqual(['cfdi:Retenciones', 'cfdi:Traslados']);
        expect(element).toElementHasChildSingle(Retenciones);
        expect(element).toElementHasChildSingle(Traslados);
    });

    test('get impuestos', () => {
        const element = new Impuestos();
        expect(element.searchNode('cfdi:Impuestos')).toBeUndefined();
        const child = element.getElementImpuestos();
        expect(child).toBeInstanceOf(Impuestos);
    });
});
