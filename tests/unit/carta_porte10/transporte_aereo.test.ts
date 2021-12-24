import { TransporteAereo } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.TransporteAereo', () => {
    test('get element name', () => {
        const element = new TransporteAereo();
        
        expect(element.name()).toBe('cartaporte:TransporteAereo');
        expect(element.getElementName()).toBe('cartaporte:TransporteAereo');
    });
});
