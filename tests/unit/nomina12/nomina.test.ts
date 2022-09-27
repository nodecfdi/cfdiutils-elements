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

    test('get emisor', () => {
        expect(element.searchNodes('nomina12:Emisor').length).toBe(0);

        const first = element.getEmisor();
        expect(element.searchNodes('nomina12:Emisor').length).toBe(1);

        const second = element.getEmisor();
        expect(element.searchNodes('nomina12:Emisor').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add emisor', () => {
        const first = element.addEmisor({ id: 'first' });
        expect(first).toBeInstanceOf(Emisor);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addEmisor({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get receptor', () => {
        expect(element.searchNodes('nomina12:Receptor').length).toBe(0);

        const first = element.getReceptor();
        expect(element.searchNodes('nomina12:Receptor').length).toBe(1);

        const second = element.getReceptor();
        expect(element.searchNodes('nomina12:Receptor').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add receptor', () => {
        const first = element.addReceptor({ id: 'first' });
        expect(first).toBeInstanceOf(Receptor);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addReceptor({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get percepciones', () => {
        expect(element.searchNodes('nomina12:Percepciones').length).toBe(0);

        const first = element.getPercepciones();
        expect(element.searchNodes('nomina12:Percepciones').length).toBe(1);

        const second = element.getPercepciones();
        expect(element.searchNodes('nomina12:Percepciones').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add percepciones', () => {
        const first = element.addPercepciones({ id: 'first' });
        expect(first).toBeInstanceOf(Percepciones);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addPercepciones({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get deducciones', () => {
        expect(element.searchNodes('nomina12:Deducciones').length).toBe(0);

        const first = element.getDeducciones();
        expect(element.searchNodes('nomina12:Deducciones').length).toBe(1);

        const second = element.getDeducciones();
        expect(element.searchNodes('nomina12:Deducciones').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add deducciones', () => {
        const first = element.addDeducciones({ id: 'first' });
        expect(first).toBeInstanceOf(Deducciones);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addDeducciones({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get otros pagos', () => {
        expect(element.searchNodes('nomina12:OtrosPagos').length).toBe(0);

        const first = element.getOtrosPagos();
        expect(element.searchNodes('nomina12:OtrosPagos').length).toBe(1);

        const second = element.getOtrosPagos();
        expect(element.searchNodes('nomina12:OtrosPagos').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add otros pagos', () => {
        const first = element.addOtrosPagos({ id: 'first' });
        expect(first).toBeInstanceOf(OtrosPagos);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addOtrosPagos({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get incapacidades', () => {
        expect(element.searchNodes('nomina12:Incapacidades').length).toBe(0);

        const first = element.getIncapacidades();
        expect(element.searchNodes('nomina12:Incapacidades').length).toBe(1);

        const second = element.getIncapacidades();
        expect(element.searchNodes('nomina12:Incapacidades').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add icapacidades', () => {
        const first = element.addIncapacidades({ id: 'first' });
        expect(first).toBeInstanceOf(Incapacidades);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addIncapacidades({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });
});
