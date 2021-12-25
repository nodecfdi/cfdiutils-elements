import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
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

    public multiUbicacion(elementAttributes: Record<string, unknown>[] = []): Ubicaciones {
        elementAttributes.forEach((attributes) => {
            this.addUbicacion(attributes);
        });
        return this;
    }
}
