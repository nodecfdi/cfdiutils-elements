import {
    Autotransporte,
    Mercancia,
    Mercancias,
    TransporteAereo,
    TransporteFerroviario,
    TransporteMaritimo
} from '~/carta-porte20';

describe('Elements.CartaPorte20.Mercancias', () => {
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
        expect(element.children().getOrder()).toStrictEqual([
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
});
