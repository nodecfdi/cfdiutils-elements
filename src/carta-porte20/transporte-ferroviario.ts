import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Carro } from './carro';
import { DerechosDePaso } from './derechos-de-paso';

export class TransporteFerroviario extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:TransporteFerroviario', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['cartaporte20:DerechosDePaso', 'cartaporte20:Carro'];
    }

    public addDerechosDePaso(attributes: Record<string, unknown> = {}): DerechosDePaso {
        const subject = new DerechosDePaso(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDerechosDePaso(...elementAttributes: Record<string, unknown>[]): TransporteFerroviario {
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

    public multiCarro(...elementAttributes: Record<string, unknown>[]): TransporteFerroviario {
        elementAttributes.forEach((attributes) => {
            this.addCarro(attributes);
        });

        return this;
    }
}
