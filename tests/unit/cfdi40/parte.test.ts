import { InformacionAduanera, Parte } from '~/cfdi40';

describe('Elements.CFDI40.Parte', () => {
    test('parte', () => {
        const element = new Parte();
        expect(element.getElementName()).toBe('cfdi:Parte');
        expect(element).toElementHasChildMultiple(InformacionAduanera);
    });
});
