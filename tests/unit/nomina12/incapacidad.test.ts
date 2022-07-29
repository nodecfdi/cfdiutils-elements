import { Incapacidad } from '~/nomina12';

describe('Elements.Nomina12.Incapacidad', () => {
    let element: Incapacidad;

    beforeEach(() => {
        element = new Incapacidad();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Incapacidad');
        expect(element.getElementName()).toBe('nomina12:Incapacidad');
    });
});
