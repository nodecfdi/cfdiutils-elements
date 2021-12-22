import { Beneficiario } from '../../../src/pagosaextranjeros10';

describe('Elements.Pagosaextranjeros10.Beneficiario', () => {
    let element: Beneficiario;

    beforeEach(() => {
        element = new Beneficiario();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pagosaextranjeros:Beneficiario');
        expect(element.getElementName()).toBe('pagosaextranjeros:Beneficiario');
    });
});
