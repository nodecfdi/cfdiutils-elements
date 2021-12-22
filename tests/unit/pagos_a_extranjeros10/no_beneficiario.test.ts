import { NoBeneficiario } from '../../../src/pagosaextranjeros10';

describe('Elements.Pagosaextranjeros10.NoBeneficiario', () => {
    let element: NoBeneficiario;

    beforeEach(() => {
        element = new NoBeneficiario();
    });

    test('get element name', () => {
        expect(element.name()).toBe('pagosaextranjeros:NoBeneficiario');
        expect(element.getElementName()).toBe('pagosaextranjeros:NoBeneficiario');
    });
});
