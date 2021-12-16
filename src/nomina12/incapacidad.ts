import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class Incapacidad extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Incapacidad', attributes, children);
    }

    public getElementName(): string {
        return 'nomina12:Incapacidad';
    }
}
