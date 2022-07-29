import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
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

    public multiDescripcionesEspecificas(...elementAttributes: Record<string, unknown>[]): this {
        elementAttributes.forEach((attributes) => {
            this.addDescripcionesEspecificas(attributes);
        });

        return this;
    }
}
