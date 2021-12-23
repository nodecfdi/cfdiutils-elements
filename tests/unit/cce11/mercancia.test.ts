import { Mercancia, DescripcionesEspecificas } from '../../../src/cce11';

describe('Elements.CCE11.Mercancia', () => {
    let element: Mercancia;

    beforeEach(() => {
        element = new Mercancia();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Mercancia');
        expect(element.getElementName()).toBe('cce11:Mercancia');
    });

    test('add domicilio', () => {
        expect(element.count()).toBe(0);

        const first = element.addDescripcionesEspecificas({ id: 'first' });
        expect(first).toBeInstanceOf(DescripcionesEspecificas);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addDescripcionesEspecificas({ id: 'second' });
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(2);
        expect(first).not.toBe(second);
    });
});
