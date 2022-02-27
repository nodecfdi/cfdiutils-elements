import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { ImpuestosDR } from './impuestos_d_r';

export class DoctoRelacionado extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:DoctoRelacionado', attributes, children);
    }

    public getImpuestosDR(): ImpuestosDR {
        return this.helperGetOrAdd(new ImpuestosDR());
    }

    public addImpuestosDR(attributes: Record<string, unknown> = {}): ImpuestosDR {
        const subject = this.getImpuestosDR();
        subject.addAttributes(attributes);
        return subject;
    }
}
