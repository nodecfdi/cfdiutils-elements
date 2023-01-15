import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { TiposFigura } from './tipos-figura';

export class FiguraTransporte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:FiguraTransporte', attributes, children);
    }

    public addTiposFigura(attributes: Record<string, unknown> = {}): TiposFigura {
        const subject = new TiposFigura(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiTiposFigura(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addTiposFigura(attributes);
        }

        return this;
    }
}
