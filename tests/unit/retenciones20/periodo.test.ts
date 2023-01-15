import { Periodo } from '~/retenciones20';

describe('Elements.Retenciones20.Periodo', () => {
    test('periodo', () => {
        const element = new Periodo();
        expect(element.name()).toBe('retenciones:Periodo');
        expect(element.getElementName()).toBe('retenciones:Periodo');
    });
});
