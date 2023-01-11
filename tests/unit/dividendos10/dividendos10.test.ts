import { Dividendos, DividOUtil, Remanente } from '~/dividendos10';

describe('Elements.Dividendos10.Dividendos', () => {
    test('dividendos', () => {
        const element = new Dividendos();
        expect(element.name()).toBe('dividendos:Dividendos');
        expect(element.getElementName()).toBe('dividendos:Dividendos');
        expect(element.getChildrenOrder()).toStrictEqual(['dividendos:DividOUtil', 'dividendos:Remanente']);
        expect(element.children().getOrder()).toStrictEqual(['dividendos:DividOUtil', 'dividendos:Remanente']);
        expect(element).toElementHasChildSingle(DividOUtil);
        expect(element).toElementHasChildSingle(Remanente);
    });
});
