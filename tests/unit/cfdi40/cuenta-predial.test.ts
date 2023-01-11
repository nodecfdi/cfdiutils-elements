import { CuentaPredial } from '~/cfdi40';

describe('Elements.CFDI40.CuentaPredial', () => {
    test('cuenta predial', () => {
        const element = new CuentaPredial();
        expect(element.getElementName()).toBe('cfdi:CuentaPredial');
    });
});
