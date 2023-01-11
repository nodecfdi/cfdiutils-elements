import { DerechosDePaso } from '~/carta-porte20';

describe('Elements.CartaPorte20.DerechosDePaso', () => {
    test('derechos de paso', () => {
        const element = new DerechosDePaso();
        expect(element.name()).toBe('cartaporte20:DerechosDePaso');
        expect(element.getElementName()).toBe('cartaporte20:DerechosDePaso');
    });
});
