import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { RetencionDR } from './retencion_d_r';

export class RetencionesDR extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:RetencionesDR', attributes, children);
    }

    public addRetencionDR(attributes: Record<string, unknown> = {}): RetencionDR {
        const subject = new RetencionDR(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiRetencionDR(...elementAttributes: Record<string, unknown>[]): RetencionesDR {
        elementAttributes.forEach((attributes) => {
            this.addRetencionDR(attributes);
        });
        return this;
    }
}
