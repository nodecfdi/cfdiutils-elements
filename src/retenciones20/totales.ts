import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { ImpRetenidos } from './imp-retenidos';

export class Totales extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Totales', attributes, children);
    }

    public getImpRetenidos(): ImpRetenidos {
        return this.helperGetOrAdd(new ImpRetenidos());
    }

    public addImpRetenidos(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): ImpRetenidos {
        const subject = new ImpRetenidos(attributes, children);
        this.addChild(subject);

        return subject;
    }

    public multiImpRetenidos(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addImpRetenidos(attributes);
        }

        return this;
    }
}
