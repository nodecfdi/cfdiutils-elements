import { EntidadSNCF } from '../../../src/nomina12';

describe('Elements.Nomina12.EntidadSNCF', () => {
    let element: EntidadSNCF;

    beforeEach(() => {
        element = new EntidadSNCF();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:EntidadSNCF');
        expect(element.getElementName()).toBe('nomina12:EntidadSNCF');
    });
});
