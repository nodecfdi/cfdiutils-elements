import {
    Addenda,
    CfdiRetenRelacionados,
    Complemento,
    Emisor,
    Periodo,
    Receptor,
    Retenciones,
    Totales
} from '~/retenciones20';

describe('Elements.Retenciones20.Retenciones', () => {
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

    test('shortcut retencion imp retenido', () => {
        const element = new Retenciones();
        const empty = element.addImpRetenidos();

        const first = element.addImpRetenidos({ id: '1' });

        expect(element.getTotales().children().length).toBe(2);
        expect(element.getTotales().children().exists(first)).toBeTruthy();

        const second = element.addImpRetenidos({ id: '2' });

        expect(element.getTotales().children().length).toBe(3);
        expect(element.getTotales().children().exists(second)).toBeTruthy();

        expect(element).toBe(element.multiImpRetenidos({ id: '3' }, { id: '4' }));
        expect(element.getTotales().children().length).toBe(5);

        expect(
            element
                .getTotales()
                .children()
                .map((ele) => ele.get('id'))
        ).toStrictEqual(['', '1', '2', '3', '4']);
    });
});
