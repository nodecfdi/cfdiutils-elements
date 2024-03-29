import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DescripcionesEspecificas } from './descripciones-especificas';

export class Mercancia extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Mercancia', attributes, children);
    }

    public addDescripcionesEspecificas(attributes: Record<string, unknown> = {}): DescripcionesEspecificas {
        const subject = new DescripcionesEspecificas(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDescripcionesEspecificas(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addDescripcionesEspecificas(attributes);
        }

        return this;
    }
}
