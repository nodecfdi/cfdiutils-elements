import { Pedimentos } from '~/carta-porte20';

describe('Elements.CartaPorte20.Pedimentos', () => {
    test('pedimentos', () => {
        const element = new Pedimentos();
        expect(element.name()).toBe('cartaporte20:Pedimentos');
        expect(element.getElementName()).toBe('cartaporte20:Pedimentos');
    });
});
