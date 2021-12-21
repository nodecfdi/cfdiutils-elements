import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class Nacional extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Nacional', attributes, children);
    }

    public getElementName(): string {
        return 'retenciones:Nacional';
    }
}
