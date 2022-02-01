import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
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

    public multiConcepto(...elementAttributes: Record<string, unknown>[]): Conceptos {
        elementAttributes.forEach((attributes) => {
            this.addConcepto(attributes);
        });
        return this;
    }
}
