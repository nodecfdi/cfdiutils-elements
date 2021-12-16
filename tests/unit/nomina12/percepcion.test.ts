import { CNode } from '@nodecfdi/cfdiutils-common';
import { AccionesOTitulos, HorasExtra, Percepcion } from '../../../src/nomina12';
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
        const expected =  ['nomina12:AccionesOTitulos', 'nomina12:HorasExtra'];
        expect(element.getChildrenOrder()).toStrictEqual(expected);
    });

    test('get acciones o titulos', () => {
        expect(element.searchNodes('nomina12:AccionesOTitulos').length).toBe(0);

        const first = element.getAccionesOTitulos();
        expect(element.searchNodes('nomina12:AccionesOTitulos').length).toBe(1);

        const second = element.getAccionesOTitulos();
        expect(element.searchNodes('nomina12:AccionesOTitulos').length).toBe(1);

        expect(first).toBe(second);
    });

    test('add acciones o titulos', () => {
        const first = element.addAccionesOTitulos({ id: 'first' });
        expect(first).toBeInstanceOf(AccionesOTitulos);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        // insert secondElement
        const second = element.addAccionesOTitulos({ id: 'second' });
        expect(second).toBe(first);
        expect(second.attributes().get('id')).toBe('second');
    });

    test('add horas extra', () => {
        const children = [new CNode('child-1'), new CNode('child-2')];
        const first = element.addHorasExtras({ id: 'first' }, children);
        expect(first).toBeInstanceOf(HorasExtra);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);
        expect(first.children().exists(children[0])).toBeTruthy();
        expect(first.children().exists(children[1])).toBeTruthy();
    });

    test('multiPercepcion', () => {
        const horasExtra = element.multiHorasExtra([{ id: 'first' }, { id: 'second' }]);
        expect(horasExtra.count()).toBe(2);
        expect(element).toBe(horasExtra);
    });
});