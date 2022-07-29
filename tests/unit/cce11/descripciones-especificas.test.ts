import { DescripcionesEspecificas } from '~/cce11';

describe('Elements.CCE11.DescripcionesEspecificas', () => {
    let element: DescripcionesEspecificas;

    beforeEach(() => {
        element = new DescripcionesEspecificas();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:DescripcionesEspecificas');
        expect(element.getElementName()).toBe('cce11:DescripcionesEspecificas');
    });
});
