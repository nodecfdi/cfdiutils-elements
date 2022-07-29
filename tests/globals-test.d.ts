/* eslint-disable @typescript-eslint/ban-types */
export {};

declare global {
    namespace jest {
        interface Matchers<R> {
            toElementHasChildSingle(expected: Function, getter?: string | undefined, adder?: string | undefined): R;
            toElementHasChildMultiple(expected: Function): R;
            toElementHasChildSingleAddChild(expected: Function): R;
        }
    }
}
