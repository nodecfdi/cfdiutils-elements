import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Mercancia } from './mercancia';
import { AutotransporteFederal } from './autotransporte-federal';
import { TransporteMaritimo } from './transporte-maritimo';
import { TransporteAereo } from './transporte-aereo';
import { TransporteFerroviario } from './transporte-ferroviario';

export class Mercancias extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Mercancias', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return [
            'cartaporte:Mercancia',
            'cartaporte:AutotransporteFederal',
            'cartaporte:TransporteMaritimo',
            'cartaporte:TransporteAereo',
            'cartaporte:TransporteFerroviario'
        ];
    }

    public addMercancia(attributes: Record<string, unknown> = {}): Mercancia {
        const subject = new Mercancia(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiMercancia(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addMercancia(attributes);
        }

        return this;
    }

    public getAutotransporteFederal(): AutotransporteFederal {
        return this.helperGetOrAdd(new AutotransporteFederal());
    }

    public addAutotransporteFederal(attributes: Record<string, unknown> = {}): AutotransporteFederal {
        const subject = this.getAutotransporteFederal();
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
