import {
    DoctoRelacionado,
    ImpuestosDR,
    ImpuestosP,
    Pago,
    Pagos,
    RetencionDR,
    RetencionesDR,
    RetencionesP,
    RetencionP,
    Totales,
    TrasladoDR,
    TrasladoP,
    TrasladosDR,
    TrasladosP
} from '~/pagos20';

describe('Elements.Pago20', () => {
    test('pagos', () => {
        const element = new Pagos();

        expect(element.getElementName()).toBe('pago20:Pagos');
        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:pago20': 'http://www.sat.gob.mx/Pagos20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/Pagos20 http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd',
            'Version': '2.0'
        });

        expect(element).toElementHasChildSingle(Totales);
        expect(element).toElementHasChildMultiple(Pago);
    });

    test('totales', () => {
        const element = new Totales();
        expect(element.getElementName()).toBe('pago20:Totales');
    });

    test('pago', () => {
        const element = new Pago();
        expect(element.getElementName()).toBe('pago20:Pago');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:DoctoRelacionado', 'pago20:ImpuestosP']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:DoctoRelacionado', 'pago20:ImpuestosP']);
        expect(element).toElementHasChildMultiple(DoctoRelacionado);
        expect(element).toElementHasChildSingle(ImpuestosP);
    });

    test('docto relacionado', () => {
        const element = new DoctoRelacionado();
        expect(element.getElementName()).toBe('pago20:DoctoRelacionado');
        expect(element).toElementHasChildSingle(ImpuestosDR);
    });

    test('impuestos dr', () => {
        const element = new ImpuestosDR();
        expect(element.getElementName()).toBe('pago20:ImpuestosDR');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:RetencionesDR', 'pago20:TrasladosDR']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:RetencionesDR', 'pago20:TrasladosDR']);
        expect(element).toElementHasChildSingle(RetencionesDR);
        expect(element).toElementHasChildSingle(TrasladosDR);
    });

    test('retenciones dr', () => {
        const element = new RetencionesDR();
        expect(element.getElementName()).toBe('pago20:RetencionesDR');
        expect(element).toElementHasChildMultiple(RetencionDR);
    });

    test('retencion dr', () => {
        const element = new RetencionDR();
        expect(element.getElementName()).toBe('pago20:RetencionDR');
    });

    test('traslados dr', () => {
        const element = new TrasladosDR();
        expect(element.getElementName()).toBe('pago20:TrasladosDR');
        expect(element).toElementHasChildMultiple(TrasladoDR);
    });

    test('traslado dr', () => {
        const element = new TrasladoDR();
        expect(element.getElementName()).toBe('pago20:TrasladoDR');
    });

    test('impuestos p', () => {
        const element = new ImpuestosP();
        expect(element.getElementName()).toBe('pago20:ImpuestosP');
        expect(element.getChildrenOrder()).toStrictEqual(['pago20:RetencionesP', 'pago20:TrasladosP']);
        expect(element.children().getOrder()).toStrictEqual(['pago20:RetencionesP', 'pago20:TrasladosP']);
        expect(element).toElementHasChildSingle(RetencionesP);
        expect(element).toElementHasChildSingle(TrasladosP);
    });

    test('retenciones p', () => {
        const element = new RetencionesP();
        expect(element.getElementName()).toBe('pago20:RetencionesP');
        expect(element).toElementHasChildMultiple(RetencionP);
    });

    test('retencion p', () => {
        const element = new RetencionP();
        expect(element.getElementName()).toBe('pago20:RetencionP');
    });

    test('traslados p', () => {
        const element = new TrasladosP();
        expect(element.getElementName()).toBe('pago20:TrasladosP');
        expect(element).toElementHasChildMultiple(TrasladoP);
    });

    test('traslado p', () => {
        const element = new TrasladoP();
        expect(element.getElementName()).toBe('pago20:TrasladoP');
    });
});
