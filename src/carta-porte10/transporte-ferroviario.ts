import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DerechosDePaso } from './derechos-de-paso';
import { Carro } from './carro';

export class TransporteFerroviario extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:TransporteFerroviario', attributes, children);
    }

    public addDerechosDePaso(attributes: Record<string, unknown> = {}): DerechosDePaso {
        const subject = new DerechosDePaso(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDerechosDePaso(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addDerechosDePaso(attributes);
        }

        return this;
    }

    public addCarro(attributes: Record<string, unknown> = {}): Carro {
        const subject = new Carro(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiCarro(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addCarro(attributes);
        }

        return this;
    }
}
