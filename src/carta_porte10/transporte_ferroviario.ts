import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { DerechosDePaso } from './derechos_de_paso';
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

    public multiDerechosDePaso(elementAttributes: Record<string, unknown>[] = []): TransporteFerroviario {
        elementAttributes.forEach((attributes) => {
            this.addDerechosDePaso(attributes);
        });
        return this;
    }
    public addCarro(attributes: Record<string, unknown> = {}): Carro {
        const subject = new Carro(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiCarro(elementAttributes: Record<string, unknown>[] = []): TransporteFerroviario {
        elementAttributes.forEach((attributes) => {
            this.addCarro(attributes);
        });
        return this;
    }
}
