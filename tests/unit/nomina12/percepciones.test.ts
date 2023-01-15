import { CNode } from '@nodecfdi/cfdiutils-common';

import { JubilacionPensionRetiro, Percepcion, Percepciones, SeparacionIndemnizacion } from '~/nomina12';

describe('Elements.Nomina12.Percepciones', () => {
    let element: Percepciones;

    beforeEach(() => {
        element = new Percepciones();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Percepciones');
        expect(element.getElementName()).toBe('nomina12:Percepciones');
    });

    test('children order', () => {
        const expected = [
            'nomina12:Percepcion',
            'nomina12:JubilacionPensionRetiro',
            'nomina12:SeparacionIndemnizacion'
        ];
        expect(element.getChildrenOrder()).toStrictEqual(expected);
        expect(element.children().getOrder()).toStrictEqual(expected);
    });

    test('percepcion', () => {
        expect(element).toElementHasChildMultiple(Percepcion);
    });

    test('jubilacion pension retiro', () => {
        expect(element).toElementHasChildSingle(JubilacionPensionRetiro);
    });

    test('separacion indemnizacion', () => {
        expect(element).toElementHasChildSingle(SeparacionIndemnizacion);
    });
});
