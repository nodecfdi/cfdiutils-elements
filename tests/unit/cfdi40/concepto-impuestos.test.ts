import { ConceptoImpuestos, Retenciones, Traslados } from '~/cfdi40';

describe('Elements.CFDI40.ConceptoImpuestos', () => {
    test('concepto impuestos', () => {
        const element = new ConceptoImpuestos();
        expect(element.getElementName()).toBe('cfdi:Impuestos');
        expect(element.getChildrenOrder()).toStrictEqual(['cfdi:Traslados', 'cfdi:Retenciones']);
        expect(element.children().getOrder()).toStrictEqual(['cfdi:Traslados', 'cfdi:Retenciones']);
        expect(element).toElementHasChildSingle(Traslados);
        expect(element).toElementHasChildSingle(Retenciones);
    });

    test('get impuestos', () => {
        const element = new ConceptoImpuestos();
        expect(element.searchNode('cfdi:Impuestos')).toBeUndefined();
        const child = element.getElementImpuestos();
        expect(child).toBeInstanceOf(ConceptoImpuestos);
    });
});
