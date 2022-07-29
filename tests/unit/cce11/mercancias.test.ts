import { Mercancias, Mercancia } from '~/cce11';

describe('Elements.CCE11.Mercancias', () => {
    test('mercancias', () => {
        const element = new Mercancias();
        expect(element.name()).toBe('cce11:Mercancias');
        expect(element.getElementName()).toBe('cce11:Mercancias');

        expect(element).toElementHasChildMultiple(Mercancia);
    });
});
