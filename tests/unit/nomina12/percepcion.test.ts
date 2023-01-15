import { CNode } from '@nodecfdi/cfdiutils-common';

import { AccionesOTitulos, HorasExtra, Percepcion } from '~/nomina12';

describe('Elements.Nomina12.Percepcion', () => {
    let element: Percepcion;

    beforeEach(() => {
        element = new Percepcion();
    });

    test('get element name', () => {
        expect(element.name()).toBe('nomina12:Percepcion');
        expect(element.getElementName()).toBe('nomina12:Percepcion');
    });

    test('children order', () => {
        const expected = ['nomina12:AccionesOTitulos', 'nomina12:HorasExtra'];
        expect(element.getChildrenOrder()).toStrictEqual(expected);
        expect(element.children().getOrder()).toStrictEqual(expected);
    });

    test('acciones o titulos', () => {
        expect(element).toElementHasChildSingle(AccionesOTitulos);
    });

    test('horas extra', () => {
        expect(element).toElementHasChildMultiple(HorasExtra);
    });
});
