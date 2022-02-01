import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { InformacionGlobal } from './informacion_global';
import { CfdiRelacionados } from './cfdi_relacionados';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Conceptos } from './conceptos';
import { Impuestos } from './impuestos';
import { Complemento } from './complemento';
import { Addenda } from './addenda';
import { use } from 'typescript-mix';
import { ImpuestosTrait } from './traits/impuestos_trait';
import { Concepto } from './concepto';

export class Comprobante extends AbstractElement {
    @use(ImpuestosTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Comprobante', attributes, children);
    }

    protected getElementImpuestos(): Impuestos {
        return this.getImpuestos();
    }

    public getChildrenOrder(): string[] {
        return [
            'cfdi:InformacionGlobal',
            'cfdi:CfdiRelacionados',
            'cfdi:Emisor',
            'cfdi:Receptor',
            'cfdi:Conceptos',
            'cfdi:Impuestos',
            'cfdi:Complemento',
            'cfdi:Addenda',
        ];
    }

    public getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
            Version: '4.0',
        };
    }
    public getInformacionGlobal(): InformacionGlobal {
        return this.helperGetOrAdd(new InformacionGlobal());
    }

    public addInformacionGlobal(attributes: Record<string, unknown> = {}): InformacionGlobal {
        const subject = this.getInformacionGlobal();
        subject.addAttributes(attributes);
        return subject;
    }
    public addCfdiRelacionados(attributes: Record<string, unknown> = {}): CfdiRelacionados {
        const subject = new CfdiRelacionados(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiCfdiRelacionados(...elementAttributes: Record<string, unknown>[]): Comprobante {
        elementAttributes.forEach((attributes) => {
            this.addCfdiRelacionados(attributes);
        });
        return this;
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
    public getConceptos(): Conceptos {
        return this.helperGetOrAdd(new Conceptos());
    }

    public addConceptos(attributes: Record<string, unknown> = {}): Conceptos {
        const subject = this.getConceptos();
        subject.addAttributes(attributes);
        return subject;
    }
    public getImpuestos(): Impuestos {
        return this.helperGetOrAdd(new Impuestos());
    }

    public addImpuestos(attributes: Record<string, unknown> = {}): Impuestos {
        const subject = this.getImpuestos();
        subject.addAttributes(attributes);
        return subject;
    }
    public getComplemento(): Complemento {
        return this.helperGetOrAdd(new Complemento());
    }

    public addComplemento(children: CNodeInterface): Comprobante {
        this.getComplemento().addChild(children);
        return this;
    }

    public getAddenda(): Addenda {
        return this.helperGetOrAdd(new Addenda());
    }

    public addAddenda(children: CNodeInterface): Addenda {
        this.getAddenda().addChild(children);
        return this;
    }

    public addConcepto(attributes: Record<string, unknown> = {}): Concepto {
        return this.getConceptos().addConcepto(attributes);
    }
}
