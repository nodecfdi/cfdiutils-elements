import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class Complemento extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Complemento', attributes, children);
    }

    public getElementName(): string {
        return 'retenciones:Complemento';
    }

    public add(child: CNodeInterface): Complemento {
        this.children().add(child);
        return this;
    }
}
