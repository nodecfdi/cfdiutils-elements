import { AutotransporteFederal, IdentificacionVehicular, Remolques } from '~/carta-porte10';

describe('Elements.CartaPorte10.AutotransporteFederal', () => {
    test('autotransporte federal', () => {
        const element = new AutotransporteFederal();

        expect(element.name()).toBe('cartaporte:AutotransporteFederal');
        expect(element.getElementName()).toBe('cartaporte:AutotransporteFederal');

        expect(element).toElementHasChildSingle(IdentificacionVehicular);
        expect(element).toElementHasChildSingle(Remolques);
    });
});
