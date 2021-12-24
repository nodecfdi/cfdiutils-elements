import '../../matchers/to_element_has_child';
import { Ubicacion, Ubicaciones } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Ubicaciones', () => {
    test('ubicaciones', () => {
        const element = new Ubicaciones();
        
        expect(element.name()).toBe('cartaporte:Ubicaciones');
        expect(element.getElementName()).toBe('cartaporte:Ubicaciones');

        expect(element).toElementHasChildMultiple(Ubicacion);
    });
});
