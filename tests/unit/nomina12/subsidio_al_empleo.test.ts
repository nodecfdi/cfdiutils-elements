import { SubsidioAlEmpleo } from '../../../src/nomina12';
describe('Elements.Nomina12.SubsidioAlEmpleo', () => {
    let element: SubsidioAlEmpleo;

    beforeEach(() => {
        element = new SubsidioAlEmpleo();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:SubsidioAlEmpleo');
        expect(element.getElementName()).toBe('nomina12:SubsidioAlEmpleo');
    });
});