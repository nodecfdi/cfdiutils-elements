import { Addenda } from '~/retenciones20';

describe('Elements.Retenciones20.Addenda', () => {
    test('addenda', () => {
        const element = new Addenda();
        expect(element.name()).toBe('retenciones:Addenda');
        expect(element.getElementName()).toBe('retenciones:Addenda');
    });
});
