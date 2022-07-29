import {
    Autotransporte,
    CantidadTransporta,
    Carro,
    CartaPorte,
    Contenedor,
    DerechosDePaso,
    DetalleMercancia,
    Domicilio,
    FiguraTransporte,
    GuiasIdentificacion,
    IdentificacionVehicular,
    Mercancia,
    Mercancias,
    PartesTransporte,
    Pedimentos,
    Remolque,
    Remolques,
    Seguros,
    TiposFigura,
    TransporteAereo,
    TransporteFerroviario,
    TransporteMaritimo,
    Ubicacion,
    Ubicaciones
} from '~/carta-porte20';

describe('Elements.CartaPorte20', () => {
    test('carta porte', () => {
        const element = new CartaPorte();
        expect(element.name()).toBe('cartaporte20:CartaPorte');
        expect(element.getElementName()).toBe('cartaporte20:CartaPorte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Ubicaciones',
            'cartaporte20:Mercancias',
            'cartaporte20:FiguraTransporte'
        ]);

        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:cartaporte20': 'http://www.sat.gob.mx/CartaPorte20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/CartaPorte20 http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte20.xsd',
            'Version': '2.0'
        });
        expect(element).toElementHasChildSingle(Ubicaciones);
        expect(element).toElementHasChildSingle(Mercancias);
        expect(element).toElementHasChildSingle(FiguraTransporte);
    });

    test('ubicaciones', () => {
        const element = new Ubicaciones();
        expect(element.name()).toBe('cartaporte20:Ubicaciones');
        expect(element.getElementName()).toBe('cartaporte20:Ubicaciones');
        expect(element).toElementHasChildMultiple(Ubicacion);
    });

    test('mercancias', () => {
        const element = new Mercancias();
        expect(element.name()).toBe('cartaporte20:Mercancias');
        expect(element.getElementName()).toBe('cartaporte20:Mercancias');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Mercancia',
            'cartaporte20:Autotransporte',
            'cartaporte20:TransporteMaritimo',
            'cartaporte20:TransporteAereo',
            'cartaporte20:TransporteFerroviario'
        ]);

        expect(element).toElementHasChildMultiple(Mercancia);
        expect(element).toElementHasChildSingle(Autotransporte);
        expect(element).toElementHasChildSingle(TransporteMaritimo);
        expect(element).toElementHasChildSingle(TransporteAereo);
        expect(element).toElementHasChildSingle(TransporteFerroviario);
    });

    test('figura transporte', () => {
        const element = new FiguraTransporte();
        expect(element.name()).toBe('cartaporte20:FiguraTransporte');
        expect(element.getElementName()).toBe('cartaporte20:FiguraTransporte');

        expect(element).toElementHasChildMultiple(TiposFigura);
    });

    test('ubicacion', () => {
        const element = new Ubicacion();
        expect(element.name()).toBe('cartaporte20:Ubicacion');
        expect(element.getElementName()).toBe('cartaporte20:Ubicacion');

        expect(element).toElementHasChildSingle(Domicilio);
    });

    test('mercancia', () => {
        const element = new Mercancia();
        expect(element.name()).toBe('cartaporte20:Mercancia');
        expect(element.getElementName()).toBe('cartaporte20:Mercancia');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Pedimentos',
            'cartaporte20:GuiasIdentificacion',
            'cartaporte20:CantidadTransporta',
            'cartaporte20:DetalleMercancia'
        ]);

        expect(element).toElementHasChildMultiple(Pedimentos);
        expect(element).toElementHasChildMultiple(GuiasIdentificacion);
        expect(element).toElementHasChildMultiple(CantidadTransporta);
        expect(element).toElementHasChildSingle(DetalleMercancia);
    });

    test('autotransporte', () => {
        const element = new Autotransporte();
        expect(element.name()).toBe('cartaporte20:Autotransporte');
        expect(element.getElementName()).toBe('cartaporte20:Autotransporte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:IdentificacionVehicular',
            'cartaporte20:Seguros',
            'cartaporte20:Remolques'
        ]);

        expect(element).toElementHasChildSingle(IdentificacionVehicular);
        expect(element).toElementHasChildSingle(Seguros);
        expect(element).toElementHasChildSingle(Remolques);
    });

    test('transporte maritimo', () => {
        const element = new TransporteMaritimo();
        expect(element.name()).toBe('cartaporte20:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte20:TransporteMaritimo');

        expect(element).toElementHasChildMultiple(Contenedor);
    });

    test('transporte aereo', () => {
        const element = new TransporteMaritimo();
        expect(element.name()).toBe('cartaporte20:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte20:TransporteMaritimo');
    });

    test('transporte ferroviario', () => {
        const element = new TransporteFerroviario();
        expect(element.name()).toBe('cartaporte20:TransporteFerroviario');
        expect(element.getElementName()).toBe('cartaporte20:TransporteFerroviario');

        expect(element.getChildrenOrder()).toStrictEqual(['cartaporte20:DerechosDePaso', 'cartaporte20:Carro']);

        expect(element).toElementHasChildMultiple(DerechosDePaso);
        expect(element).toElementHasChildMultiple(Carro);
    });

    test('domicilio', () => {
        const element = new Domicilio();
        expect(element.name()).toBe('cartaporte20:Domicilio');
        expect(element.getElementName()).toBe('cartaporte20:Domicilio');
    });

    test('tipos figuras', () => {
        const element = new TiposFigura();
        expect(element.name()).toBe('cartaporte20:TiposFigura');
        expect(element.getElementName()).toBe('cartaporte20:TiposFigura');

        expect(element.getChildrenOrder()).toStrictEqual(['cartaporte20:PartesTransporte', 'cartaporte20:Domicilio']);

        expect(element).toElementHasChildMultiple(PartesTransporte);
        expect(element).toElementHasChildSingle(Domicilio);
    });

    test('pedimentos', () => {
        const element = new Pedimentos();
        expect(element.name()).toBe('cartaporte20:Pedimentos');
        expect(element.getElementName()).toBe('cartaporte20:Pedimentos');
    });

    test('guias identificacion', () => {
        const element = new GuiasIdentificacion();
        expect(element.name()).toBe('cartaporte20:GuiasIdentificacion');
        expect(element.getElementName()).toBe('cartaporte20:GuiasIdentificacion');
    });

    test('cantidad transporta', () => {
        const element = new CantidadTransporta();
        expect(element.name()).toBe('cartaporte20:CantidadTransporta');
        expect(element.getElementName()).toBe('cartaporte20:CantidadTransporta');
    });

    test('detalle mercancia', () => {
        const element = new DetalleMercancia();
        expect(element.name()).toBe('cartaporte20:DetalleMercancia');
        expect(element.getElementName()).toBe('cartaporte20:DetalleMercancia');
    });

    test('identificacion vehicular', () => {
        const element = new IdentificacionVehicular();
        expect(element.name()).toBe('cartaporte20:IdentificacionVehicular');
        expect(element.getElementName()).toBe('cartaporte20:IdentificacionVehicular');
    });

    test('seguros', () => {
        const element = new Seguros();
        expect(element.name()).toBe('cartaporte20:Seguros');
        expect(element.getElementName()).toBe('cartaporte20:Seguros');
    });

    test('remolques', () => {
        const element = new Remolques();
        expect(element.name()).toBe('cartaporte20:Remolques');
        expect(element.getElementName()).toBe('cartaporte20:Remolques');

        expect(element).toElementHasChildMultiple(Remolque);
    });

    test('contenedor', () => {
        const element = new Contenedor();
        expect(element.name()).toBe('cartaporte20:Contenedor');
        expect(element.getElementName()).toBe('cartaporte20:Contenedor');
    });

    test('derechos de paso', () => {
        const element = new DerechosDePaso();
        expect(element.name()).toBe('cartaporte20:DerechosDePaso');
        expect(element.getElementName()).toBe('cartaporte20:DerechosDePaso');
    });
    test('carro', () => {
        const element = new Carro();
        expect(element.name()).toBe('cartaporte20:Carro');
        expect(element.getElementName()).toBe('cartaporte20:Carro');

        expect(element).toElementHasChildMultiple(Contenedor);
    });

    test('partes transporte', () => {
        const element = new PartesTransporte();
        expect(element.name()).toBe('cartaporte20:PartesTransporte');
        expect(element.getElementName()).toBe('cartaporte20:PartesTransporte');
    });

    test('remolque', () => {
        const element = new Remolque();
        expect(element.name()).toBe('cartaporte20:Remolque');
        expect(element.getElementName()).toBe('cartaporte20:Remolque');
    });
});
