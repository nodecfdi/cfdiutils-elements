import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Traslado } from './traslado';

export class Traslados extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago10:Traslados', attributes, children);
    }

    public addTraslado(attributes: Record<string, unknown> = {}): Traslado {
        const traslado = new Traslado(attributes);
        this.addChild(traslado);

        return traslado;
    }

    public multiTraslado(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addTraslado(attributes);
        }

        return this;
    }
}
