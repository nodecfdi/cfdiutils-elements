import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Contenedor } from './contenedor';

export class TransporteMaritimo extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:TransporteMaritimo', attributes, children);
    }

    public addContenedor(attributes: Record<string, unknown> = {}): Contenedor {
        const subject = new Contenedor(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiContenedor(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addContenedor(attributes);
        }

        return this;
    }
}
