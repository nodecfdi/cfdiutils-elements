import { Domicilio } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Domicilio', () => {
    test('get element name', () => {
        const element = new Domicilio();
        
        expect(element.name()).toBe('cartaporte:Domicilio');
        expect(element.getElementName()).toBe('cartaporte:Domicilio');
    });
});
