import { TrasladoP, TrasladosP } from '~/pagos20';

describe('Elements.Pago20.TrasladosP', () => {
    test('traslados p', () => {
        const element = new TrasladosP();
        expect(element.getElementName()).toBe('pago20:TrasladosP');
        expect(element).toElementHasChildMultiple(TrasladoP);
    });
});
