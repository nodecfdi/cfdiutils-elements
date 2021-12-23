import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class IdentificacionVehicular extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:IdentificacionVehicular', attributes, children);
    }
    
    public getElementName(): string {
        return 'cartaporte20:IdentificacionVehicular';
    }
}