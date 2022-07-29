import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '../common/abstract-element';
import { DomicilioTrait } from './traits/domicilio-trait';

class Emisor extends Mixin(
    class extends AbstractElement {
        constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
            super('cce11:Emisor', attributes, children);
        }
    },
    DomicilioTrait
) {}

export { Emisor };
