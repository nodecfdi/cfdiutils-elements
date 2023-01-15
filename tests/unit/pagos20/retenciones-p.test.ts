import { RetencionesP, RetencionP } from '~/pagos20';

describe('Elements.Pago20.RetencionesP', () => {
    test('retenciones p', () => {
        const element = new RetencionesP();
        expect(element.getElementName()).toBe('pago20:RetencionesP');
        expect(element).toElementHasChildMultiple(RetencionP);
    });
});
