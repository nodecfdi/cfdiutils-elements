import {
    ComplementoConcepto,
    Concepto,
    ConceptoImpuestos,
    CuentaPredial,
    Impuestos,
    InformacionAduanera,
    Parte
} from '~/cfdi33';

describe('Elements.Cfdi33.Concepto', () => {
    let element: Concepto;
    beforeEach(() => {
        element = new Concepto();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cfdi:Concepto');
        expect(element.getElementName()).toBe('cfdi:Concepto');
    });

    test('get impuestos', () => {
        expect(element.searchNode('cfdi:Impuestos')).toBeUndefined();
        const child = element.getImpuestos();
        expect(child).toBeInstanceOf(ConceptoImpuestos);
        expect(element.searchNode('cfdi:Impuestos')).toStrictEqual(child);
    });

    test('cuenta predial', () => {
        expect(element).toElementHasChildSingle(CuentaPredial);
    });

    test('complemento concepto', () => {
        expect(element).toElementHasChildSingle(ComplementoConcepto);
    });

    test('add parte', () => {
        // No child's
        const parent = element;
        expect(parent.count()).toBe(0);

        // Add first child
        const first = parent.addParte({
            name: 'first'
        });
        expect(first).toBeInstanceOf(Parte);
        expect(first.attributes().get('name')).toBe('first');
        expect(parent.count()).toBe(1);

        // Add second child
        parent.addParte();
        expect(parent.count()).toBe(2);
    });

    test('multi parte', () => {
        const node = element;
        expect(node.count()).toBe(0);
        const multiReturn = node.multiParte({ id: 'first' }, { id: 'second' });
        expect(multiReturn).toStrictEqual(node);
        expect(node.count()).toBe(2);
        expect(node.searchAttribute('cfdi:Parte', 'id')).toBe('first');
    });

    test('children order', () => {
        // Add in inverse order
        element.addParte();
        element.getComplementoConcepto();
        element.getCuentaPredial();
        element.addInformacionAduanera();
        element.getImpuestos();

        // Retrieve in correct order
        expect(element.children().get(0)).toBeInstanceOf(Impuestos);
        expect(element.children().get(1)).toBeInstanceOf(InformacionAduanera);
        expect(element.children().get(2)).toBeInstanceOf(CuentaPredial);
        expect(element.children().get(3)).toBeInstanceOf(ComplementoConcepto);
        expect(element.children().get(4)).toBeInstanceOf(Parte);
    });
});
