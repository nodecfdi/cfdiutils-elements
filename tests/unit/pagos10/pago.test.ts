import { DoctoRelacionado, Impuestos, Pago } from '~/pagos10';

describe('Elements.Pagos10.Pago', () => {
    let element: Pago;
    beforeEach(() => {
        element = new Pago();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pago10:Pago');
        expect(element.getElementName()).toBe('pago10:Pago');
    });

    test('docto relacionado', () => {
        expect(element).toElementHasChildMultiple(DoctoRelacionado);
    });

    test('impuestos', () => {
        // Object is empty
        expect(element.count()).toBe(0);

        const empty = element.addImpuestos();
        expect(empty).toBeInstanceOf(Impuestos);

        // Add insert first element
        const first = element.addImpuestos({ id: 'first' });
        expect(first).toBeInstanceOf(Impuestos);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(2);

        // Add insert second element and is not the same
        const second = element.addImpuestos({ id: 'second' });
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(3);
        expect(second.attributes().get('id')).not.toBe(first.attributes().get('id'));
    });

    test('children order', () => {
        // Add in inverse order
        element.addImpuestos();
        element.addDoctoRelacionado();

        // Retrieve in correct order
        expect(element.children().get(0)).toBeInstanceOf(DoctoRelacionado);
        expect(element.children().get(1)).toBeInstanceOf(Impuestos);
    });
});
