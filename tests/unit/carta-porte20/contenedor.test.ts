import { Contenedor } from '~/carta-porte20';

describe('Elements.CartaPorte20.Contenedor', () => {
    test('contenedor', () => {
        const element = new Contenedor();
        expect(element.name()).toBe('cartaporte20:Contenedor');
        expect(element.getElementName()).toBe('cartaporte20:Contenedor');
    });
});
