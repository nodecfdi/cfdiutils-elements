import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mercancia } from './mercancia';

export class Mercancias extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:Mercancias', attributes, children);
    }

    public getElementName(): string {
        return 'cce11:Mercancias';
    }

    public addMercancia(attributes: Record<string, unknown> = {}): Mercancia {
        const subject = new Mercancia(attributes);
        this.addChild(subject);
        return subject;
    }
}
