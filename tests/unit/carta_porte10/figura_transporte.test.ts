import '../../matchers/to_element_has_child';
import { Arrendatario, FiguraTransporte, Notificado, Operadores, Propietario } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.FiguraTransporte', () => {

    test('figura transporte', () => {
        const element = new FiguraTransporte();
        expect(element.name()).toBe('cartaporte:FiguraTransporte');
        expect(element.getElementName()).toBe('cartaporte:FiguraTransporte');

        expect(element).toElementHasChildMultiple(Operadores);
        expect(element).toElementHasChildMultiple(Propietario);
        expect(element).toElementHasChildMultiple(Arrendatario);
        expect(element).toElementHasChildMultiple(Notificado);
    });
});
