import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { EntidadSNCF } from './entidad_sncf';

export class Emisor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Emisor', attributes, children);
    }

    public getEntidadSNCF(): EntidadSNCF {
        return this.helperGetOrAdd(new EntidadSNCF());
    }

    public addEntidadSNCF(attributes: Record<string, unknown> = {}): EntidadSNCF {
        const entidadSncf = this.getEntidadSNCF();
        entidadSncf.addAttributes(attributes);
        return entidadSncf;
    }
}
