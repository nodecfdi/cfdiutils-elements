import { ContribucionGubernamental } from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.ContribucionGubernamental', () => {
    test('contribucion gubernamental', () => {
        const element = new ContribucionGubernamental();
        expect(element.name()).toBe('plataformasTecnologicas:ContribucionGubernamental');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ContribucionGubernamental');
    });
});
