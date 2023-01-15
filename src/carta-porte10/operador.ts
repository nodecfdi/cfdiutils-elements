import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Domicilio } from './domicilio';

export class Operador extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Operador', attributes, children);
    }

    public getDomicilio(): Domicilio {
        return this.helperGetOrAdd(new Domicilio());
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = this.getDomicilio();
        subject.addAttributes(attributes);

        return subject;
    }
}
