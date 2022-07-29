import { Carro, Contenedor } from '~/carta-porte10';

describe('Elements.CartaPorte10.Carro', () => {
    test('get element name', () => {
        const element = new Carro();

        expect(element.name()).toBe('cartaporte:Carro');
        expect(element.getElementName()).toBe('cartaporte:Carro');

        expect(element).toElementHasChildMultiple(Contenedor);
    });
});
