import { ImpuestosTrasladadosdelServicio } from '~/plataformas-tecnologicas10';

describe('Elements.PlataformasTecnologicas10.ImpuestosTrasladadosDelServicio', () => {
    test('impuestos trasladados del servicio', () => {
        const element = new ImpuestosTrasladadosdelServicio();
        expect(element.name()).toBe('plataformasTecnologicas:ImpuestosTrasladadosdelServicio');
        expect(element.getElementName()).toBe('plataformasTecnologicas:ImpuestosTrasladadosdelServicio');
    });
});
