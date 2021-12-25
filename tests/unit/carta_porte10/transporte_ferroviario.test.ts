import '../../matchers/to_element_has_child';
import { Carro, DerechosDePaso, TransporteFerroviario } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.TransporteFerroviario', () => {

    test('transporte ferroviario', () => {
        const element = new TransporteFerroviario();
        expect(element.name()).toBe('cartaporte:TransporteFerroviario');
        expect(element.getElementName()).toBe('cartaporte:TransporteFerroviario');

        expect(element).toElementHasChildMultiple(DerechosDePaso);
        expect(element).toElementHasChildMultiple(Carro);
    });
});
