import { Remolque } from '~/carta-porte10';

describe('Elements.CartaPorte10.Remolque', () => {
    test('remolque', () => {
        const element = new Remolque();

        expect(element.name()).toBe('cartaporte:Remolque');
        expect(element.getElementName()).toBe('cartaporte:Remolque');
    });
});
