import { Mercancias, Mercancia } from '../../../src/cce11';

describe('Elements.CCE11.Mercancias', () => {
    let element: Mercancias;

    beforeEach(() => {
        element = new Mercancias();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Mercancias');
        expect(element.getElementName()).toBe('cce11:Mercancias');
    });

    test('add domicilio', () => {
        expect(element.count()).toBe(0);

        const first = element.addMercancia({ id: 'first' });
        expect(first).toBeInstanceOf(Mercancia);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addMercancia({ id: 'second' });
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(2);
        expect(first).not.toBe(second);
    });
});
