import { IdentificacionVehicular } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.IdentificacionVehicular', () => {
    test('get element name', () => {
        const element = new IdentificacionVehicular();
        
        expect(element.name()).toBe('cartaporte:IdentificacionVehicular');
        expect(element.getElementName()).toBe('cartaporte:IdentificacionVehicular');
    });
});
