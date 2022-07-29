import { Operador, Operadores } from '~/carta-porte10';

describe('Elements.CartaPorte10.Operadores', () => {
    test('operadores', () => {
        const element = new Operadores();

        expect(element.name()).toBe('cartaporte:Operadores');
        expect(element.getElementName()).toBe('cartaporte:Operadores');

        expect(element).toElementHasChildMultiple(Operador);
    });
});
