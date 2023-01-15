import { Extranjero, Nacional, Receptor } from '~/retenciones20';

describe('Elements.Retenciones20.Receptor', () => {
    test('receptor', () => {
        const element = new Receptor();
        expect(element.name()).toBe('retenciones:Receptor');
        expect(element.getElementName()).toBe('retenciones:Receptor');
        expect(element).toElementHasChildSingle(Nacional);
        expect(element).toElementHasChildSingle(Extranjero);
    });
});
