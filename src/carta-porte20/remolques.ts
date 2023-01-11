import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Remolque } from './remolque';

export class Remolques extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:Remolques', attributes, children);
    }

    public addRemolque(attributes: Record<string, unknown> = {}): Remolque {
        const subject = new Remolque(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiRemolque(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addRemolque(attributes);
        }

        return this;
    }
}
