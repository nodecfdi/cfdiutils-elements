import { Contenedor, TransporteMaritimo } from '~/carta-porte20';

describe('Elements.CartaPorte20.TransporteMaritimo', () => {
    test('transporte maritimo', () => {
        const element = new TransporteMaritimo();
        expect(element.name()).toBe('cartaporte20:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte20:TransporteMaritimo');

        expect(element).toElementHasChildMultiple(Contenedor);
    });
});
