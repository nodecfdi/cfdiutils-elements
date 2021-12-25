import '../../matchers/to_element_has_child';
import { Operador, Operadores } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Operadores', () => {

    test('operadores', () => {
        const element = new Operadores();

        expect(element.name()).toBe('cartaporte:Operadores');
        expect(element.getElementName()).toBe('cartaporte:Operadores');

        expect(element).toElementHasChildMultiple(Operador);
    });
});
