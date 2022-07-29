import { Deduccion, Deducciones } from '~/nomina12';

describe('Elements.Nomina12.Deducciones', () => {
    let element: Deducciones;

    beforeEach(() => {
        element = new Deducciones();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Deducciones');
        expect(element.getElementName()).toBe('nomina12:Deducciones');
    });

    test('add deduccion', () => {
        // insert first element
        const first = element.addDeduccion({ id: 'first' });
        expect(first).toBeInstanceOf(Deduccion);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addDeduccion({ id: 'second' });
        expect(second).not.toBe(first);
        expect(element.count()).toBe(2);
    });

    test('multiDeduccion', () => {
        const deducciones = element.multiDeduccion([{ id: 'first' }, { id: 'second' }]);

        expect(deducciones.count()).toBe(2);
        expect(deducciones).toBe(element);
    });
});
