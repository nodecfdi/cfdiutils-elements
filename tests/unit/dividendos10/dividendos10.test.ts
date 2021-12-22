import '../../matchers/to_element_has_child';
import { Dividendos, DividOUtil, Remanente } from '../../../src/dividendos10';

describe('Elements.Dividendos10.Remamente', () => {
    let element: Dividendos;

    beforeEach(() => {
        element = new Dividendos();
    });

    test('get element name', () => {
        expect(element.name()).toBe('dividendos:Dividendos');
        expect(element.getElementName()).toBe('dividendos:Dividendos');
    });

    test('divid o util', () => {
        expect(element).toElementHasChildSingle(DividOUtil);
    });

    test('remanente', () => {
        expect(element).toElementHasChildSingle(Remanente);
    });

    test('has fixed attributes', () => {
        const namespace = 'http://www.sat.gob.mx/esquemas/retencionpago/1/dividendos';
        expect(element.attributes().get('Version')).toBe('1.0');
        expect(element.attributes().get('xmlns:dividendos')).toBe(namespace);
        expect(element.attributes().get('xsi:schemaLocation')).toMatch(new RegExp(`^${namespace} http://?`))
    });

    test('children order', () => {
        element.getRemanente();
        element.getDividOUtil();

        expect(element.children().get(0)).toBeInstanceOf(DividOUtil);
        expect(element.children().get(1)).toBeInstanceOf(Remanente);
    });
});
