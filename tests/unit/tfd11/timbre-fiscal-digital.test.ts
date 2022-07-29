import { TimbreFiscalDigital } from '~/tfd11';

describe('Elements.Tfd11.TimbreFiscalDigital', () => {
    let element: TimbreFiscalDigital;

    beforeEach(() => {
        element = new TimbreFiscalDigital();
    });

    test('get element name', () => {
        expect(element.name()).toBe('tfd:TimbreFiscalDigital');
        expect(element.getElementName()).toBe('tfd:TimbreFiscalDigital');
    });

    test('has fixed attributes', () => {
        const namespace = 'http://www.sat.gob.mx/TimbreFiscalDigital';
        expect(element.attributes().get('Version')).toBe('1.1');
        expect(element.attributes().get('xmlns:tfd')).toBe(namespace);
        expect(element.attributes().get('xsi:schemaLocation')).toMatch(new RegExp(`^${namespace} http://?`));
    });
});
