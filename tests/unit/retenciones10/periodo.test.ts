import { Periodo } from '~/retenciones10';

describe('Elements.Retenciones10.Emisor', () => {
    let element: Periodo;

    beforeEach(() => {
        element = new Periodo();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Periodo');
        expect(element.getElementName()).toBe('retenciones:Periodo');
    });
});
