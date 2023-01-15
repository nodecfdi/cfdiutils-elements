import { Extranjero } from '~/retenciones20';

describe('Elements.Retenciones20.Extranjero', () => {
    test('extranjero', () => {
        const element = new Extranjero();
        expect(element.name()).toBe('retenciones:Extranjero');
        expect(element.getElementName()).toBe('retenciones:Extranjero');
    });
});
