import { Retencion, Retenciones } from '~/cfdi40';

describe('Elements.CFDI40.Retenciones', () => {
    test('retenciones', () => {
        const element = new Retenciones();
        expect(element.getElementName()).toBe('cfdi:Retenciones');
        expect(element).toElementHasChildMultiple(Retencion);
    });
});
