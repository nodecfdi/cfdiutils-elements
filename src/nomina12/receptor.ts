import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { SubContratacion } from './sub-contratacion';

export class Receptor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Receptor', attributes, children);
    }

    public addSubContratacion(attributes: Record<string, unknown> = {}): SubContratacion {
        const subContratacion = new SubContratacion(attributes);
        this.addChild(subContratacion);

        return subContratacion;
    }

    public multiSubContratacion(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addSubContratacion(attributes);
        }

        return this;
    }
}
