import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Operador } from './operador';

export class Operadores extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Operadores', attributes, children);
    }

    public addOperador(attributes: Record<string, unknown> = {}): Operador {
        const subject = new Operador(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiOperador(...elementAttributes: Record<string, unknown>[]): Operadores {
        elementAttributes.forEach((attributes) => {
            this.addOperador(attributes);
        });

        return this;
    }
}
