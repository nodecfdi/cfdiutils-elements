import { Addenda } from '~/cfdi40';

describe('Elements.CFDI40.Addenda', () => {
    test('addenda', () => {
        const element = new Addenda();
        expect(element.getElementName()).toBe('cfdi:Addenda');
    });
});
