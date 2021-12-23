import { Domicilio } from '../../../src/cce11';

describe('Elements.CCE11.Domicilio', () => {
    let element: Domicilio;

    beforeEach(() => {
        element = new Domicilio();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Domicilio');
        expect(element.getElementName()).toBe('cce11:Domicilio');
    });
});
