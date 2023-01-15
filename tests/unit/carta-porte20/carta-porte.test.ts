import { CartaPorte, FiguraTransporte, Mercancias, Ubicaciones } from '~/carta-porte20';

describe('Elements.CartaPorte20.CartaPorte', () => {
    test('carta porte', () => {
        const element = new CartaPorte();
        expect(element.name()).toBe('cartaporte20:CartaPorte');
        expect(element.getElementName()).toBe('cartaporte20:CartaPorte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte20:Ubicaciones',
            'cartaporte20:Mercancias',
            'cartaporte20:FiguraTransporte'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cartaporte20:Ubicaciones',
            'cartaporte20:Mercancias',
            'cartaporte20:FiguraTransporte'
        ]);

        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:cartaporte20': 'http://www.sat.gob.mx/CartaPorte20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/CartaPorte20 http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte20.xsd',
            'Version': '2.0'
        });
        expect(element).toElementHasChildSingle(Ubicaciones);
        expect(element).toElementHasChildSingle(Mercancias);
        expect(element).toElementHasChildSingle(FiguraTransporte);
    });
});
