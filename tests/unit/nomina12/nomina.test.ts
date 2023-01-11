import { Deducciones, Emisor, Incapacidades, Nomina, OtrosPagos, Percepciones, Receptor } from '~/nomina12';

describe('Elements.Nomina12.Nomina', () => {
    let element: Nomina;

    beforeEach(() => {
        element = new Nomina();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Nomina');
        expect(element.getElementName()).toBe('nomina12:Nomina');
    });

    test('children order', () => {
        const expected = [
            'nomina12:Emisor',
            'nomina12:Receptor',
            'nomina12:Percepciones',
            'nomina12:Deducciones',
            'nomina12:OtrosPagos',
            'nomina12:Incapacidades'
        ];
        expect(element.getChildrenOrder()).toStrictEqual(expected);
        expect(element.children().getOrder()).toStrictEqual(expected);
    });

    test('fixed version', () => {
        expect(element.attributes().get('Version')).toBe('1.2');
    });

    test('fixed namespace definition', () => {
        const namaspace = 'http://www.sat.gob.mx/nomina12';
        expect(element.attributes().get('xmlns:nomina12')).toBe(namaspace);

        const xsdLocation = 'http://www.sat.gob.mx/sitio_internet/cfd/nomina/nomina12.xsd';
        expect(element.attributes().get('xsi:schemaLocation')).toBe(`${namaspace} ${xsdLocation}`);
    });

    test('emisor', () => {
        expect(element).toElementHasChildSingle(Emisor);
    });

    test('receptor', () => {
        expect(element).toElementHasChildSingle(Receptor);
    });

    test('percepciones', () => {
        expect(element).toElementHasChildSingle(Percepciones);
    });

    test('deducciones', () => {
        expect(element).toElementHasChildSingle(Deducciones);
    });

    test('otros pagos', () => {
        expect(element).toElementHasChildSingle(OtrosPagos);
    });

    test('incapacidades', () => {
        expect(element).toElementHasChildSingle(Incapacidades);
    });
});
