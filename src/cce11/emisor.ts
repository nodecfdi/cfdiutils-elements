import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '../common/abstract-element';
import { DomicilioTrait } from './traits/domicilio-trait';

class Emisor extends Mixin(AbstractElement, DomicilioTrait) {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Emisor', attributes, children);
    }
}

export { Emisor };
