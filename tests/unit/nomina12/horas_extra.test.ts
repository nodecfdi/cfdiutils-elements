import { HorasExtra } from '../../../src/nomina12';

describe('Elements.Nomina12.HorasExtra', () => {
    let element: HorasExtra;

    beforeEach(() => {
        element = new HorasExtra();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:HorasExtra');
        expect(element.getElementName()).toBe('nomina12:HorasExtra');
    });
});
