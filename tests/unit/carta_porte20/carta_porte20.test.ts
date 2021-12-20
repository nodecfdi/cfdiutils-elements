import { AbstractElement } from '../../../src';
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
    Ubicaciones,
} from '../../../src/carta_porte20';

describe('Elements.CartaPorte20', () => {
    const assertElementHasChildSingle = <T>(element: T, childClassName: unknown): void => {
        (element as unknown as AbstractElement).children().removeAll();
        const childClassBaseName = (childClassName as { name: string }).name;

        const getter: keyof T = ('get' + childClassBaseName) as keyof T;
        const instance = (element[getter] as unknown as () => void)();
        expect(instance).toBeInstanceOf(childClassName);
        expect(instance).toBe((element[getter] as unknown as () => void)());

        const adder = ('add' + childClassBaseName) as keyof T;
        const second = (element[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            foo: 'bar',
        });
        expect(second).toBeInstanceOf(childClassName);
        expect(second.attributes().get('foo')).toBe('bar');
    };

    const assertElementHasChildMultiple = <T>(element: T, childClassName: unknown): void => {
        (element as unknown as AbstractElement).children().removeAll();
        const childClassBaseName = (childClassName as { name: string }).name;
        const adder = ('add' + childClassBaseName) as keyof T;

        const first = (element[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'first',
        });
        expect(first).toBeInstanceOf(childClassName);
        expect(first.attributes().get('id')).toBe('first');

        expect((element as unknown as AbstractElement).children().length).toBe(1);

        const second = (element[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'second',
        });
        expect(second).not.toBe(first);
        expect(second.attributes().get('id')).toBe('second');
        expect((element as unknown as AbstractElement).children().length).toBe(2);

        const multier = ('multi' + childClassBaseName) as keyof T;
        const sameAsElement = (
            element[multier] as unknown as (attributes: Record<string, unknown>[]) => AbstractElement
        )([{ id: 'third' }, { id: 'fourth' }]);

        expect(element).toBe(sameAsElement);
        expect((element as unknown as AbstractElement).children().length).toBe(4);
    };

    test('carta porte', () => {
        const element = new CartaPorte();
        expect(element.name()).toBe('cartaporte20:CartaPorte');
        expect(element.getElementName()).toBe('cartaporte20:CartaPorte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Ubicaciones',
            'cartaporte20:Mercancias',
            'cartaporte20:FiguraTransporte',
        ]);

        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:cartaporte20': 'http://www.sat.gob.mx/CartaPorte20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/CartaPorte20 http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte20.xsd',
            Version: '2.0',
        });
        assertElementHasChildSingle(element, Ubicaciones);
        assertElementHasChildSingle(element, Mercancias);
        assertElementHasChildSingle(element, FiguraTransporte);
    });

    test('ubicaciones', () => {
        const element = new Ubicaciones();
        expect(element.name()).toBe('cartaporte20:Ubicaciones');
        expect(element.getElementName()).toBe('cartaporte20:Ubicaciones');
        assertElementHasChildMultiple(element, Ubicacion);
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
            'cartaporte20:TransporteFerroviario',
        ]);

        assertElementHasChildMultiple(element, Mercancia);
        assertElementHasChildSingle(element, Autotransporte);
        assertElementHasChildSingle(element, TransporteMaritimo);
        assertElementHasChildSingle(element, TransporteAereo);
        assertElementHasChildSingle(element, TransporteFerroviario);
    });

    test('figura transporte', () => {
        const element = new FiguraTransporte();
        expect(element.name()).toBe('cartaporte20:FiguraTransporte');
        expect(element.getElementName()).toBe('cartaporte20:FiguraTransporte');

        assertElementHasChildMultiple(element, TiposFigura);
    });

    test('ubicacion', () => {
        const element = new Ubicacion();
        expect(element.name()).toBe('cartaporte20:Ubicacion');
        expect(element.getElementName()).toBe('cartaporte20:Ubicacion');

        assertElementHasChildSingle(element, Domicilio);
    });

    test('mercancia', () => {
        const element = new Mercancia();
        expect(element.name()).toBe('cartaporte20:Mercancia');
        expect(element.getElementName()).toBe('cartaporte20:Mercancia');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Pedimentos',
            'cartaporte20:GuiasIdentificacion',
            'cartaporte20:CantidadTransporta',
            'cartaporte20:DetalleMercancia',
        ]);

        assertElementHasChildMultiple(element, Pedimentos);
        assertElementHasChildMultiple(element, GuiasIdentificacion);
        assertElementHasChildMultiple(element, CantidadTransporta);
        assertElementHasChildSingle(element, DetalleMercancia);
    });

    test('autotransporte', () => {
        const element = new Autotransporte();
        expect(element.name()).toBe('cartaporte20:Autotransporte');
        expect(element.getElementName()).toBe('cartaporte20:Autotransporte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:IdentificacionVehicular',
            'cartaporte20:Seguros',
            'cartaporte20:Remolques',
        ]);

        assertElementHasChildSingle(element, IdentificacionVehicular);
        assertElementHasChildSingle(element, Seguros);
        assertElementHasChildSingle(element, Remolques);
    });

    test('transporte maritimo', () => {
        const element = new TransporteMaritimo();
        expect(element.name()).toBe('cartaporte20:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte20:TransporteMaritimo');
        assertElementHasChildMultiple(element, Contenedor);
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

        assertElementHasChildMultiple(element, DerechosDePaso);
        assertElementHasChildMultiple(element, Carro);
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

        assertElementHasChildMultiple(element, PartesTransporte);
        assertElementHasChildSingle(element, Domicilio);
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
        assertElementHasChildMultiple(element, Remolque);
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
        assertElementHasChildMultiple(element, Contenedor);
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
