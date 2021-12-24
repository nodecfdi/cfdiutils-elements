import '../../matchers/to_element_has_child';
import { Domicilio, Propietario } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Propietario', () => {

    test('propietario', () => {
        const element = new Propietario();

        expect(element.name()).toBe('cartaporte:Propietario');
        expect(element.getElementName()).toBe('cartaporte:Propietario');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
