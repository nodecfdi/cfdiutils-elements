import { ImpuestosDR, RetencionesDR, TrasladosDR } from '~/pagos20';

describe('Elements.Pago20.ImpuestosDR', () => {
    test('impuestos dr', () => {
        const element = new ImpuestosDR();
        expect(element.getElementName()).toBe('pago20:ImpuestosDR');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:RetencionesDR', 'pago20:TrasladosDR']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:RetencionesDR', 'pago20:TrasladosDR']);
        expect(element).toElementHasChildSingle(RetencionesDR);
        expect(element).toElementHasChildSingle(TrasladosDR);
    });
});
