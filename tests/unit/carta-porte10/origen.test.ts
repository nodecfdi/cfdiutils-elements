import { Origen } from '~/carta-porte10';

describe('Elements.CartaPorte10.Origen', () => {
    test('get element name', () => {
        const element = new Origen();

        expect(element.name()).toBe('cartaporte:Origen');
        expect(element.getElementName()).toBe('cartaporte:Origen');
    });
});
