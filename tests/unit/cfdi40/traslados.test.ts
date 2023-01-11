import { Traslado, Traslados } from '~/cfdi40';

describe('Elements.CFDI40.Traslados', () => {
    test('traslados', () => {
        const element = new Traslados();
        expect(element.getElementName()).toBe('cfdi:Traslados');
        expect(element).toElementHasChildMultiple(Traslado);
    });
});
