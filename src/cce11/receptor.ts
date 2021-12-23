import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { DomicilioTrait } from './traits/domicilio_trait';
import { use } from 'typescript-mix';

export class Receptor extends AbstractElement {
    @use(DomicilioTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Receptor', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:Receptor';
    }
}
