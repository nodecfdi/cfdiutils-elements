import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
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

    public multiRetencion(...elementAttributes: Record<string, unknown>[]): Retenciones {
        elementAttributes.forEach((attributes) => {
            this.addRetencion(attributes);
        });

        return this;
    }
}
