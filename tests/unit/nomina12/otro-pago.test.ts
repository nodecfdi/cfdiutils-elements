import { CompensacionSaldosAFavor, OtroPago, SubsidioAlEmpleo } from '~/nomina12';

describe('Elements.Nomina12.OtroPago', () => {
    let element: OtroPago;

    beforeEach(() => {
        element = new OtroPago();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:OtroPago');
        expect(element.getElementName()).toBe('nomina12:OtroPago');
    });

    test('children order', () => {
        const expected = ['nomina12:SubsidioAlEmpleo', 'nomina12:CompensacionSaldosAFavor'];
        expect(element.getChildrenOrder()).toStrictEqual(expected);
    });

    test('get subsidio al empleo', () => {
        expect(element.searchNodes('nomina12:SubsidioAlEmpleo').length).toBe(0);

        const first = element.getSubsidioAlEmpleo();
        expect(element.searchNodes('nomina12:SubsidioAlEmpleo').length).toBe(1);

        const second = element.getSubsidioAlEmpleo();
        expect(element.searchNodes('nomina12:SubsidioAlEmpleo').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add subsidio al empleo', () => {
        const first = element.addSubsidioAlEmpleo({ id: 'first' });
        expect(first).toBeInstanceOf(SubsidioAlEmpleo);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addSubsidioAlEmpleo({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get compensacion saldos a favor', () => {
        expect(element.searchNodes('nomina12:CompensacionSaldosAFavor').length).toBe(0);

        const first = element.getCompensacionSaldosAFavor();
        expect(element.searchNodes('nomina12:CompensacionSaldosAFavor').length).toBe(1);

        const second = element.getCompensacionSaldosAFavor();
        expect(element.searchNodes('nomina12:CompensacionSaldosAFavor').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add compensacion saldos a favor', () => {
        const first = element.addCompensacionSaldosAFavor({ id: 'first' });
        expect(first).toBeInstanceOf(CompensacionSaldosAFavor);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addCompensacionSaldosAFavor({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });
});
