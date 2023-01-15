import { Domicilio, PartesTransporte, TiposFigura } from '~/carta-porte20';

describe('Elements.CartaPorte20.TiposFigura', () => {
    test('tipos figuras', () => {
        const element = new TiposFigura();
        expect(element.name()).toBe('cartaporte20:TiposFigura');
        expect(element.getElementName()).toBe('cartaporte20:TiposFigura');

        expect(element.getChildrenOrder()).toStrictEqual(['cartaporte20:PartesTransporte', 'cartaporte20:Domicilio']);
        expect(element.children().getOrder()).toStrictEqual([
            'cartaporte20:PartesTransporte',
            'cartaporte20:Domicilio'
        ]);

        expect(element).toElementHasChildMultiple(PartesTransporte);
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
