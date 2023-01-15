import { Domicilio } from '~/carta-porte20';

describe('Elements.CartaPorte20.Domicilio', () => {
    test('domicilio', () => {
        const element = new Domicilio();
        expect(element.name()).toBe('cartaporte20:Domicilio');
        expect(element.getElementName()).toBe('cartaporte20:Domicilio');
    });
});
