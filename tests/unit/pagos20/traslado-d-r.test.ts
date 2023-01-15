import { TrasladoDR } from '~/pagos20';

describe('Elements.Pago20.TrasladoDR', () => {
    test('traslado dr', () => {
        const element = new TrasladoDR();
        expect(element.getElementName()).toBe('pago20:TrasladoDR');
    });
});
