import { ImpRetenidos } from '~/retenciones20';

describe('Elements.Retenciones20.ImpRetenidos', () => {
    test('imp Retenidos', () => {
        const element = new ImpRetenidos();
        expect(element.name()).toBe('retenciones:ImpRetenidos');
        expect(element.getElementName()).toBe('retenciones:ImpRetenidos');
    });
});
