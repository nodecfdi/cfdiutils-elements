import { Retencion } from '~/cfdi40';

describe('Elements.CFDI40.Retencion', () => {
    test('retencion', () => {
        const element = new Retencion();
        expect(element.getElementName()).toBe('cfdi:Retencion');
    });
});
