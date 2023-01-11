import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Domicilio } from './domicilio';

export class Destinatario extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Destinatario', attributes, children);
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = new Domicilio(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDomicilio(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addDomicilio(attributes);
        }

        return this;
    }
}
