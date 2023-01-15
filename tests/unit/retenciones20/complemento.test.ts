import { Complemento } from '~/retenciones20';

describe('Elements.Retenciones20.Complemento', () => {
    test('complemento', () => {
        const element = new Complemento();
        expect(element.name()).toBe('retenciones:Complemento');
        expect(element.getElementName()).toBe('retenciones:Complemento');
    });
});
