import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';

export class DescripcionesEspecificas extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:DescripcionesEspecificas', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:DescripcionesEspecificas';
    }
}
