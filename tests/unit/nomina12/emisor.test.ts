import { Emisor, EntidadSNCF } from '~/nomina12';

describe('Elements.Nomina12.Emisor', () => {
    let element: Emisor;

    beforeEach(() => {
        element = new Emisor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Emisor');
        expect(element.getElementName()).toBe('nomina12:Emisor');
    });

    test('get EntidadSNFC', () => {
        expect(element.searchNodes('nomina12:EntidadSNCF').length).toBe(0);

        const first = element.getEntidadSNCF();
        expect(element.searchNodes('nomina12:EntidadSNCF').length).toBe(1);

        const second = element.getEntidadSNCF();
        expect(element.searchNodes('nomina12:EntidadSNCF').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add EntidadSNFC', () => {
        const first = element.addEntidadSNCF({ id: 'first' });
        expect(first).toBeInstanceOf(EntidadSNCF);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addEntidadSNCF({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });
});
