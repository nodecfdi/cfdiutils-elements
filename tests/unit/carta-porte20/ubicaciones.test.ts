import { Ubicacion, Ubicaciones } from '~/carta-porte20';

describe('Elements.CartaPorte20.Ubicaciones', () => {
    test('ubicaciones', () => {
        const element = new Ubicaciones();
        expect(element.name()).toBe('cartaporte20:Ubicaciones');
        expect(element.getElementName()).toBe('cartaporte20:Ubicaciones');
        expect(element).toElementHasChildMultiple(Ubicacion);
    });
});
