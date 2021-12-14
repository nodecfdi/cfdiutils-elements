import { SeparacionIndemnizacion } from '../../../src/nomina12';
describe('Elements.Nomina12.SeparacionIndemnizacion', () => {
    let element: SeparacionIndemnizacion;

    beforeEach(() => {
        element = new SeparacionIndemnizacion();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:SeparacionIndemnizacion');
        expect(element.getElementName()).toBe('nomina12:SeparacionIndemnizacion');
    });
});