import '../../matchers/to_element_has_child';
import { Destino, Domicilio, Origen, Ubicacion } from '../../../src/carta_porte10';

describe('Elements.CartaPorte10.Ubicacion', () => {

    test('ubicacion', () => {
        const element = new Ubicacion();
        expect(element.name()).toBe('cartaporte:Ubicacion');
        expect(element.getElementName()).toBe('cartaporte:Ubicacion');

        expect(element.getChildrenOrder()).toStrictEqual([
            'cartaporte:Origen',
            'cartaporte:Destino',
            'cartaporte:Domicilio',
        ]);

        expect(element).toElementHasChildSingle(Origen);
        expect(element).toElementHasChildSingle(Destino);
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
