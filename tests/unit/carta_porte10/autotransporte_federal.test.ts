import '../../matchers/to_element_has_child';
import { AutotransporteFederal, IdentificacionVehicular, Remolques } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.AutotransporteFederal', () => {
    test('autotransporte federal', () => {
        const element = new AutotransporteFederal();

        expect(element.name()).toBe('cartaporte:AutotransporteFederal');
        expect(element.getElementName()).toBe('cartaporte:AutotransporteFederal');

        expect(element).toElementHasChildSingle(IdentificacionVehicular);
        expect(element).toElementHasChildSingle(Remolques);
    });
});
