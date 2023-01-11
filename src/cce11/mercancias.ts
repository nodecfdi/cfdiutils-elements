import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Mercancia } from './mercancia';

export class Mercancias extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Mercancias', attributes, children);
    }

    public addMercancia(attributes: Record<string, unknown> = {}): Mercancia {
        const subject = new Mercancia(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiMercancia(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addMercancia(attributes);
        }

        return this;
    }
}
