import { CNode } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { InformacionAduaneraTrait } from '~/cfdi33/traits/informacion-aduanera-trait';

class UseInformacionAduanera extends Mixin(CNode, InformacionAduaneraTrait) {}

export { UseInformacionAduanera };
