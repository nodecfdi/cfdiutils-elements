import { Receptor, SubContratacion } from '../../../src/nomina12';

describe('Elements.Nomina12.Receptor', () => {
    let element: Receptor;

    beforeEach(() => {
        element = new Receptor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Receptor');
        expect(element.getElementName()).toBe('nomina12:Receptor');
    });

    test('add sub contratacion', () => {
        // insert first element
        const first = element.addSubContratacion({ id: 'first' });
        expect(first).toBeInstanceOf(SubContratacion);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addSubContratacion({ id: 'second' });
        expect(second).not.toBe(first);
        expect(element.count()).toBe(2);
    });

    test('multiDeduccion', () => {
        const subContrataciones = element.multiSubContratacion([{ id: 'first' }, { id: 'second' }]);

        expect(subContrataciones.count()).toBe(2);
        expect(subContrataciones).toBe(element);
    });
});
