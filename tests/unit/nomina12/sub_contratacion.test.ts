import { SubContratacion } from '../../../src/nomina12';

describe('Elements.Nomina12.SubContratacion', () => {
    let element: SubContratacion;

    beforeEach(() => {
        element = new SubContratacion();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:SubContratacion');
        expect(element.getElementName()).toBe('nomina12:SubContratacion');
    });
});
