import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { InformacionAduaneraTrait } from './traits/informacion-aduanera-trait';

class TParte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Parte', attributes, children);
    }
}

class Parte extends Mixin(TParte, InformacionAduaneraTrait) {}

export { Parte };
