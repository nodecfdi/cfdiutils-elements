import {
    ACuentaTerceros,
    Addenda,
    CfdiRelacionado,
    CfdiRelacionados,
    Complemento,
    ComplementoConcepto,
    Comprobante,
    Concepto,
    ConceptoImpuestos,
    Conceptos,
    CuentaPredial,
    Emisor,
    Impuestos,
    InformacionAduanera,
    InformacionGlobal,
    Parte,
    Receptor,
    Retencion,
    Retenciones,
    Traslado,
    Traslados
} from '~/cfdi40';

describe('Elements.CFDI40', () => {
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

    test('informacion global', () => {
        const element = new InformacionGlobal();
        expect(element.getElementName()).toBe('cfdi:InformacionGlobal');
    });

    test('relacionados', () => {
        const element = new CfdiRelacionados();
        expect(element.getElementName()).toBe('cfdi:CfdiRelacionados');
        expect(element).toElementHasChildMultiple(CfdiRelacionado);
    });

    test('relacionado', () => {
        const element = new CfdiRelacionado();
        expect(element.getElementName()).toBe('cfdi:CfdiRelacionado');
    });

    test('emisor', () => {
        const element = new Emisor();
        expect(element.getElementName()).toBe('cfdi:Emisor');
    });

    test('receptor', () => {
        const element = new Receptor();
        expect(element.getElementName()).toBe('cfdi:Receptor');
    });

    test('conceptos', () => {
        const element = new Conceptos();
        expect(element.getElementName()).toBe('cfdi:Conceptos');
        expect(element).toElementHasChildMultiple(Concepto);
    });

    test('concepto', () => {
        const element = new Concepto();
        expect(element.getElementName()).toBe('cfdi:Concepto');
        expect(element.getChildrenOrder()).toStrictEqual([
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte'
        ]);
        expect(element).toElementHasChildSingle(ConceptoImpuestos, 'getImpuestos', 'addImpuestos');
        expect(element).toElementHasChildSingle(ACuentaTerceros);
        expect(element).toElementHasChildMultiple(InformacionAduanera);
        expect(element).toElementHasChildMultiple(CuentaPredial);
        expect(element).toElementHasChildSingleAddChild(ComplementoConcepto);
        expect(element).toElementHasChildMultiple(Parte);
    });

    test('concepto impuestos', () => {
        const element = new ConceptoImpuestos();
        expect(element.getElementName()).toBe('cfdi:Impuestos');
        expect(element.getChildrenOrder()).toStrictEqual(['cfdi:Traslados', 'cfdi:Retenciones']);
        expect(element.children().getOrder()).toStrictEqual(['cfdi:Traslados', 'cfdi:Retenciones']);
        expect(element).toElementHasChildSingle(Traslados);
        expect(element).toElementHasChildSingle(Retenciones);
    });

    test('traslados', () => {
        const element = new Traslados();
        expect(element.getElementName()).toBe('cfdi:Traslados');
        expect(element).toElementHasChildMultiple(Traslado);
    });

    test('traslado', () => {
        const element = new Traslado();
        expect(element.getElementName()).toBe('cfdi:Traslado');
    });

    test('retenciones', () => {
        const element = new Retenciones();
        expect(element.getElementName()).toBe('cfdi:Retenciones');
        expect(element).toElementHasChildMultiple(Retencion);
    });

    test('retencion', () => {
        const element = new Retencion();
        expect(element.getElementName()).toBe('cfdi:Retencion');
    });

    test('a cuenta de terceros', () => {
        const element = new ACuentaTerceros();
        expect(element.getElementName()).toBe('cfdi:ACuentaTerceros');
    });

    test('información aduanera', () => {
        const element = new InformacionAduanera();
        expect(element.getElementName()).toBe('cfdi:InformacionAduanera');
    });

    test('cuenta predial', () => {
        const element = new CuentaPredial();
        expect(element.getElementName()).toBe('cfdi:CuentaPredial');
    });

    test('complemento concepto', () => {
        const element = new ComplementoConcepto();
        expect(element.getElementName()).toBe('cfdi:ComplementoConcepto');
    });

    test('parte', () => {
        const element = new Parte();
        expect(element.getElementName()).toBe('cfdi:Parte');
        expect(element).toElementHasChildMultiple(InformacionAduanera);
    });

    test('impuestos', () => {
        const element = new Impuestos();
        expect(element.getElementName()).toBe('cfdi:Impuestos');
        expect(element.getChildrenOrder()).toStrictEqual(['cfdi:Retenciones', 'cfdi:Traslados']);
        expect(element.children().getOrder()).toStrictEqual(['cfdi:Retenciones', 'cfdi:Traslados']);
        expect(element).toElementHasChildSingle(Retenciones);
        expect(element).toElementHasChildSingle(Traslados);
    });

    test('complemento', () => {
        const element = new Complemento();
        expect(element.getElementName()).toBe('cfdi:Complemento');
    });

    test('addenda', () => {
        const element = new Addenda();
        expect(element.getElementName()).toBe('cfdi:Addenda');
    });
});
