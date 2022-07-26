import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Traslado } from './traslado';

export class Traslados extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Traslados', attributes, children);
    }

    public addTraslado(attributes: Record<string, unknown> = {}): Traslado {
        const subject = new Traslado(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiTraslado(...elementAttributes: Record<string, unknown>[]): Traslados {
        elementAttributes.forEach((attributes) => {
            this.addTraslado(attributes);
        });

        return this;
    }
}
