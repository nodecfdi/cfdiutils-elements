import '../../matchers/to_element_has_child';
import { ComercioExterior, Destinatario, Emisor, Mercancia, Mercancias, Propietario, Receptor } from '../../../src/cce11';

describe('Elements.CCE11.ComercioExterior', () => {
    let element: ComercioExterior;

    beforeEach(() => {
        element = new ComercioExterior();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:ComercioExterior');
        expect(element.getElementName()).toBe('cce11:ComercioExterior');
    });

    test('emisor', () => {
        expect(element).toElementHasChildSingle(Emisor);
    });

    test('receptor', () => {
        expect(element).toElementHasChildSingle(Receptor);
    });

    test('mercancias', () => {
        expect(element).toElementHasChildSingle(Mercancias);
    });

    test('propietario', () => {
        expect(element.count()).toBe(0);

        const first = element.addPropietario({ id: 'first' });
        expect(first).toBeInstanceOf(Propietario);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addPropietario({id: 'second'});
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(2);
        expect(first).not.toBe(second);

    });

    test('destinatario', () => {
        expect(element.count()).toBe(0);

        const first = element.addDestinatario({ id: 'first' });
        expect(first).toBeInstanceOf(Destinatario);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addDestinatario({id: 'second'});
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(2);
        expect(first).not.toBe(second);
    });

    test('add Mercancia', () => {
        const mercancias = element.getMercancias();

        const first = element.addMercancia({foo: 'bar'});
        expect(first).toBeInstanceOf(Mercancia);
        expect(mercancias.count()).toBe(1);
        expect(first.attributes().get('foo')).toBe('bar');
        expect(first).toBe(mercancias.children().get(0));

        const second = element.addMercancia();
        expect(first).toBe(mercancias.children().get(0));
        
        expect(mercancias.count()).toBe(2);
        expect(first).not.toBe(second);
        expect(second).toBe(mercancias.children().get(1));
    });

    test('children order', () => {
        element.getMercancias();
        element.addDestinatario();
        element.getReceptor();
        element.addPropietario();
        element.getEmisor();

        expect(element.children().get(0)).toBeInstanceOf(Emisor);
        expect(element.children().get(1)).toBeInstanceOf(Propietario);
        expect(element.children().get(2)).toBeInstanceOf(Receptor);
        expect(element.children().get(3)).toBeInstanceOf(Destinatario);
        expect(element.children().get(4)).toBeInstanceOf(Mercancias);
    });
});
