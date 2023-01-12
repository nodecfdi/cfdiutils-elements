import { Totales } from '~/pagos20';

describe('Elements.Pago20.Totales', () => {
    test('totales', () => {
        const element = new Totales();
        expect(element.getElementName()).toBe('pago20:Totales');
    });
});
