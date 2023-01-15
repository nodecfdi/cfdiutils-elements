import {
    ComisionDelServicio,
    ContribucionGubernamental,
    DetallesDelServicio,
    ImpuestosTrasladadosdelServicio
} from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.DetallesDelServicio', () => {
    test('detalles del servicio', () => {
        const element = new DetallesDelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:DetallesDelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:DetallesDelServicio');
        expect(element).toElementHasChildSingle(ImpuestosTrasladadosdelServicio);
        expect(element).toElementHasChildSingle(ContribucionGubernamental);
        expect(element).toElementHasChildSingle(ComisionDelServicio);
    });
});
