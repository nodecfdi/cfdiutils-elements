import { Traslado, Traslados } from '~/pagos10';

describe('Elements.Pagos10.Traslados', () => {
    let element: Traslados;
    beforeEach(() => {
        element = new Traslados();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pago10:Traslados');
        expect(element.getElementName()).toBe('pago10:Traslados');
    });

    test('traslado', () => {
        expect(element).toElementHasChildMultiple(Traslado);
    });
});
