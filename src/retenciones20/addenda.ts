import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';

export class Addenda extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Addenda', attributes, children);
    }

    public add(child: CNodeInterface): Addenda {
        this.children().add(child);
        return this;
    }
}
