import { CantidadTransporta } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.CantidadTransporta', () => {

    test('get element name', () => {
        const element = new CantidadTransporta();
        expect(element.name()).toBe('cartaporte:CantidadTransporta');
        expect(element.getElementName()).toBe('cartaporte:CantidadTransporta');
    });
});
