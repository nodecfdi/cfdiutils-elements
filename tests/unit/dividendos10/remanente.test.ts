import { Remanente } from '../../../src/dividendos10';

describe('Elements.Dividendos10.Remanente', () => {
    let element: Remanente;

    beforeEach(() => {
        element = new Remanente();
    });

    test('get element name', () => {
        expect(element.name()).toBe('dividendos:Remanente');
        expect(element.getElementName()).toBe('dividendos:Remanente');
    });
});
