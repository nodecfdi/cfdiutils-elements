import { JubilacionPensionRetiro } from '~/nomina12';

describe('Elements.Nomina12.JubilacionPensionRetiro', () => {
    let element: JubilacionPensionRetiro;

    beforeEach(() => {
        element = new JubilacionPensionRetiro();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:JubilacionPensionRetiro');
        expect(element.getElementName()).toBe('nomina12:JubilacionPensionRetiro');
    });
});
