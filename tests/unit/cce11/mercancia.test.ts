import { Mercancia, DescripcionesEspecificas } from '~/cce11';

describe('Elements.CCE11.Mercancia', () => {
    test('mercancia', () => {
        const element = new Mercancia();
        expect(element.name()).toBe('cce11:Mercancia');
        expect(element.getElementName()).toBe('cce11:Mercancia');

        expect(element).toElementHasChildMultiple(DescripcionesEspecificas);
    });
});
