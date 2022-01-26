import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Contenedor } from './contenedor';

export class Carro extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Carro', attributes, children);
    }

    public addContenedor(attributes: Record<string, unknown> = {}): Contenedor {
        const subject = new Contenedor(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiContenedor(...elementAttributes: Record<string, unknown>[]): Carro {
        elementAttributes.forEach((attributes) => {
            this.addContenedor(attributes);
        });
        return this;
    }
}
