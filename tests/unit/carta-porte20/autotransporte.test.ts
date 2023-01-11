import { Autotransporte, IdentificacionVehicular, Remolques, Seguros } from '~/carta-porte20';

describe('Elements.CartaPorte20.Autotransporte', () => {
    test('autotransporte', () => {
        const element = new Autotransporte();
        expect(element.name()).toBe('cartaporte20:Autotransporte');
        expect(element.getElementName()).toBe('cartaporte20:Autotransporte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:IdentificacionVehicular',
            'cartaporte20:Seguros',
            'cartaporte20:Remolques'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cartaporte20:IdentificacionVehicular',
            'cartaporte20:Seguros',
            'cartaporte20:Remolques'
        ]);

        expect(element).toElementHasChildSingle(IdentificacionVehicular);
        expect(element).toElementHasChildSingle(Seguros);
        expect(element).toElementHasChildSingle(Remolques);
    });
});
