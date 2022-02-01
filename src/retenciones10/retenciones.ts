import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Emisor } from './emisor';
import { AbstractElement } from '../common/abstract_element';
import { Receptor } from './receptor';
import { Periodo } from './periodo';
import { Totales } from './totales';
import { ImpRetenidos } from './imp_retenidos';
import { Complemento } from './complemento';
import { Addenda } from './addenda';

export class Retenciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Retenciones', attributes, children);
    }

    public getEmisor(): Emisor {
        return this.helperGetOrAdd(new Emisor());
    }

    public addEmisor(attributes: Record<string, unknown> = {}): Emisor {
        const subject = this.getEmisor();
        subject.addAttributes(attributes);
        return subject;
    }

    public getReceptor(): Receptor {
        return this.helperGetOrAdd(new Receptor());
    }

    public addReceptor(attributes: Record<string, unknown> = {}): Receptor {
        const subject = this.getReceptor();
        subject.addAttributes(attributes);
        return subject;
    }

    public getPeriodo(): Periodo {
        return this.helperGetOrAdd(new Periodo());
    }

    public addPeriodo(attributes: Record<string, unknown> = {}): Periodo {
        const subject = this.getPeriodo();
        subject.addAttributes(attributes);
        return subject;
    }

    public getTotales(): Totales {
        return this.helperGetOrAdd(new Totales());
    }

    public addTotales(attributes: Record<string, unknown> = {}): Totales {
        const subject = this.getTotales();
        subject.addAttributes(attributes);
        return subject;
    }

    public addImpRetenidos(attributes: Record<string, unknown> = {}): ImpRetenidos {
        return this.getTotales().addImpRetenidos(attributes);
    }

    public multiImpRetenidos(elementAttributes: Record<string, unknown>[] = []): Retenciones {
        this.getTotales().multiImpRetenidos(...elementAttributes);
        return this;
    }

    public getComplemento(): Complemento {
        return this.helperGetOrAdd(new Complemento());
    }

    public addComplemento(children: CNodeInterface): Retenciones {
        this.getComplemento().add(children);
        return this;
    }

    public getAddenda(): Addenda {
        return this.helperGetOrAdd(new Addenda());
    }

    public addAddenda(children: CNodeInterface): Retenciones {
        this.getAddenda().add(children);
        return this;
    }

    public getChildrenOrder(): string[] {
        return [
            'retenciones:Emisor',
            'retenciones:Receptor',
            'retenciones:Periodo',
            'retenciones:Totales',
            'retenciones:Complemento',
            'retenciones:Addenda',
        ];
    }

    public getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:retenciones': 'http://www.sat.gob.mx/esquemas/retencionpago/1',
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/1 http://www.sat.gob.mx/esquemas/retencionpago/1/retencionpagov1.xsd',
            Version: '1.0',
        };
    }
}
