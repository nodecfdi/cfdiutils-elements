import { Remolques, Remolque } from '~/carta-porte10';

describe('Elements.CartaPorte10.Remolques', () => {
    test('remolques', () => {
        const element = new Remolques();

        expect(element.name()).toBe('cartaporte:Remolques');
        expect(element.getElementName()).toBe('cartaporte:Remolques');

        expect(element).toElementHasChildMultiple(Remolque);
    });
});
