import '../../matchers/to_element_has_child';
import { CantidadTransporta, DetalleMercancia, Mercancia } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Mercancia', () => {

    test('mercancia', () => {
        const element = new Mercancia();
        expect(element.name()).toBe('cartaporte:Mercancia');
        expect(element.getElementName()).toBe('cartaporte:Mercancia');

        expect(element).toElementHasChildMultiple(CantidadTransporta);
        expect(element).toElementHasChildSingle(DetalleMercancia);
    });
});
