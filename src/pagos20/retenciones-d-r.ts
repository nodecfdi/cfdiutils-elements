import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { RetencionDR } from './retencion-d-r';

export class RetencionesDR extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:RetencionesDR', attributes, children);
    }

    public addRetencionDR(attributes: Record<string, unknown> = {}): RetencionDR {
        const subject = new RetencionDR(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiRetencionDR(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addRetencionDR(attributes);
        }

        return this;
    }
}
