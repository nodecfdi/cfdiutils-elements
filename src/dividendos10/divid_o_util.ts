import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class DividOUtil extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('dividendos:DividOUtil', attributes, children);
    }

    public getElementName(): string {
        return 'dividendos:DividOUtil';
    }
}
