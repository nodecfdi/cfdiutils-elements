import { Complemento } from '~/cfdi40';

describe('Elements.CFDI40.Complemento', () => {
    test('complemento', () => {
        const element = new Complemento();
        expect(element.getElementName()).toBe('cfdi:Complemento');
    });
});
