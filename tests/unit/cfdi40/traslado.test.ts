import { Traslado } from '~/cfdi40';

describe('Elements.CFDI40.Traslado', () => {
    test('traslado', () => {
        const element = new Traslado();
        expect(element.getElementName()).toBe('cfdi:Traslado');
    });
});
