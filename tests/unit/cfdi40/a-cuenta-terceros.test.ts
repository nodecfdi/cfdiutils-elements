import { ACuentaTerceros } from '~/cfdi40';

describe('Elements.CFDI40.ACuentaTerceros', () => {
    test('a cuenta de terceros', () => {
        const element = new ACuentaTerceros();
        expect(element.getElementName()).toBe('cfdi:ACuentaTerceros');
    });
});
