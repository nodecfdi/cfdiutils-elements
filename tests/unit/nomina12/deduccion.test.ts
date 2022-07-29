import { Deduccion } from '~/nomina12';

describe('Elements.Nomina12.Deduccion', () => {
    let element: Deduccion;

    beforeEach(() => {
        element = new Deduccion();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Deduccion');
        expect(element.getElementName()).toBe('nomina12:Deduccion');
    });
});
