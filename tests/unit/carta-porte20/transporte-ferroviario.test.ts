import { Carro, DerechosDePaso, TransporteFerroviario } from '~/carta-porte20';

describe('Elements.CartaPorte20.TransporteFerroviario', () => {
    test('transporte ferroviario', () => {
        const element = new TransporteFerroviario();
        expect(element.name()).toBe('cartaporte20:TransporteFerroviario');
        expect(element.getElementName()).toBe('cartaporte20:TransporteFerroviario');

        expect(element.getChildrenOrder()).toStrictEqual(['cartaporte20:DerechosDePaso', 'cartaporte20:Carro']);
        expect(element.children().getOrder()).toStrictEqual(['cartaporte20:DerechosDePaso', 'cartaporte20:Carro']);

        expect(element).toElementHasChildMultiple(DerechosDePaso);
        expect(element).toElementHasChildMultiple(Carro);
    });
});
