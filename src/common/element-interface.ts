import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';

export type ElementInterface = {
    getElementName(): string;

    getFixedAttributes(): Record<string, string>;

    getChildrenOrder(): string[];
} & CNodeInterface;
