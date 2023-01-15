import { ImpRetenidos } from '~/retenciones10';

describe('Elements.Retenciones10.ImpRetenidos', () => {
    test('get element name', () => {
        const element = new ImpRetenidos();
        expect(element.name()).toBe('retenciones:ImpRetenidos');
        expect(element.getElementName()).toBe('retenciones:ImpRetenidos');
    });
});
