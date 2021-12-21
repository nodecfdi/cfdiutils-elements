import { CNode } from '@nodecfdi/cfdiutils-common';
import { Complemento } from '../../../src/retenciones10';

describe('Elements.Retenciones10.Complemento', () => {
    let element: Complemento;

    beforeEach(() => {
        element = new Complemento();
    });

    test('get element name', () => {
        expect(element.name()).toBe('retenciones:Complemento');
        expect(element.getElementName()).toBe('retenciones:Complemento');
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
