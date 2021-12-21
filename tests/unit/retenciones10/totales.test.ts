import '../../matchers/to_element_has_child';
import { ImpRetenidos, Totales } from '../../../src/retenciones10';

describe('Elements.Retenciones10.Totales', () => {
    let element: Totales;

    beforeEach(() => {
        element = new Totales();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Totales');
        expect(element.getElementName()).toBe('retenciones:Totales');
    });

    test('add two imp retenidos', () => {
        expect(element.count()).toBe(0);

        const first = element.addImpRetenidos({name: 'first'});
        expect(first).toBeInstanceOf(ImpRetenidos);
        expect(first.attributes().get('name')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addImpRetenidos();
        expect(element.count()).toBe(2);

        expect(first).not.toBe(second);
    });

    test('add imp retenidos', () => {
        const first = element.addImpRetenidos({var: 'FOO'});
        expect(first).toBeInstanceOf(ImpRetenidos);
        expect(first.attributes().get('var')).toBe('FOO');
        expect(element.count()).toBe(1);
    });

    test('multi imp retenidos', () => {
        expect(element).toElementHasChildMultiple(ImpRetenidos);
    });
});
