import { AccionesOTitulos } from '~/nomina12';

describe('Elements.Nomina12.AccionesOTitulos', () => {
    let element: AccionesOTitulos;

    beforeEach(() => {
        element = new AccionesOTitulos();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:AccionesOTitulos');
        expect(element.getElementName()).toBe('nomina12:AccionesOTitulos');
    });
});
