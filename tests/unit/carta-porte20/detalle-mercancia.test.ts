import { DetalleMercancia } from '~/carta-porte20';

describe('Elements.CartaPorte20.DetalleMercancia', () => {
    test('detalle mercancia', () => {
        const element = new DetalleMercancia();
        expect(element.name()).toBe('cartaporte20:DetalleMercancia');
        expect(element.getElementName()).toBe('cartaporte20:DetalleMercancia');
    });
});
