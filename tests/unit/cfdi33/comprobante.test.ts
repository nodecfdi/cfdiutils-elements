import {
    Addenda,
    CfdiRelacionado,
    CfdiRelacionados,
    Complemento,
    Comprobante,
    Concepto,
    Conceptos,
    Emisor,
    Impuestos,
    Receptor
} from '~/cfdi33';

describe('Elements.Cfdi33.Comprobante', () => {
    let element: Comprobante;
    beforeEach(() => {
        element = new Comprobante();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cfdi:Comprobante');
        expect(element.getElementName()).toBe('cfdi:Comprobante');
    });

    test('cfdi-relacionados', () => {
        expect(element).toElementHasChildSingle(CfdiRelacionados);
    });

    test('cfdi relacionado shortcut', () => {
        const empty = element.addCfdiRelacionado();
        expect(empty).toBeInstanceOf(CfdiRelacionado);
        expect(empty.attributes().size).toBe(0);

        const first = element.addCfdiRelacionado({
            UUID: 'FOO'
        });
        expect(first).toBeInstanceOf(CfdiRelacionado);
        expect(first.attributes().get('UUID')).toBe('FOO');
        expect(element.getCfdiRelacionados().count()).toBe(2);

        const self = element.multiCfdiRelacionado({ UUID: 'FOO' }, { UUID: 'BAR' });
        expect(self).toStrictEqual(element);
        expect(element.getCfdiRelacionados().count()).toBe(4);
        expect(element.getCfdiRelacionados().children().get(2).attributes().get('UUID')).toBe('FOO');
        expect(element.getCfdiRelacionados().children().get(3).attributes().get('UUID')).toBe('BAR');
    });

    test('emisor', () => {
        expect(element).toElementHasChildSingle(Emisor);
    });

    test('receptor', () => {
        expect(element).toElementHasChildSingle(Receptor);
    });

    test('conceptos', () => {
        expect(element).toElementHasChildSingle(Conceptos);
    });

    test('impuestos', () => {
        expect(element).toElementHasChildSingle(Impuestos);
    });

    test('add concepto shortcut', () => {
        expect(element.count()).toBe(0);

        const first = element.addConcepto({ name: 'FOO' });
        expect(first).toBeInstanceOf(Concepto);
        expect(first.attributes().get('name')).toBe('FOO');
        expect(element.count()).toBe(1);
    });

    test('complemento', () => {
        expect(element).toElementHasChildSingleAddChild(Complemento);
    });

    test('addenda', () => {
        expect(element).toElementHasChildSingleAddChild(Addenda);
    });

    test('has fixed attributes', () => {
        const namespace = 'http://www.sat.gob.mx/cfd/3';
        expect(element.attributes().get('Version')).toBe('3.3');
        expect(element.attributes().get('xmlns:cfdi')).toBe(namespace);
        expect((element.attributes().get('xsi:schemaLocation') || '').startsWith(`${namespace} http://`)).toBeTruthy();
        expect(element.attributes().get('xmlns:xsi')).not.toBe('');
    });

    test('children order', () => {
        // Add in inverse order
        element.getAddenda();
        element.getComplemento();
        element.getImpuestos();
        element.getConceptos();
        element.getReceptor();
        element.getEmisor();
        element.getCfdiRelacionados();

        // Retrieve in correct order
        expect(element.children().get(0)).toBeInstanceOf(CfdiRelacionados);
        expect(element.children().get(1)).toBeInstanceOf(Emisor);
        expect(element.children().get(2)).toBeInstanceOf(Receptor);
        expect(element.children().get(3)).toBeInstanceOf(Conceptos);
        expect(element.children().get(4)).toBeInstanceOf(Impuestos);
        expect(element.children().get(5)).toBeInstanceOf(Complemento);
        expect(element.children().get(6)).toBeInstanceOf(Addenda);
    });
});
