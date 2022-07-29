import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Domicilio } from './domicilio';
import { Destino } from './destino';
import { Origen } from './origen';

export class Ubicacion extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Ubicacion', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['cartaporte:Origen', 'cartaporte:Destino', 'cartaporte:Domicilio'];
    }

    public getDomicilio(): Domicilio {
        return this.helperGetOrAdd(new Domicilio());
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = this.getDomicilio();
        subject.addAttributes(attributes);

        return subject;
    }

    public getDestino(): Destino {
        return this.helperGetOrAdd(new Destino());
    }

    public addDestino(attributes: Record<string, unknown> = {}): Destino {
        const subject = this.getDestino();
        subject.addAttributes(attributes);

        return subject;
    }

    public getOrigen(): Origen {
        return this.helperGetOrAdd(new Origen());
    }

    public addOrigen(attributes: Record<string, unknown> = {}): Origen {
        const subject = this.getOrigen();
        subject.addAttributes(attributes);

        return subject;
    }
}
