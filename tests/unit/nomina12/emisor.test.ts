import { Emisor, EntidadSNCF } from '~/nomina12';

describe('Elements.Nomina12.Emisor', () => {
    test('emisor', () => {
        const element = new Emisor();
        expect(element.name()).toBe('nomina12:Emisor');
        expect(element.getElementName()).toBe('nomina12:Emisor');
        expect(element).toElementHasChildSingle(EntidadSNCF);
    });
});
