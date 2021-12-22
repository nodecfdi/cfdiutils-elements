import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class NoBeneficiario extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pagosaextranjeros:NoBeneficiario', attributes, children);
    }

    public getElementName(): string {
        return 'pagosaextranjeros:NoBeneficiario';
    }
}
