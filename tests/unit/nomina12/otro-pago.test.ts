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
        expect(element.children().getOrder()).toStrictEqual(expected);
    });

    test('subsidio al empleo', () => {
        expect(element).toElementHasChildSingle(SubsidioAlEmpleo);
    });

    test('compensacion saldos a favor', () => {
        expect(element).toElementHasChildSingle(CompensacionSaldosAFavor);
    });
});
