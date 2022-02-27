import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { TrasladoP } from './traslado_p';

export class TrasladosP extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:TrasladosP', attributes, children);
    }

    public addTrasladoP(attributes: Record<string, unknown> = {}): TrasladoP {
        const subject = new TrasladoP(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiTrasladoP(...elementAttributes: Record<string, unknown>[]): TrasladosP {
        elementAttributes.forEach((attributes) => {
            this.addTrasladoP(attributes);
        });
        return this;
    }
}
