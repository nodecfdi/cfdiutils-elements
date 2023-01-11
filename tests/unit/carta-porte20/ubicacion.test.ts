import { Domicilio, Ubicacion } from '~/carta-porte20';

describe('Elements.CartaPorte20.Ubicacion', () => {
    test('ubicacion', () => {
        const element = new Ubicacion();
        expect(element.name()).toBe('cartaporte20:Ubicacion');
        expect(element.getElementName()).toBe('cartaporte20:Ubicacion');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
