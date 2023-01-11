import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Retencion } from './retencion';

export class Retenciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Retenciones', attributes, children);
    }

    public addRetencion(attributes: Record<string, unknown> = {}): Retencion {
        const subject = new Retencion(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiRetencion(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addRetencion(attributes);
        }

        return this;
    }
}
