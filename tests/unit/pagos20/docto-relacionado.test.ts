import { DoctoRelacionado, ImpuestosDR } from '~/pagos20';

describe('Elements.Pago20.DoctoRelacionado', () => {
    test('docto relacionado', () => {
        const element = new DoctoRelacionado();
        expect(element.getElementName()).toBe('pago20:DoctoRelacionado');
        expect(element).toElementHasChildSingle(ImpuestosDR);
    });
});
