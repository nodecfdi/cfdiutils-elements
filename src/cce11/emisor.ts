import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '../common/abstract-element';
import { DomicilioTrait } from './traits/domicilio-trait';

class TEmisor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Emisor', attributes, children);
    }
}

class Emisor extends Mixin(TEmisor, DomicilioTrait) {}

export { Emisor };
