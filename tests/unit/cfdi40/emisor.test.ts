import { Emisor } from '~/cfdi40';

describe('Elements.CFDI40.Emisor', () => {
    test('emisor', () => {
        const element = new Emisor();
        expect(element.getElementName()).toBe('cfdi:Emisor');
    });
});
