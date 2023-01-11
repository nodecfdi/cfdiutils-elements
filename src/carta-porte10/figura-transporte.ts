import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Operadores } from './operadores';
import { Propietario } from './propietario';
import { Arrendatario } from './arrendatario';
import { Notificado } from './notificado';

export class FiguraTransporte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:FiguraTransporte', attributes, children);
    }

    public addOperadores(attributes: Record<string, unknown> = {}): Operadores {
        const subject = new Operadores(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiOperadores(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addOperadores(attributes);
        }

        return this;
    }

    public addPropietario(attributes: Record<string, unknown> = {}): Propietario {
        const subject = new Propietario(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiPropietario(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addPropietario(attributes);
        }

        return this;
    }

    public addArrendatario(attributes: Record<string, unknown> = {}): Arrendatario {
        const subject = new Arrendatario(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiArrendatario(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addArrendatario(attributes);
        }

        return this;
    }

    public addNotificado(attributes: Record<string, unknown> = {}): Notificado {
        const subject = new Notificado(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiNotificado(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addNotificado(attributes);
        }

        return this;
    }
}
