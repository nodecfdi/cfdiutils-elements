import { Receptor, SubContratacion } from '~/nomina12';

describe('Elements.Nomina12.Receptor', () => {
    let element: Receptor;

    beforeEach(() => {
        element = new Receptor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Receptor');
        expect(element.getElementName()).toBe('nomina12:Receptor');
    });

    test('sub contratacion', () => {
        expect(element).toElementHasChildMultiple(SubContratacion);
    });
});
