import '../../matchers/to_element_has_child';
import { Beneficiario, NoBeneficiario, Pagosaextranjeros } from '../../../src/pagosaextranjeros10';

describe('Elements.Pagosaextranjeros10.Pagosaextranjeros', () => {
    let element: Pagosaextranjeros;

    beforeEach(() => {
        element = new Pagosaextranjeros();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pagosaextranjeros:Pagosaextranjeros');
        expect(element.getElementName()).toBe('pagosaextranjeros:Pagosaextranjeros');
    });

    test('no beneficiario', () => {
        expect(element).toElementHasChildSingle(NoBeneficiario);
    });

    test('beneficiario', () => {
        expect(element).toElementHasChildSingle(Beneficiario);
    });

    test('has fixed attributes', () => {
        const namespace = 'http://www.sat.gob.mx/esquemas/retencionpago/1/pagosaextranjeros';
        expect(element.attributes().get('Version')).toBe('1.0');
        expect(element.attributes().get('xmlns:pagosaextranjeros')).toBe(namespace);
        expect(element.attributes().get('xsi:schemaLocation')).toMatch(new RegExp(`^${namespace} http://?`))
    });

    test('children order', () => {
        element.getBeneficiario();
        element.getNoBeneficiario();

        expect(element.children().get(0)).toBeInstanceOf(NoBeneficiario);
        expect(element.children().get(1)).toBeInstanceOf(Beneficiario);
    });
});
