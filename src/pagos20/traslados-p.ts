import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { TrasladoP } from './traslado-p';

export class TrasladosP extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:TrasladosP', attributes, children);
    }

    public addTrasladoP(attributes: Record<string, unknown> = {}): TrasladoP {
        const subject = new TrasladoP(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiTrasladoP(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addTrasladoP(attributes);
        }

        return this;
    }
}
