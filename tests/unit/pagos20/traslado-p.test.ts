import { TrasladoP } from '~/pagos20';

describe('Elements.Pago20.TrasladoP', () => {
    test('traslado p', () => {
        const element = new TrasladoP();
        expect(element.getElementName()).toBe('pago20:TrasladoP');
    });
});
