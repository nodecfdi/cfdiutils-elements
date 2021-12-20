import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class DetalleMercancia extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:DetalleMercancia', attributes, children);
    }

    public getElementName(): string {
        return 'cartaporte20:DetalleMercancia';
    }
}
