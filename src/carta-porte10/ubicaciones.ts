import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Ubicacion } from './ubicacion';

export class Ubicaciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Ubicaciones', attributes, children);
    }

    public addUbicacion(attributes: Record<string, unknown> = {}): Ubicacion {
        const subject = new Ubicacion(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiUbicacion(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addUbicacion(attributes);
        }

        return this;
    }
}
