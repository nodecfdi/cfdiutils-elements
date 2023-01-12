import { ComisionDelServicio } from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.ComisionDelServicio', () => {
    test('comision del servicio', () => {
        const element = new ComisionDelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:ComisionDelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ComisionDelServicio');
    });
});
