import {
    Addenda,
    CfdiRelacionados,
    Complemento,
    Comprobante,
    Conceptos,
    Emisor,
    Impuestos,
    InformacionGlobal,
    Receptor
} from '~/cfdi40';

describe('Elements.CFDI40.Comprobante', () => {
    test('comprobante', () => {
        const element = new Comprobante();
        expect(element.getElementName()).toBe('cfdi:Comprobante');
        expect(element.getChildrenOrder()).toStrictEqual([
            'cfdi:InformacionGlobal',
            'cfdi:CfdiRelacionados',
            'cfdi:Emisor',
            'cfdi:Receptor',
            'cfdi:Conceptos',
            'cfdi:Impuestos',
            'cfdi:Complemento',
            'cfdi:Addenda'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cfdi:InformacionGlobal',
            'cfdi:CfdiRelacionados',
            'cfdi:Emisor',
            'cfdi:Receptor',
            'cfdi:Conceptos',
            'cfdi:Impuestos',
            'cfdi:Complemento',
            'cfdi:Addenda'
        ]);
        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
            'Version': '4.0'
        });
        expect(element).toElementHasChildSingle(InformacionGlobal);
        expect(element).toElementHasChildMultiple(CfdiRelacionados);
        expect(element).toElementHasChildSingle(Emisor);
        expect(element).toElementHasChildSingle(Receptor);
        expect(element).toElementHasChildSingle(Conceptos);
        expect(element).toElementHasChildSingle(Impuestos);
        expect(element).toElementHasChildSingleAddChild(Complemento);
        expect(element).toElementHasChildSingleAddChild(Addenda);
    });

    test('get impuestos', () => {
        const element = new Comprobante();
        expect(element.searchNode('cfdi:Impuestos')).toBeUndefined();
        const child = element.getElementImpuestos();
        expect(child).toBeInstanceOf(Impuestos);
        expect(element.searchNode('cfdi:Impuestos')).toBe(child);
    });
});
