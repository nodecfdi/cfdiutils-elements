import { Pago, Pagos } from '~/pagos10';

describe('Elements.Pagos10.Pagos', () => {
    let element: Pagos;
    beforeEach(() => {
        element = new Pagos();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pago10:Pagos');
        expect(element.getElementName()).toBe('pago10:Pagos');
    });

    test('pago', () => {
        expect(element).toElementHasChildMultiple(Pago);
    });
});
