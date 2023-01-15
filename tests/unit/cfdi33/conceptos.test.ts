import { Concepto, Conceptos } from '~/cfdi33';

describe('Elements.Cfdi33.Conceptos', () => {
    let element: Conceptos;
    beforeEach(() => {
        element = new Conceptos();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cfdi:Conceptos');
        expect(element.getElementName()).toBe('cfdi:Conceptos');
    });

    test('add concepto', () => {
        // No child's
        const parent = element;
        expect(parent.count()).toBe(0);

        // Add first child
        const first = parent.addConcepto({
            name: 'first'
        });
        expect(first).toBeInstanceOf(Concepto);
        expect(first.attributes().get('name')).toBe('first');
        expect(parent.count()).toBe(1);

        // Add second child
        parent.addConcepto();
        expect(parent.count()).toBe(2);
    });
});
