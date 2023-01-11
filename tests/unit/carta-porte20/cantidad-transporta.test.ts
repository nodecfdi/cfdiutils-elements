import { CantidadTransporta } from '~/carta-porte20';

describe('Elements.CartaPorte20.CantidadTransporta', () => {
    test('cantidad transporta', () => {
        const element = new CantidadTransporta();
        expect(element.name()).toBe('cartaporte20:CantidadTransporta');
        expect(element.getElementName()).toBe('cartaporte20:CantidadTransporta');
    });
});
