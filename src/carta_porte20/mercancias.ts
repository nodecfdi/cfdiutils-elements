import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { Autotransporte } from './autotransporte';
import { Mercancia } from './mercancia';
import { TransporteAereo } from './transporte_aereo';
import { TransporteFerroviario } from './transporte_ferroviario';
import { TransporteMaritimo } from './transporte_maritimo';

export class Mercancias extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:Mercancias', attributes, children);
    }

    public getChildrenOrder(): string[] {
        return [
            'cartaporte20:Mercancia',
            'cartaporte20:Autotransporte',
            'cartaporte20:TransporteMaritimo',
            'cartaporte20:TransporteAereo',
            'cartaporte20:TransporteFerroviario',
        ];
    }

    public addMercancia(attributes: Record<string, unknown> = {}): Mercancia {
        const subject = new Mercancia(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiMercancia(elementAttributes: Record<string, unknown>[] = []): Mercancias {
        elementAttributes.forEach((attributes) => {
            this.addMercancia(attributes);
        });
        return this;
    }

    public getAutotransporte(): Autotransporte {
        return this.helperGetOrAdd(new Autotransporte());
    }

    public addAutotransporte(attributes: Record<string, unknown> = {}): Autotransporte {
        const subject = this.getAutotransporte();
        subject.addAttributes(attributes);
        return subject;
    }

    public getTransporteMaritimo(): TransporteMaritimo {
        return this.helperGetOrAdd(new TransporteMaritimo());
    }

    public addTransporteMaritimo(attributes: Record<string, unknown> = {}): TransporteMaritimo {
        const subject = this.getTransporteMaritimo();
        subject.addAttributes(attributes);
        return subject;
    }

    public getTransporteAereo(): TransporteAereo {
        return this.helperGetOrAdd(new TransporteAereo());
    }

    public addTransporteAereo(attributes: Record<string, unknown> = {}): TransporteAereo {
        const subject = this.getTransporteAereo();
        subject.addAttributes(attributes);
        return subject;
    }

    public getTransporteFerroviario(): TransporteFerroviario {
        return this.helperGetOrAdd(new TransporteFerroviario());
    }

    public addTransporteFerroviario(attributes: Record<string, unknown> = {}): TransporteFerroviario {
        const subject = this.getTransporteFerroviario();
        subject.addAttributes(attributes);
        return subject;
    }
}
