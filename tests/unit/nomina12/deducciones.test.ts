import { Deduccion, Deducciones } from '~/nomina12';

describe('Elements.Nomina12.Deducciones', () => {
    test('deducciones', () => {
        const element = new Deducciones();
        expect(element.name()).toBe('nomina12:Deducciones');
        expect(element.getElementName()).toBe('nomina12:Deducciones');
        expect(element).toElementHasChildMultiple(Deduccion);
    });
});
