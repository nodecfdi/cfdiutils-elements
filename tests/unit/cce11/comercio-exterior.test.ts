import { ComercioExterior, Destinatario, Emisor, Mercancia, Mercancias, Propietario, Receptor } from '~/cce11';

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
        expect(element).toElementHasChildMultiple(Propietario);
    });

    test('destinatario', () => {
        expect(element).toElementHasChildMultiple(Destinatario);
    });

    test('add Mercancia shortcut', () => {
        const mercancias = element.getMercancias();

        const empty = element.addMercancia();
        expect(empty).toBeInstanceOf(Mercancia);
        expect(mercancias.count()).toBe(1);

        const first = element.addMercancia({ foo: 'bar' });
        expect(first).toBeInstanceOf(Mercancia);
        expect(mercancias.count()).toBe(2);
        expect(first.attributes().get('foo')).toBe('bar');
        expect(first).toBe(mercancias.children().get(1));

        const second = element.addMercancia();
        expect(first).toBe(mercancias.children().get(1));

        expect(mercancias.count()).toBe(3);
        expect(first).not.toBe(second);
        expect(second).toBe(mercancias.children().get(2));
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
