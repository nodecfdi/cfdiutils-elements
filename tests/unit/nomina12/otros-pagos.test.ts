import { OtroPago, OtrosPagos } from '~/nomina12';

describe('Elements.Nomina12.OtrosPagos', () => {
    let element: OtrosPagos;

    beforeEach(() => {
        element = new OtrosPagos();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:OtrosPagos');
        expect(element.getElementName()).toBe('nomina12:OtrosPagos');
    });

    test('otro pago', () => {
        expect(element).toElementHasChildMultiple(OtroPago);
    });
});
