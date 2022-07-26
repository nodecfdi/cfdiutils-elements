import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DetallesDelServicio } from './detalles-del-servicio';

export class Servicios extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('plataformasTecnologicas:Servicios', attributes, children);
    }

    public addDetallesDelServicio(attributes: Record<string, unknown> = {}): DetallesDelServicio {
        const subject = new DetallesDelServicio(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDetallesDelServicio(...elementAttributes: Record<string, unknown>[]): Servicios {
        elementAttributes.forEach((attributes) => {
            this.addDetallesDelServicio(attributes);
        });

        return this;
    }
}
