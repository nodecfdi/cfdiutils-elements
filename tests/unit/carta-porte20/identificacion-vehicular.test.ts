import { IdentificacionVehicular } from '~/carta-porte20';

describe('Elements.CartaPorte20.IdentificacionVehicular', () => {
    test('identificacion vehicular', () => {
        const element = new IdentificacionVehicular();
        expect(element.name()).toBe('cartaporte20:IdentificacionVehicular');
        expect(element.getElementName()).toBe('cartaporte20:IdentificacionVehicular');
    });
});
