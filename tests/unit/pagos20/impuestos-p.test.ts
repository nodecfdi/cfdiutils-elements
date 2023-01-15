import { ImpuestosP, RetencionesP, TrasladosP } from '~/pagos20';

describe('Elements.Pago20.ImpuestosP', () => {
    test('impuestos p', () => {
        const element = new ImpuestosP();
        expect(element.getElementName()).toBe('pago20:ImpuestosP');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:RetencionesP', 'pago20:TrasladosP']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:RetencionesP', 'pago20:TrasladosP']);
        expect(element).toElementHasChildSingle(RetencionesP);
        expect(element).toElementHasChildSingle(TrasladosP);
    });
});
