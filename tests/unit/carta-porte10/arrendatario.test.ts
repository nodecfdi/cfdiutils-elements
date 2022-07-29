import { Arrendatario, Domicilio } from '~/carta-porte10';

describe('Elements.CartaPorte10.Arrendatario', () => {
    test('arrendatario', () => {
        const element = new Arrendatario();

        expect(element.name()).toBe('cartaporte:Arrendatario');
        expect(element.getElementName()).toBe('cartaporte:Arrendatario');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
