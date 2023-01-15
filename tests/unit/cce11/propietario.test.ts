import { Propietario } from '~/cce11';

describe('Elements.CCE11.Propietario', () => {
    test('propietario', () => {
        const element = new Propietario();
        expect(element.name()).toBe('cce11:Propietario');
        expect(element.getElementName()).toBe('cce11:Propietario');
    });
});
