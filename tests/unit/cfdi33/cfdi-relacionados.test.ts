import { CfdiRelacionado, CfdiRelacionados } from '~/cfdi33';

describe('Elements.Cfdi33.CfdiRelacionados', () => {
    test('cfdi relacionados', () => {
        const element = new CfdiRelacionados();
        expect(element.name()).toBe('cfdi:CfdiRelacionados');
        expect(element.getElementName()).toBe('cfdi:CfdiRelacionados');

        expect(element).toElementHasChildMultiple(CfdiRelacionado);
    });
});
