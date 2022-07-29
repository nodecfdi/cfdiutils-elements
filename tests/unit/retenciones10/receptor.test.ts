import { Extranjero, Nacional, Receptor } from '~/retenciones10';

describe('Elements.Retenciones10.Receptor', () => {
    let element: Receptor;
    beforeEach(() => {
        element = new Receptor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Receptor');
        expect(element.getElementName()).toBe('retenciones:Receptor');
    });

    test('get nacional overrides get extranjero and viceversa', () => {
        element.getExtranjero();

        element.getNacional();
        expect(element.count()).toBe(1);
        expect(element.attributes().get('Nacionalidad')).toBe('Nacional');

        element.getExtranjero();
        expect(element.count()).toBe(1);
        expect(element.attributes().get('Nacionalidad')).toBe('Extranjero');
    });

    test('get and add Nacional', () => {
        expect(element).toElementHasChildSingle(Nacional);
    });

    test('get and add Extranjero', () => {
        expect(element).toElementHasChildSingle(Extranjero);
    });
});
