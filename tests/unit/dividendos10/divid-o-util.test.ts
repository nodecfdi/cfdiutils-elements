import { DividOUtil } from '~/dividendos10';

describe('Elements.Dividendos10.DividOUtil', () => {
    test('divid o util', () => {
        const element = new DividOUtil();
        expect(element.name()).toBe('dividendos:DividOUtil');
        expect(element.getElementName()).toBe('dividendos:DividOUtil');
    });
});
