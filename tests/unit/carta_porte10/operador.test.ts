import '../../matchers/to_element_has_child';
import { Domicilio, Operador } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Operador', () => {

    test('operador', () => {
        const element = new Operador();

        expect(element.name()).toBe('cartaporte:Operador');
        expect(element.getElementName()).toBe('cartaporte:Operador');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
