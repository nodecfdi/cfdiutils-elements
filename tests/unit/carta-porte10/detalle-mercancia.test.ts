import { DetalleMercancia } from '~/carta-porte10';

describe('Elements.CartaPorte10.DetalleMercancia', () => {
    test('get element name', () => {
        const element = new DetalleMercancia();

        expect(element.name()).toBe('cartaporte:DetalleMercancia');
        expect(element.getElementName()).toBe('cartaporte:DetalleMercancia');
    });
});
