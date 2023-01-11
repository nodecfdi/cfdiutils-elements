import { InformacionAduanera } from '~/cfdi33';

describe('Elements.Cfdi33.InformacionAduanera', () => {
    test('informacion aduanera', () => {
        const element = new InformacionAduanera();
        expect(element.getElementName()).toBe('cfdi:InformacionAduanera');
    });
});
