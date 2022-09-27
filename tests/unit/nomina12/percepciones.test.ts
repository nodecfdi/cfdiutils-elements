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

    test('add percepcion', () => {
        const children = [new CNode('child-1'), new CNode('child-2')];
        const first = element.addPercepcion({ id: 'first' }, children);
        expect(first).toBeInstanceOf(Percepcion);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);
        expect(first.children().exists(children[0])).toBeTruthy();
        expect(first.children().exists(children[1])).toBeTruthy();
    });

    test('multiPercepcion', () => {
        const percepciones = element.multiPercepcion([{ id: 'first' }, { id: 'second' }]);
        expect(percepciones.count()).toBe(2);
        expect(element).toBe(percepciones);
    });

    test('get jubilacion pension retiro', () => {
        expect(element.searchNodes('nomina12:JubilacionPensionRetiro').length).toBe(0);

        const first = element.getJubilacionPensionRetiro();
        expect(element.searchNodes('nomina12:JubilacionPensionRetiro').length).toBe(1);

        const second = element.getJubilacionPensionRetiro();
        expect(element.searchNodes('nomina12:JubilacionPensionRetiro').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add jubilacion pension retiro', () => {
        const first = element.addJubilacionPensionRetiro({ id: 'first' });
        expect(first).toBeInstanceOf(JubilacionPensionRetiro);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addJubilacionPensionRetiro({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('get separacion indemnizacion', () => {
        expect(element.searchNodes('nomina12:SeparacionIndemnizacion').length).toBe(0);

        const first = element.getSeparacionIndemnizacion();
        expect(element.searchNodes('nomina12:SeparacionIndemnizacion').length).toBe(1);

        const second = element.getSeparacionIndemnizacion();
        expect(element.searchNodes('nomina12:SeparacionIndemnizacion').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add separacion indemnizacion', () => {
        const first = element.addSeparacionIndemnizacion({ id: 'first' });
        expect(first).toBeInstanceOf(SeparacionIndemnizacion);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addSeparacionIndemnizacion({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });
});
