import { Pago, Pagos, Totales } from '~/pagos20';

describe('Elements.Pago20.Pagos', () => {
    test('pagos', () => {
        const element = new Pagos();

        expect(element.getElementName()).toBe('pago20:Pagos');
        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:pago20': 'http://www.sat.gob.mx/Pagos20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/Pagos20 http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd',
            'Version': '2.0'
        });

        expect(element).toElementHasChildSingle(Totales);
        expect(element).toElementHasChildMultiple(Pago);
    });
});
