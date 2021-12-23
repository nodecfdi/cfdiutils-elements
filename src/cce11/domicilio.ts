import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';

export class Domicilio extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Domicilio', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:Domicilio';
    }
}
