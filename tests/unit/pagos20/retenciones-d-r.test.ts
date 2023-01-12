import { RetencionDR, RetencionesDR } from '~/pagos20';

describe('Elements.Pago20.RetencionesDR', () => {
    test('retenciones dr', () => {
        const element = new RetencionesDR();
        expect(element.getElementName()).toBe('pago20:RetencionesDR');
        expect(element).toElementHasChildMultiple(RetencionDR);
    });
});
