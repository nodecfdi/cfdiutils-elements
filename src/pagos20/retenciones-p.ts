import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { RetencionP } from './retencion-p';

export class RetencionesP extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:RetencionesP', attributes, children);
    }

    public addRetencionP(attributes: Record<string, unknown> = {}): RetencionP {
        const subject = new RetencionP(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiRetencionP(...elementAttributes: Record<string, unknown>[]): RetencionesP {
        elementAttributes.forEach((attributes) => {
            this.addRetencionP(attributes);
        });

        return this;
    }
}
