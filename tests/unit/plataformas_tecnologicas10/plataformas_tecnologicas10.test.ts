import '../../matchers/to_element_has_child';
import { ComisionDelServicio, ContribucionGubernamental, DetallesDelServicio, ImpuestosTrasladadosdelServicio, Servicios, ServiciosPlataformasTecnologicas } from '../../../src/plataformas_tecnologicas10';

describe('Elements.PlataformasTecnologicas10', () => {
    test('Plataformas Tecnologicas 10', () => {
        const element = new ServiciosPlataformasTecnologicas();

        expect(element.name()).toBe('plataformasTecnologicas:ServiciosPlataformasTecnologicas');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ServiciosPlataformasTecnologicas');
        expect(element.getFixedAttributes()).toStrictEqual(
            {
                'xmlns:plataformasTecnologicas': 'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10',
                'xsi:schemaLocation': 'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10 http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10/ServiciosPlataformasTecnologicas10.xsd',
                'Version': '1.0',
            }
        );
        expect(element).toElementHasChildSingle(Servicios);
    });

    test('servicios', () => {
        const element = new Servicios();
        expect(element.name()).toBe('plataformasTecnologicas:Servicios');
        expect(element.getElementName()).toBe('plataformasTecnologicas:Servicios');
        expect(element).toElementHasChildMultiple(DetallesDelServicio);
    });

    test('detalles del servicio', () => {
        const element = new DetallesDelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:DetallesDelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:DetallesDelServicio');
        expect(element).toElementHasChildSingle(ImpuestosTrasladadosdelServicio);
        expect(element).toElementHasChildSingle(ContribucionGubernamental);
        expect(element).toElementHasChildSingle(ComisionDelServicio);
    });

    test('impuestos trasladados', () => {
        const element = new ImpuestosTrasladadosdelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:ImpuestosTrasladadosdelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ImpuestosTrasladadosdelServicio');
    });

    test('contribucion gubernamental', () => {
        const element = new ContribucionGubernamental();
        expect(element.name()).toBe('plataformasTecnologicas:ContribucionGubernamental');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ContribucionGubernamental');
    });

    test('comision del servicio', () => {
        const element = new ComisionDelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:ComisionDelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ComisionDelServicio');
    });
});
