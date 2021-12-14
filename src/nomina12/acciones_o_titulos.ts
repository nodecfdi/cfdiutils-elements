import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class AccionesOTitulos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:AccionesOTitulos', attributes, children);

    }
    public getElementName(): string {
        return 'nomina12:AccionesOTitulos';
    }
}
