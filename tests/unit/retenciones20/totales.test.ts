import { ImpRetenidos, Totales } from '~/retenciones20';

describe('Elements.Retenciones20.Totales', () => {
    test('get element name', () => {
        const element = new Totales();
        expect(element.name()).toBe('retenciones:Totales');
        expect(element.getElementName()).toBe('retenciones:Totales');
    });

    test('shorcut to ImpRetenidos', () => {
        const element = new Totales();
        expect(element).toElementHasChildSingle(ImpRetenidos);
        expect(element).toElementHasChildMultiple(ImpRetenidos);
    });
});
