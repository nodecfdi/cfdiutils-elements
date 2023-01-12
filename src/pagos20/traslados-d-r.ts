import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { TrasladoDR } from './traslado-d-r';

export class TrasladosDR extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:TrasladosDR', attributes, children);
    }

    public addTrasladoDR(attributes: Record<string, unknown> = {}): TrasladoDR {
        const subject = new TrasladoDR(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiTrasladoDR(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addTrasladoDR(attributes);
        }

        return this;
    }
}
