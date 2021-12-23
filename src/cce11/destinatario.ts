import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Domicilio } from './domicilio';

export class Destinatario extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Destinatario', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:Destinatario';
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = new Domicilio(attributes);
        this.addChild(subject);
        return subject;
    }
}
