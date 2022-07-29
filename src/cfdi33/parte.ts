import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { InformacionAduaneraTrait } from './traits/informacion-aduanera-trait';

class Parte extends Mixin(
    class extends AbstractElement {
        constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
            super('cfdi:Parte', attributes, children);
        }
    },
    InformacionAduaneraTrait
) {}

export { Parte };
