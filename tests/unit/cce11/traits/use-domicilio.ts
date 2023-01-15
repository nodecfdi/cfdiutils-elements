import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '~/common/abstract-element';
import { DomicilioTrait } from '~/cce11/traits/domicilio-trait';

class TemporaryClass extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('X', attributes, children);
    }

    public override getElementName(): string {
        return 'X';
    }
}

class UseDomicilio extends Mixin(TemporaryClass, DomicilioTrait) {}

export { UseDomicilio };
