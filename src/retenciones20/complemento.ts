import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';

export class Complemento extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Complemento', attributes, children);
    }

    public add(child: CNodeInterface): Complemento {
        this.children().add(child);

        return this;
    }
}
