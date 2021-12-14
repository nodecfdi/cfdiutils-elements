import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class SeparacionIndemnizacion extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:SeparacionIndemnizacion', attributes, children);
    }

    public getElementName(): string {
        return 'nomina12:SeparacionIndemnizacion';
    }
}
