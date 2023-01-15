import { Concepto, Conceptos } from '~/cfdi40';

describe('Elements.CFDI40.Conceptos', () => {
    test('conceptos', () => {
        const element = new Conceptos();
        expect(element.getElementName()).toBe('cfdi:Conceptos');
        expect(element).toElementHasChildMultiple(Concepto);
    });
});
