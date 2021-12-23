import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { DescripcionesEspecificas } from './descripciones_especificas';

export class Mercancia extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Mercancia', attributes, children);
    }

    public addDescripcionesEspecificas(attributes: Record<string, unknown> = {}): DescripcionesEspecificas {
        const subject = new DescripcionesEspecificas(attributes);
        this.addChild(subject);
        return subject;
    }
}
