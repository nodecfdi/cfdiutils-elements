import { CNode } from '@nodecfdi/cfdiutils-common';
import { Addenda } from '../../../src/retenciones10';

describe('Elements.Retenciones10.Addenda', () => {
    let element: Addenda;

    beforeEach(() => {
        element = new Addenda();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Addenda');
        expect(element.getElementName()).toBe('retenciones:Addenda');
    });

    test('add', () => {
        expect(element.count()).toBe(0);

        const firstChild = new CNode('first');
        const addReturn = element.add(firstChild);
        expect(element).toBe(addReturn);
        expect(element.count()).toBe(1);
        expect(element.searchNode('first')).toBe(firstChild);

        const secondChild = new CNode('second');
        element.add(secondChild);
        expect(element.count()).toBe(2);
        expect(element.searchNode('second')).toBe(secondChild);
    });
});
