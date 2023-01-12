import { CfdiRetenRelacionados } from '~/retenciones20';

describe('Elements.Retenciones20.CfdiRetenRelacionados', () => {
    test('cfdi reten relacionados', () => {
        const element = new CfdiRetenRelacionados();
        expect(element.name()).toBe('retenciones:CfdiRetenRelacionados');
        expect(element.getElementName()).toBe('retenciones:CfdiRetenRelacionados');
    });
});
