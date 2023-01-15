import { DetallesDelServicio, Servicios } from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.Servicios', () => {
    test('servicios', () => {
        const element = new Servicios();
        expect(element.name()).toBe('plataformasTecnologicas:Servicios');
        expect(element.getElementName()).toBe('plataformasTecnologicas:Servicios');
        expect(element).toElementHasChildMultiple(DetallesDelServicio);
    });
});
