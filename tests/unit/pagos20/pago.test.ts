import { DoctoRelacionado, ImpuestosP, Pago } from '~/pagos20';

describe('Elements.Pago20.Pago', () => {
    test('pago', () => {
        const element = new Pago();
        expect(element.getElementName()).toBe('pago20:Pago');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:DoctoRelacionado', 'pago20:ImpuestosP']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:DoctoRelacionado', 'pago20:ImpuestosP']);
        expect(element).toElementHasChildMultiple(DoctoRelacionado);
        expect(element).toElementHasChildSingle(ImpuestosP);
    });
});
