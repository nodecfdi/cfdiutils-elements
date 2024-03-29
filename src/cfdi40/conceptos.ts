import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Concepto } from './concepto';

export class Conceptos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Conceptos', attributes, children);
    }

    public addConcepto(attributes: Record<string, unknown> = {}): Concepto {
        const subject = new Concepto(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiConcepto(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addConcepto(attributes);
        }

        return this;
    }
}
