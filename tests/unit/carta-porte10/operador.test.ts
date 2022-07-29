import { Domicilio, Operador } from '~/carta-porte10';

describe('Elements.CartaPorte10.Operador', () => {
    test('operador', () => {
        const element = new Operador();

        expect(element.name()).toBe('cartaporte:Operador');
        expect(element.getElementName()).toBe('cartaporte:Operador');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
