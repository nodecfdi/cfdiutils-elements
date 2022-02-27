import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { RetencionP } from './retencion_p';

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
