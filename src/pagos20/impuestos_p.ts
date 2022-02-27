import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { RetencionesP } from './retenciones_p';
import { TrasladosP } from './traslados_p';

export class ImpuestosP extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:ImpuestosP', attributes, children);
    }

    public getChildrenOrder(): string[] {
        return ['pago20:RetencionesP', 'pago20:TrasladosP'];
    }

    public getRetencionesP(): RetencionesP {
        return this.helperGetOrAdd(new RetencionesP());
    }

    public addRetencionesP(attributes: Record<string, unknown> = {}): RetencionesP {
        const subject = this.getRetencionesP();
        subject.addAttributes(attributes);
        return subject;
    }

    public getTrasladosP(): TrasladosP {
        return this.helperGetOrAdd(new TrasladosP());
    }

    public addTrasladosP(attributes: Record<string, unknown> = {}): TrasladosP {
        const subject = this.getTrasladosP();
        subject.addAttributes(attributes);
        return subject;
    }
}
