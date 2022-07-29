import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '../common/abstract-element';
import { DomicilioTrait } from './traits/domicilio-trait';

class TReceptor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Receptor', attributes, children);
    }
}

class Receptor extends Mixin(TReceptor, DomicilioTrait) {}

export { Receptor };
