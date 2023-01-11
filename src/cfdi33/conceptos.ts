import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Concepto } from './concepto';

export class Conceptos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Conceptos', attributes, children);
    }

    public addConcepto(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): Concepto {
        const concepto = new Concepto(attributes, children);
        this.addChild(concepto);

        return concepto;
    }
}
