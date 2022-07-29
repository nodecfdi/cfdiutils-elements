import { DividOUtil } from '~/dividendos10';

describe('Elements.Dividendos10.DividOUtil', () => {
    let element: DividOUtil;

    beforeEach(() => {
        element = new DividOUtil();
    });

    test('get element name', () => {
        expect(element.name()).toBe('dividendos:DividOUtil');
        expect(element.getElementName()).toBe('dividendos:DividOUtil');
    });
});
