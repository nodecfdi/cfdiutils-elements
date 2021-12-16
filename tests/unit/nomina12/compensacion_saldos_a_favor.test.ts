import { CompensacionSaldosAFavor } from '../../../src/nomina12';

describe('Elements.Nomina12.CompensacionSaldosAFavor', () => {
    let element: CompensacionSaldosAFavor;

    beforeEach(() => {
        element = new CompensacionSaldosAFavor();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:CompensacionSaldosAFavor');
        expect(element.getElementName()).toBe('nomina12:CompensacionSaldosAFavor');
    });
});
