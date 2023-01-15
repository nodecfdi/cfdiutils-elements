import { Nacional } from '~/retenciones20';

describe('Elements.Retenciones20.Nacional', () => {
    test('nacional', () => {
        const element = new Nacional();
        expect(element.name()).toBe('retenciones:Nacional');
        expect(element.getElementName()).toBe('retenciones:Nacional');
    });
});
