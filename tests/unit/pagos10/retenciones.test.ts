import { Retencion, Retenciones } from '~/pagos10';

describe('Elements.Pagos10.Retenciones', () => {
    let element: Retenciones;
    beforeEach(() => {
        element = new Retenciones();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pago10:Retenciones');
        expect(element.getElementName()).toBe('pago10:Retenciones');
    });

    test('retencion', () => {
        expect(element).toElementHasChildMultiple(Retencion);
    });
});
