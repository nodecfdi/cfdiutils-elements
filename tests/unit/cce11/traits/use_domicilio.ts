import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { use } from 'typescript-mix';
import { AbstractElement } from '../../../../src';
import { DomicilioTrait } from '../../../../src/cce11/traits/domicilio_trait';

export class UseDomicilio extends AbstractElement {
    @use(DomicilioTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('X', attributes, children);
    }

    public getElementName(): string {
        return 'X';
    }
}
