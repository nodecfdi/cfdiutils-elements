import { Incapacidad, Incapacidades } from '../../../src/nomina12';
describe('Elements.Nomina12.Incapacidades', () => {
    let element: Incapacidades;

    beforeEach(() => {
        element = new Incapacidades();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Incapacidades');
        expect(element.getElementName()).toBe('nomina12:Incapacidades');
    });

    test('add incapacidades', () => {
        // insert first element
        const first = element.addIncapacidad({'id': 'first'});
        expect(first).toBeInstanceOf(Incapacidad);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addIncapacidad({'id': 'second'});
        expect(second).not.toBe(first);
        expect(element.count()).toBe(2);
    });

    test('multiIncapacidad', () => {
        const incapacidades = element.multiIncapacidad([
            {'id' : 'first'},
            {'id': 'second'}
        ]);

        expect(incapacidades.count()).toBe(2);
        expect(incapacidades).toBe(element);
    });
});