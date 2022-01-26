import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { TiposFigura } from './tipos_figura';

export class FiguraTransporte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:FiguraTransporte', attributes, children);
    }

    public addTiposFigura(attributes: Record<string, unknown> = {}): TiposFigura {
        const subject = new TiposFigura(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiTiposFigura(...elementAttributes: Record<string, unknown>[]): FiguraTransporte {
        elementAttributes.forEach((attributes) => {
            this.addTiposFigura(attributes);
        });
        return this;
    }
}
