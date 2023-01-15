import { FiguraTransporte, TiposFigura } from '~/carta-porte20';

describe('Elements.CartaPorte20.FiguraTransporte', () => {
    test('figura transporte', () => {
        const element = new FiguraTransporte();
        expect(element.name()).toBe('cartaporte20:FiguraTransporte');
        expect(element.getElementName()).toBe('cartaporte20:FiguraTransporte');

        expect(element).toElementHasChildMultiple(TiposFigura);
    });
});
