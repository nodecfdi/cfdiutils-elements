import { Receptor } from '~/cfdi40';

describe('Elements.CFDI40.Receptor', () => {
    test('receptor', () => {
        const element = new Receptor();
        expect(element.getElementName()).toBe('cfdi:Receptor');
    });
});
