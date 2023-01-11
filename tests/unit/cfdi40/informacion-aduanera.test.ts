import { InformacionAduanera } from '~/cfdi40';

describe('Elements.CFDI40.InformacionAduanera', () => {
    test('informacion aduanera', () => {
        const element = new InformacionAduanera();
        expect(element.getElementName()).toBe('cfdi:InformacionAduanera');
    });
});
