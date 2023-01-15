import { Seguros } from '~/carta-porte20';

describe('Elements.CartaPorte20.Seguros', () => {
    test('seguros', () => {
        const element = new Seguros();
        expect(element.name()).toBe('cartaporte20:Seguros');
        expect(element.getElementName()).toBe('cartaporte20:Seguros');
    });
});
