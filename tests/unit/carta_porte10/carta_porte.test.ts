import '../../matchers/to_element_has_child';
import { CartaPorte, FiguraTransporte, Mercancias, Ubicaciones } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.CartaPorte', () => {

    test('carta porte', () => {
        const element = new CartaPorte();
        expect(element.name()).toBe('cartaporte:CartaPorte');
        expect(element.getElementName()).toBe('cartaporte:CartaPorte');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte:Ubicaciones',
            'cartaporte:Mercancias',
            'cartaporte:FiguraTransporte',
        ]);

        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:cartaporte': 'http://www.sat.gob.mx/cartaporte',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/cartaporte http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte.xsd',
            Version: '1.0',
        });
        expect(element).toElementHasChildSingle(Ubicaciones);
        expect(element).toElementHasChildSingle(Mercancias);
        expect(element).toElementHasChildSingle(FiguraTransporte);
    });
});
