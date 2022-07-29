import { Domicilio, Receptor } from '~/cce11';

describe('Elements.CCE11.Receptor', () => {
    let element: Receptor;

    beforeEach(() => {
        element = new Receptor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Receptor');
        expect(element.getElementName()).toBe('cce11:Receptor');
    });

    test('domicilio', () => {
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
