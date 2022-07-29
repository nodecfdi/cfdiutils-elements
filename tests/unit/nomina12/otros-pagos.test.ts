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

    test('add otro pagos', () => {
        const first = element.addOtroPago({ id: 'first' });
        expect(first).toBeInstanceOf(OtroPago);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addOtroPago({ id: 'second' });
        expect(first).not.toBe(second);
        expect(element.count()).toBe(2);
    });

    test('multi otro pago', () => {
        const otrosPagos = element.multiOtroPago([{ id: 'first' }, { id: 'second' }]);
        expect(element.count()).toBe(2);
        expect(element).toBe(otrosPagos);
    });
});
