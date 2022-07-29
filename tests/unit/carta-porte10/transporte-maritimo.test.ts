import { Contenedor, TransporteMaritimo } from '~/carta-porte10';

describe('Elements.CartaPorte10.TransporteMaritimo', () => {
    test('transporte maritimo', () => {
        const element = new TransporteMaritimo();

        expect(element.name()).toBe('cartaporte:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte:TransporteMaritimo');

        expect(element).toElementHasChildMultiple(Contenedor);
    });
});
