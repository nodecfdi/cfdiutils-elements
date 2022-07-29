import { Carro, DerechosDePaso, TransporteFerroviario } from '~/carta-porte10';

describe('Elements.CartaPorte10.TransporteFerroviario', () => {
    test('transporte ferroviario', () => {
        const element = new TransporteFerroviario();
        expect(element.name()).toBe('cartaporte:TransporteFerroviario');
        expect(element.getElementName()).toBe('cartaporte:TransporteFerroviario');

        expect(element).toElementHasChildMultiple(DerechosDePaso);
        expect(element).toElementHasChildMultiple(Carro);
    });
});
