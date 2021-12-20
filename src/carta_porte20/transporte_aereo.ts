import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class TransporteAereo extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:TransporteAereo', attributes, children);
    }

    public getElementName(): string {
        return 'cartaporte20:TransporteAereo';
    }
}
