import { DerechosDePaso } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.DerechosDePaso', () => {
    test('get element name', () => {
        const element = new DerechosDePaso();
        
        expect(element.name()).toBe('cartaporte:DerechosDePaso');
        expect(element.getElementName()).toBe('cartaporte:DerechosDePaso');
    });
});
