import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class Extranjero extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Extranjero', attributes, children);
    }

    public getElementName(): string {
        return 'retenciones:Extranjero';
    }
}