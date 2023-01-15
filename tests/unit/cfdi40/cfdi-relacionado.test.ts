import { CfdiRelacionado } from '~/cfdi40';

describe('Elements.CFDI40.CfdiRelacionado', () => {
    test('cfdi relacionado', () => {
        const element = new CfdiRelacionado();
        expect(element.getElementName()).toBe('cfdi:CfdiRelacionado');
    });
});
