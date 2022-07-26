import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Contenedor } from './contenedor';

export class Carro extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:Carro', attributes, children);
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
