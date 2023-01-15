import { Remanente } from '~/dividendos10';

describe('Elements.Dividendos10.Remanente', () => {
    test('remanente', () => {
        const element = new Remanente();
        expect(element.name()).toBe('dividendos:Remanente');
        expect(element.getElementName()).toBe('dividendos:Remanente');
    });
});
