import {
    AutotransporteFederal,
    Mercancias,
    Mercancia,
    TransporteMaritimo,
    TransporteAereo,
    TransporteFerroviario
} from '~/carta-porte10';

describe('Elements.CartaPorte10.Mercancias', () => {
    test('mercancias', () => {
        const element = new Mercancias();
        expect(element.name()).toBe('cartaporte:Mercancias');
        expect(element.getElementName()).toBe('cartaporte:Mercancias');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte:Mercancia',
            'cartaporte:AutotransporteFederal',
            'cartaporte:TransporteMaritimo',
            'cartaporte:TransporteAereo',
            'cartaporte:TransporteFerroviario'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cartaporte:Mercancia',
            'cartaporte:AutotransporteFederal',
            'cartaporte:TransporteMaritimo',
            'cartaporte:TransporteAereo',
            'cartaporte:TransporteFerroviario'
        ]);

        expect(element).toElementHasChildMultiple(Mercancia);
        expect(element).toElementHasChildSingle(AutotransporteFederal);
        expect(element).toElementHasChildSingle(TransporteMaritimo);
        expect(element).toElementHasChildSingle(TransporteAereo);
        expect(element).toElementHasChildSingle(TransporteFerroviario);
    });
});
