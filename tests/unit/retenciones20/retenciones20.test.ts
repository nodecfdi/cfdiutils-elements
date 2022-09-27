import {
    Addenda,
    CfdiRetenRelacionados,
    Complemento,
    Emisor,
    Extranjero,
    ImpRetenidos,
    Nacional,
    Periodo,
    Receptor,
    Retenciones,
    Totales
} from '~/retenciones20';

describe('Elements.Retenciones20', () => {
    test('retenciones', () => {
        const element = new Retenciones();
        expect(element.name()).toBe('retenciones:Retenciones');
        expect(element.getElementName()).toBe('retenciones:Retenciones');
        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:retenciones': 'http://www.sat.gob.mx/esquemas/retencionpago/2',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/2 http://www.sat.gob.mx/esquemas/retencionpago/2/retencionpagov2.xsd',
            'Version': '2.0'
        });
        expect(element.getChildrenOrder()).toStrictEqual([
            'retenciones:CfdiRetenRelacionados',
            'retenciones:Emisor',
            'retenciones:Receptor',
            'retenciones:Periodo',
            'retenciones:Totales',
            'retenciones:Complemento',
            'retenciones:Addenda'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'retenciones:CfdiRetenRelacionados',
            'retenciones:Emisor',
            'retenciones:Receptor',
            'retenciones:Periodo',
            'retenciones:Totales',
            'retenciones:Complemento',
            'retenciones:Addenda'
        ]);
        expect(element).toElementHasChildSingle(CfdiRetenRelacionados);
        expect(element).toElementHasChildSingle(Emisor);
        expect(element).toElementHasChildSingle(Receptor);
        expect(element).toElementHasChildSingle(Periodo);
        expect(element).toElementHasChildSingle(Totales);
        expect(element).toElementHasChildSingleAddChild(Complemento);
        expect(element).toElementHasChildSingleAddChild(Addenda);
    });

    test('cfdi reten relacionados', () => {
        const element = new CfdiRetenRelacionados();
        expect(element.name()).toBe('retenciones:CfdiRetenRelacionados');
        expect(element.getElementName()).toBe('retenciones:CfdiRetenRelacionados');
    });

    test('emisor', () => {
        const element = new Emisor();
        expect(element.name()).toBe('retenciones:Emisor');
        expect(element.getElementName()).toBe('retenciones:Emisor');
    });

    test('receptor', () => {
        const element = new Receptor();
        expect(element.name()).toBe('retenciones:Receptor');
        expect(element.getElementName()).toBe('retenciones:Receptor');
        expect(element).toElementHasChildSingle(Nacional);
        expect(element).toElementHasChildSingle(Extranjero);
    });

    test('nacional', () => {
        const element = new Nacional();
        expect(element.name()).toBe('retenciones:Nacional');
        expect(element.getElementName()).toBe('retenciones:Nacional');
    });

    test('extranjero', () => {
        const element = new Extranjero();
        expect(element.name()).toBe('retenciones:Extranjero');
        expect(element.getElementName()).toBe('retenciones:Extranjero');
    });

    test('periodo', () => {
        const element = new Periodo();
        expect(element.name()).toBe('retenciones:Periodo');
        expect(element.getElementName()).toBe('retenciones:Periodo');
    });

    test('totales', () => {
        const element = new Totales();
        expect(element.name()).toBe('retenciones:Totales');
        expect(element.getElementName()).toBe('retenciones:Totales');
    });

    test('imp Retenidos', () => {
        const element = new ImpRetenidos();
        expect(element.name()).toBe('retenciones:ImpRetenidos');
        expect(element.getElementName()).toBe('retenciones:ImpRetenidos');
    });

    test('complemento', () => {
        const element = new Complemento();
        expect(element.name()).toBe('retenciones:Complemento');
        expect(element.getElementName()).toBe('retenciones:Complemento');
    });

    test('addenda', () => {
        const element = new Addenda();
        expect(element.name()).toBe('retenciones:Addenda');
        expect(element.getElementName()).toBe('retenciones:Addenda');
    });

    test('shortcut retencion imp retenido', () => {
        const element = new Retenciones();
        const first = element.addImpRetenidos({ id: '1' });

        expect(element.getTotales().children().length).toBe(1);
        expect(element.getTotales().children().exists(first)).toBeTruthy();

        const second = element.addImpRetenidos({ id: '2' });

        expect(element.getTotales().children().length).toBe(2);
        expect(element.getTotales().children().exists(second)).toBeTruthy();

        expect(element).toBe(element.multiImpRetenidos({ id: '3' }, { id: '4' }));
        expect(element.getTotales().children().length).toBe(4);

        expect(
            element
                .getTotales()
                .children()
                .map((ele) => ele.get('id'))
        ).toStrictEqual(['1', '2', '3', '4']);
    });
});
