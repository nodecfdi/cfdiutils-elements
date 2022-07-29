import { Emisor } from '~/retenciones10';

describe('Elements.Retenciones10.Emisor', () => {
    let element: Emisor;

    beforeEach(() => {
        element = new Emisor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Emisor');
        expect(element.getElementName()).toBe('retenciones:Emisor');
    });
});
