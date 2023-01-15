import { ImpuestosLocales, RetencionesLocales, TrasladosLocales } from '~/imp-local10';

describe('Elements.ImpLocal10.ImpuestosLocales', () => {
    test('impuestos locales', () => {
        const element = new ImpuestosLocales();
        expect(element.name()).toBe('implocal:ImpuestosLocales');
        expect(element.getElementName()).toBe('implocal:ImpuestosLocales');
    });

    test('retencion', () => {
        const element = new ImpuestosLocales();
        // Object is empty
        expect(element.count()).toBe(0);

        const empty = element.addRetencionLocal();
        expect(empty).toBeInstanceOf(RetencionesLocales);
        // Instance empty has 0 attributes
        expect(empty.attributes().size).toBe(0);

        // Add insert first element
        const first = element.addRetencionLocal({ id: 'first' });
        expect(first).toBeInstanceOf(RetencionesLocales);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(2);

        // Add insert second element and is not the same
        const second = element.addRetencionLocal({ id: 'second' });
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(3);
        expect(second.attributes().get('id')).not.toBe(first.attributes().get('id'));
    });

    test('traslado', () => {
        const element = new ImpuestosLocales();
        // Object is empty
        expect(element.count()).toBe(0);

        const empty = element.addTrasladoLocal();
        expect(empty).toBeInstanceOf(TrasladosLocales);
        // Instance empty has 0 attributes
        expect(empty.attributes().size).toBe(0);

        // Add insert first element
        const first = element.addTrasladoLocal({ id: 'first' });
        expect(first).toBeInstanceOf(TrasladosLocales);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(2);

        // Add insert second element and is not the same
        const second = element.addTrasladoLocal({ id: 'second' });
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(3);
        expect(second.attributes().get('id')).not.toBe(first.attributes().get('id'));
    });
});
