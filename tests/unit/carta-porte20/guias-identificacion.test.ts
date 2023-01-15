import { GuiasIdentificacion } from '~/carta-porte20';

describe('Elements.CartaPorte20.GuiasIdentificacion', () => {
    test('guias identificacion', () => {
        const element = new GuiasIdentificacion();
        expect(element.name()).toBe('cartaporte20:GuiasIdentificacion');
        expect(element.getElementName()).toBe('cartaporte20:GuiasIdentificacion');
    });
});
