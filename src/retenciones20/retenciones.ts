import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { CfdiRetenRelacionados } from './cfdi-reten-relacionados';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Periodo } from './periodo';
import { Complemento } from './complemento';
import { Addenda } from './addenda';
import { type ImpRetenidos } from './imp-retenidos';
import { Totales } from './totales';

export class Retenciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Retenciones', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return [
            'retenciones:CfdiRetenRelacionados',
            'retenciones:Emisor',
            'retenciones:Receptor',
            'retenciones:Periodo',
            'retenciones:Totales',
            'retenciones:Complemento',
            'retenciones:Addenda'
        ];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:retenciones': 'http://www.sat.gob.mx/esquemas/retencionpago/2',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/2 http://www.sat.gob.mx/esquemas/retencionpago/2/retencionpagov2.xsd',
            'Version': '2.0'
        };
    }

    public getCfdiRetenRelacionados(): CfdiRetenRelacionados {
        return this.helperGetOrAdd(new CfdiRetenRelacionados());
    }

    public addCfdiRetenRelacionados(attributes: Record<string, unknown> = {}): CfdiRetenRelacionados {
        const subject = this.getCfdiRetenRelacionados();
        subject.addAttributes(attributes);

        return subject;
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

    public multiImpRetenidos(...elementAttributes: Array<Record<string, unknown>>): this {
        this.getTotales().multiImpRetenidos(...elementAttributes);

        return this;
    }

    public getComplemento(): Complemento {
        return this.helperGetOrAdd(new Complemento());
    }

    public addComplemento(children: CNodeInterface): this {
        this.getComplemento().add(children);

        return this;
    }

    public getAddenda(): Addenda {
        return this.helperGetOrAdd(new Addenda());
    }

    public addAddenda(children: CNodeInterface): this {
        this.getAddenda().add(children);

        return this;
    }
}
