import { TrasladoDR, TrasladosDR } from '~/pagos20';

describe('Elements.Pago20.TrasladosDR', () => {
    test('traslados dr', () => {
        const element = new TrasladosDR();
        expect(element.getElementName()).toBe('pago20:TrasladosDR');
        expect(element).toElementHasChildMultiple(TrasladoDR);
    });
});
