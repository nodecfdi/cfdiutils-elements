import { Servicios, ServiciosPlataformasTecnologicas } from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.ServiciosPlataformasTecnologicas', () => {
    test('servicios plataformas tecnologicas', () => {
        const element = new ServiciosPlataformasTecnologicas();

        expect(element.name()).toBe('plataformasTecnologicas:ServiciosPlataformasTecnologicas');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ServiciosPlataformasTecnologicas');
        expect(element.getFixedAttributes()).toStrictEqual({
            'xmlns:plataformasTecnologicas': 'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10 http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10/ServiciosPlataformasTecnologicas10.xsd',
            'Version': '1.0'
        });
        expect(element).toElementHasChildSingle(Servicios);
    });
});
