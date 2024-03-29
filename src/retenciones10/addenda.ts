import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';

export class Addenda extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Addenda', attributes, children);
    }

    public add(child: CNodeInterface): this {
        this.children().add(child);

        return this;
    }
}
