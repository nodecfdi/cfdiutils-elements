import '../../matchers/to_element_has_child';
import { Contenedor, TransporteMaritimo } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.TransporteMaritimo', () => {
    test('transporte maritimo', () => {
        const element = new TransporteMaritimo();
        
        expect(element.name()).toBe('cartaporte:TransporteMaritimo');
        expect(element.getElementName()).toBe('cartaporte:TransporteMaritimo');

        expect(element).toElementHasChildMultiple(Contenedor);
    });
});
