import { Incapacidad, Incapacidades } from '~/nomina12';

describe('Elements.Nomina12.Incapacidades', () => {
    test('incapacidades', () => {
        const element = new Incapacidades();
        expect(element.name()).toBe('nomina12:Incapacidades');
        expect(element.getElementName()).toBe('nomina12:Incapacidades');
        expect(element).toElementHasChildMultiple(Incapacidad);
    });
});
