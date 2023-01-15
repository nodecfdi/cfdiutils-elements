import { Destino } from '~/carta-porte10';

describe('Elements.CartaPorte10.Destino', () => {
    test('get element name', () => {
        const element = new Destino();

        expect(element.name()).toBe('cartaporte:Destino');
        expect(element.getElementName()).toBe('cartaporte:Destino');
    });
});
