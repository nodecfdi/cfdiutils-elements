/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jest/no-standalone-expect */
import { CNode } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '~/common/abstract-element';

const matchers = {
    toElementHasChildSingle<T extends AbstractElement>(
        this: jest.MatcherContext,
        received: T,
        expected: Function,
        getterParam: undefined | string = undefined,
        adderParam: undefined | string = undefined
    ): jest.CustomMatcherResult {
        received.children().removeAll();
        const childClassBaseName = expected.name;
        const getter = (getterParam as keyof T) ?? (`get${childClassBaseName}` as keyof T);
        const instance = (received[getter] as unknown as () => T)();

        // validate toBeInstanceOf
        expect(instance).toBeInstanceOf(expected);
        expect(instance).toBe((received[getter] as unknown as () => T)());

        const adder = (adderParam as keyof T) ?? (`add${childClassBaseName}` as keyof T);
        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => T)({
            foo: 'bar'
        });
        expect(second).toBeInstanceOf(expected);
        expect(second.attributes().get('foo')).toBe('bar');

        return { message: (): string => '', pass: true };
    },
    toElementHasChildSingleAddChild<T extends AbstractElement>(
        this: jest.MatcherContext,
        received: T,
        expected: Function
    ): jest.CustomMatcherResult {
        received.children().removeAll();
        const childClassBaseName = expected.name;

        const getter = `get${childClassBaseName}` as keyof T;
        const instance = (received[getter] as unknown as () => T)();

        expect(instance).toBeInstanceOf(expected);
        expect(instance).toBe((received[getter] as unknown as () => T)());

        // add should append a child into the existent node
        const adder = `add${childClassBaseName}` as keyof T;

        const firstChild = new CNode('child1');

        const returnOnAdder = (received[adder] as unknown as (attributes: CNode) => AbstractElement)(firstChild);
        expect(received).toBe(returnOnAdder);
        expect([firstChild]).toStrictEqual([instance.children().get(0)]);

        const secondChild = new CNode('child2');
        (received[adder] as unknown as (attributes: CNode) => AbstractElement)(secondChild);
        expect([firstChild, secondChild]).toStrictEqual([instance.children().get(0), instance.children().get(1)]);

        return { message: (): string => '', pass: true };
    },
    toElementHasChildMultiple<T extends AbstractElement>(
        this: jest.MatcherContext,
        received: T,
        expected: Function
    ): jest.CustomMatcherResult {
        received.children().removeAll();
        const childClassBaseName = expected.name;
        const adder = `add${childClassBaseName}` as keyof T;

        const first = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'first'
        });
        expect(first).toBeInstanceOf(expected);
        expect(first.attributes().get('id')).toBe('first');

        expect(received.children().length).toBe(1);

        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'second'
        });
        expect(second).not.toBe(first);
        expect(second.attributes().get('id')).toBe('second');
        expect(received.children().length).toBe(2);

        const multi = `multi${childClassBaseName}` as keyof T;
        const sameAsElement = (
            received[multi] as unknown as (...attributes: Record<string, unknown>[]) => AbstractElement
        )({ id: 'third' }, { id: 'fourth' });

        expect(received).toBe(sameAsElement);
        expect(received.children().length).toBe(4);

        return { message: (): string => '', pass: true };
    }
};

expect.extend(matchers);
