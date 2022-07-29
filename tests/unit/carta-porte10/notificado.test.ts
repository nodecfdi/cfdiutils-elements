import { Domicilio, Notificado } from '~/carta-porte10';

describe('Elements.CartaPorte10.Notificado', () => {
    test('notificado', () => {
        const element = new Notificado();

        expect(element.name()).toBe('cartaporte:Notificado');
        expect(element.getElementName()).toBe('cartaporte:Notificado');

        expect(element).toElementHasChildSingle(Domicilio);
    });
});
