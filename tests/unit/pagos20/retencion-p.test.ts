import { RetencionP } from '~/pagos20';

describe('Elements.Pago20.RetencionP', () => {
    test('retencion p', () => {
        const element = new RetencionP();
        expect(element.getElementName()).toBe('pago20:RetencionP');
    });
});
