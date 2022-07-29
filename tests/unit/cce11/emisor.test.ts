import { Domicilio, Emisor } from '~/cce11';

describe('Elements.CCE11.Emisor', () => {
    let element: Emisor;

    beforeEach(() => {
        element = new Emisor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Emisor');
        expect(element.getElementName()).toBe('cce11:Emisor');
    });

    test('domicilio', () => {
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
