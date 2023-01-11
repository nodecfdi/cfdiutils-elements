import { Carro, Contenedor } from '~/carta-porte20';

describe('Elements.CartaPorte20.Carro', () => {
    test('carro', () => {
        const element = new Carro();
        expect(element.name()).toBe('cartaporte20:Carro');
        expect(element.getElementName()).toBe('cartaporte20:Carro');

        expect(element).toElementHasChildMultiple(Contenedor);
    });
});
