/* eslint-disable @typescript-eslint/no-namespace */
import { CNode } from '@nodecfdi/cfdiutils-common';
import { type AbstractElement } from '~/common/abstract-element';

expect.extend({
    toElementHasChildSingle<T extends AbstractElement>(
        received: T,
        expected: CallableFunction,
        getterParameter?: string,
        adderParameter?: string
    ) {
        received.children().removeAll();
        const childClassBaseName = expected.name;
        const getter = (getterParameter as keyof T) ?? (`get${childClassBaseName}` as keyof T);
        const instance = (received[getter] as unknown as () => T)();

        // Validate toBeInstanceOf
        expect(instance).toBeInstanceOf(expected);
        expect(instance).toBe((received[getter] as unknown as () => T)());

        const adder = (adderParameter as keyof T) ?? (`add${childClassBaseName}` as keyof T);
        const empty = (received[adder] as unknown as (attributes?: Record<string, unknown>) => T)();

        expect(empty.attributes().size).toBe(0);

        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => T)({
            foo: 'bar'
        });
        expect(second).toBeInstanceOf(expected);
        expect(second.attributes().get('foo')).toBe('bar');
        expect(second.attributes().size).toBe(1);

        return {
            message: () => '',
            pass: true
        };
    },

    toElementHasChildSingleAddChild<T extends AbstractElement>(received: T, expected: CallableFunction) {
        received.children().removeAll();
        // Complemento
        const childClassBaseName = expected.name;

        // Example: getter = getComplemento
        const getter = `get${childClassBaseName}` as keyof T;

        // Example:comprobante.getComplemento()
        // complemento
        const instance = (received[getter] as unknown as () => T)();

        // Example: complemento instance of Complemento
        expect(instance).toBeInstanceOf(expected);

        // Example: complemento === comprobante.getComplemento()
        expect(instance).toBe((received[getter] as unknown as () => T)());

        // Add should append a child into the existent node
        // addComplemento
        const adder = `add${childClassBaseName}` as keyof T;

        const firstChild = new CNode('child1');

        // Example: comprobante.addComplemento(firstChild)
        // comprobante with new children added
        const returnOnAdder = (received[adder] as unknown as (attributes: CNode) => AbstractElement)(firstChild);

        // Example: received === comprobante
        expect(received).toBe(returnOnAdder);
        // Assert first child is element added
        expect([firstChild]).toStrictEqual([instance.children().get(0)]);

        // Create a new children
        const secondChild = new CNode('child2');

        // Again add to comprobante
        (received[adder] as unknown as (attributes: CNode) => AbstractElement)(secondChild);

        // Assert first child is element in first position, and second child is element os second position of comprobante
        expect([firstChild, secondChild]).toStrictEqual([instance.children().get(0), instance.children().get(1)]);

        return { message: (): string => '', pass: true };
    },

    toElementHasChildMultiple<T extends AbstractElement>(received: T, expected: CallableFunction) {
        received.children().removeAll();

        // Example received: Comprobante, expected: CfdiRelacionados
        const childClassBaseName = expected.name;

        // Example: addCfdiRelacionados
        const adder = `add${childClassBaseName}` as keyof T;

        // Variable empty = comprobante.addCfdiRelacionados();
        const empty = (received[adder] as unknown as (attributes?: Record<string, unknown>) => AbstractElement)();

        // Instance empty instance of CfdiRelacionados
        expect(empty).toBeInstanceOf(expected);
        // Instance empty has 0 attributes
        expect(empty.attributes().size).toBe(0);

        // Variable first = comprobante.addCfdiRelacionados({ id: 'first' }) - Instance with one attribute
        const first = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'first'
        });
        expect(first).toBeInstanceOf(expected);
        expect(first.attributes().get('id')).toBe('first');

        // Assert comprobante has two children of same type.
        expect(received.children().length).toBe(2);

        // Variable second = comprobante.addCfdiRelacionados({ id: 'second' }) - Instance with one attribute
        const second = (received[adder] as unknown as (attributes: Record<string, unknown>) => AbstractElement)({
            id: 'second'
        });

        // Assert second not equal to first
        expect(second).not.toBe(first);
        expect(second.attributes().get('id')).toBe('second');

        // First element empty, Second element with attribute id=first, Third element with attribute id=second
        expect(received.children().length).toBe(3);

        // Example: multiCfdiRelacionados
        const multi = `multi${childClassBaseName}` as keyof T;

        // Variable sameAsElement = comprobante.multiCfdiRelacionados({ id: 'third' }, { id: 'fourth' });
        // add multiple child on single method.
        const sameAsElement = (
            received[multi] as unknown as (...attributes: Array<Record<string, unknown>>) => AbstractElement
        )({ id: 'third' }, { id: 'fourth' });

        // Variable sameAsElement contains five childrens.
        // First: element empty
        // Second: element with attribute id=first
        // Third: element with attribute id=second
        // Fourth: element with attribute id=third
        // Fifth: element with attribute id=fourth
        expect(received).toBe(sameAsElement);
        expect(received.children().length).toBe(5);

        return { message: (): string => '', pass: true };
    }
});

export type TestingLibraryMatchers<E, R> = {
    /**
     * Assert element returns last added child.
     *
     * - Validate element instance of expected class.
     * - Validate when getter method is called again return same already created instance.
     * - Validate size of attributes on empty instance is 0.
     * - Validate size of attributes increments when new instance has attributes.
     *
     * @param expected - Child class expected
     * @param getterParameter - Function name for getter
     * @param adderParameter - Function name for adder
     */
    toElementHasChildSingle<T extends AbstractElement>(
        expected: new () => T,
        getterParameter?: string,
        adderParameter?: string
    ): R;

    /**
     * Assert element add two children to given element.
     *
     * - Validate element instance of expected class.
     * - Validate when getter method is called again return same already created instance.
     * - Validate element adder return initial instance with new children.
     * - Validate element adder add to stack second child.
     *
     * @param expected - Child class expected
     */
    toElementHasChildSingleAddChild<T extends AbstractElement>(expected: new () => T): R;

    /**
     * Assert element returns all added children.
     *
     * - Validate first child is instance of expected class.
     * - Validate first child attributes equals to 0.
     * - Validate second child with one attribute again instance of expected class.
     * - Validate second child has expected attribute.
     * - Validate element instance contains two children.
     * - Validate first child is not equal to second child.
     * - Validate element instance method multiChildClassName add children to same expected received instance with new children added
     *
     * @param expected - Child class expected
     */
    toElementHasChildMultiple<T extends AbstractElement>(expected: new () => T): R;
} & Record<string, any>;

declare global {
    namespace Vi {
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
    }
}
