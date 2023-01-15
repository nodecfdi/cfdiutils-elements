import { RetencionDR } from '~/pagos20';

describe('Elements.Pago20.RetencionDR', () => {
    test('retencion dr', () => {
        const element = new RetencionDR();
        expect(element.getElementName()).toBe('pago20:RetencionDR');
    });
});
