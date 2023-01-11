import { Remolque, Remolques } from '~/carta-porte20';

describe('Elements.CartaPorte20.Remolques', () => {
    test('remolques', () => {
        const element = new Remolques();
        expect(element.name()).toBe('cartaporte20:Remolques');
        expect(element.getElementName()).toBe('cartaporte20:Remolques');

        expect(element).toElementHasChildMultiple(Remolque);
    });
});
