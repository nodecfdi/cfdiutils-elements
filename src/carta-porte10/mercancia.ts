import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { CantidadTransporta } from './cantidad-transporta';
import { DetalleMercancia } from './detalle-mercancia';

export class Mercancia extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Mercancia', attributes, children);
    }

    public addCantidadTransporta(attributes: Record<string, unknown> = {}): CantidadTransporta {
        const subject = new CantidadTransporta(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiCantidadTransporta(...elementAttributes: Record<string, unknown>[]): Mercancia {
        elementAttributes.forEach((attributes) => {
            this.addCantidadTransporta(attributes);
        });

        return this;
    }

    public getDetalleMercancia(): DetalleMercancia {
        return this.helperGetOrAdd(new DetalleMercancia());
    }

    public addDetalleMercancia(attributes: Record<string, unknown> = {}): DetalleMercancia {
        const subject = this.getDetalleMercancia();
        subject.addAttributes(attributes);

        return subject;
    }
}
