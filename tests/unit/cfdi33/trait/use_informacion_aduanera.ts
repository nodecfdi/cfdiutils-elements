import { CNode } from '@nodecfdi/cfdiutils-common';
import { use } from 'typescript-mix';
import { InformacionAduaneraTrait } from '../../../../src';

interface UseInformacionAduanera extends CNode, InformacionAduaneraTrait {}

class UseInformacionAduanera extends CNode {
    @use(InformacionAduaneraTrait) private this: unknown;
}

export { UseInformacionAduanera };
