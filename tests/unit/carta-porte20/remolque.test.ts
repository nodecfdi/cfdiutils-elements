import { Remolque } from '~/carta-porte20';

describe('Elements.CartaPorte20.Remolque', () => {
    test('remolque', () => {
        const element = new Remolque();
        expect(element.name()).toBe('cartaporte20:Remolque');
        expect(element.getElementName()).toBe('cartaporte20:Remolque');
    });
});
