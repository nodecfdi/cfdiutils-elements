import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { RetencionesDR } from './retenciones-d-r';
import { TrasladosDR } from './traslados-d-r';

export class ImpuestosDR extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:ImpuestosDR', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['pago20:RetencionesDR', 'pago20:TrasladosDR'];
    }

    public getRetencionesDR(): RetencionesDR {
        return this.helperGetOrAdd(new RetencionesDR());
    }

    public addRetencionesDR(attributes: Record<string, unknown> = {}): RetencionesDR {
        const subject = this.getRetencionesDR();
        subject.addAttributes(attributes);

        return subject;
    }

    public getTrasladosDR(): TrasladosDR {
        return this.helperGetOrAdd(new TrasladosDR());
    }

    public addTrasladosDR(attributes: Record<string, unknown> = {}): TrasladosDR {
        const subject = this.getTrasladosDR();
        subject.addAttributes(attributes);

        return subject;
    }
}
