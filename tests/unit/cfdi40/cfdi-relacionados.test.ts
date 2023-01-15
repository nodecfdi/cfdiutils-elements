import { CfdiRelacionado, CfdiRelacionados } from '~/cfdi40';

describe('Elements.CFDI40.CfdiRelacionados', () => {
    test('relacionados', () => {
        const element = new CfdiRelacionados();
        expect(element.getElementName()).toBe('cfdi:CfdiRelacionados');
        expect(element).toElementHasChildMultiple(CfdiRelacionado);
    });
});
