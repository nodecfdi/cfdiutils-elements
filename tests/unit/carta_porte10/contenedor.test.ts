import { Contenedor } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Contenedor', () => {
    test('get element name', () => {
        const element = new Contenedor();

        expect(element.name()).toBe('cartaporte:Contenedor');
        expect(element.getElementName()).toBe('cartaporte:Contenedor');
    });
});
