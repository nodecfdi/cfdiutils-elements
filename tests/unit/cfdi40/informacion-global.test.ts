import { InformacionGlobal } from '~/cfdi40';

describe('Elements.CFDI40.InformacionGlobal', () => {
    test('informacion global', () => {
        const element = new InformacionGlobal();
        expect(element.getElementName()).toBe('cfdi:InformacionGlobal');
    });
});
