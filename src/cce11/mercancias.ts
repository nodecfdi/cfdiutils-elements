import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
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

    public multiMercancia(...elementAttributes: Record<string, unknown>[]): this {
        elementAttributes.forEach((attributes) => {
            this.addMercancia(attributes);
        });

        return this;
    }
}
