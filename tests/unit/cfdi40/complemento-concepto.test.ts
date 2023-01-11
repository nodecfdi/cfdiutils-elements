import { ComplementoConcepto } from '~/cfdi40';

describe('Elements.CFDI40.ComplementoConcepto', () => {
    test('complemento concepto', () => {
        const element = new ComplementoConcepto();
        expect(element.getElementName()).toBe('cfdi:ComplementoConcepto');
    });
});
