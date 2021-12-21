import { AbstractElement } from '../../src';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace jest {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Matchers<R> {
            // eslint-disable-next-line @typescript-eslint/ban-types
            toElementHasChildSingle(expected: Function): CustomMatcherResult;

            // eslint-disable-next-line @typescript-eslint/ban-types
            toElementHasChildMultiple(expected: Function): CustomMatcherResult;
        }
    }
}

const matchers = {
    toElementHasChildSingle<T extends AbstractElement>(
        this: jest.MatcherContext,
        received: T,
        // eslint-disable-next-line @typescript-eslint/ban-types
        expected: Function
    ): jest.CustomMatcherResult {
        received.children().removeAll();
        const childClassBaseName = expected.name;
        const getter = `get${childClassBaseName}` as keyof T;
        const instance = (received[getter] as unknown as () => T)();

        // validate toBeInstanceOf
        expect(instance).toBeInstanceOf(expected);
        expect(instance).toBe((received[getter] as unknown as () => T)());

        const adder = `add${childClassBaseName}` as keyof T;
        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => T)({
            foo: 'bar',
        });
        expect(second).toBeInstanceOf(expected);
        expect(second.attributes().get('foo')).toBe('bar');
        return { message: (): string => '', pass: true };
    },
    toElementHasChildMultiple<T extends AbstractElement>(
        this: jest.MatcherContext,
        received: T,
        // eslint-disable-next-line @typescript-eslint/ban-types
        expected: Function
    ): jest.CustomMatcherResult {
        received.children().removeAll();
        const childClassBaseName = expected.name;
        const adder = `add${childClassBaseName}` as keyof T;

        const first = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'first',
        });
        expect(first).toBeInstanceOf(expected);
        expect(first.attributes().get('id')).toBe('first');

        expect(received.children().length).toBe(1);

        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'second',
        });
        expect(second).not.toBe(first);
        expect(second.attributes().get('id')).toBe('second');
        expect(received.children().length).toBe(2);

        const multi = `multi${childClassBaseName}` as keyof T;
        const sameAsElement = (
            received[multi] as unknown as (attributes: Record<string, unknown>[]) => AbstractElement
        )([{ id: 'third' }, { id: 'fourth' }]);

        expect(received).toBe(sameAsElement);
        expect(received.children().length).toBe(4);
        return { message: (): string => '', pass: true };
    },
};

expect.extend(matchers);
