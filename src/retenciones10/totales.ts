import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { ImpRetenidos } from './imp_retenidos';

export class Totales extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Totales', attributes, children);
    }

    public addImpRetenidos(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): ImpRetenidos {
        const subject = new ImpRetenidos(attributes, children);
        this.addChild(subject);
        return subject;
    }

    public multiImpRetenidos(...elementAttributes: Record<string, unknown>[]): Totales {
        elementAttributes.forEach((attributes) => {
            this.addImpRetenidos(attributes);
        });
        return this;
    }
}
