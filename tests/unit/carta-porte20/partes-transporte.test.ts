import { PartesTransporte } from '~/carta-porte20';

describe('Elements.CartaPorte20.PartesTransporte', () => {
    test('partes transporte', () => {
        const element = new PartesTransporte();
        expect(element.name()).toBe('cartaporte20:PartesTransporte');
        expect(element.getElementName()).toBe('cartaporte20:PartesTransporte');
    });
});
