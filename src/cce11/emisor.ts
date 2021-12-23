import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { use } from 'typescript-mix';
import { DomicilioTrait } from './traits/domicilio_trait';

export class Emisor extends AbstractElement {
    @use(DomicilioTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Emisor', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:Emisor';
    }
}
