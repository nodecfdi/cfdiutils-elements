import { CantidadTransporta, DetalleMercancia, GuiasIdentificacion, Mercancia, Pedimentos } from '~/carta-porte20';

describe('Elements.CartaPorte20.Mercancia', () => {
    test('mercancia', () => {
        const element = new Mercancia();
        expect(element.name()).toBe('cartaporte20:Mercancia');
        expect(element.getElementName()).toBe('cartaporte20:Mercancia');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Pedimentos',
            'cartaporte20:GuiasIdentificacion',
            'cartaporte20:CantidadTransporta',
            'cartaporte20:DetalleMercancia'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cartaporte20:Pedimentos',
            'cartaporte20:GuiasIdentificacion',
            'cartaporte20:CantidadTransporta',
            'cartaporte20:DetalleMercancia'
        ]);

        expect(element).toElementHasChildMultiple(Pedimentos);
        expect(element).toElementHasChildMultiple(GuiasIdentificacion);
        expect(element).toElementHasChildMultiple(CantidadTransporta);
        expect(element).toElementHasChildSingle(DetalleMercancia);
    });
});
