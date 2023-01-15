import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { ImpuestosTrait } from './traits/impuestos-trait';
import { CfdiRelacionados } from './cfdi-relacionados';
import { type CfdiRelacionado } from './cfdi-relacionado';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Conceptos } from './conceptos';
import { type Concepto } from './concepto';
import { Impuestos } from './impuestos';
import { Complemento } from './complemento';
import { Addenda } from './addenda';

class Comprobante extends Mixin<
    unknown[],
    AbstractElement,
    typeof AbstractElement,
    unknown[],
    ImpuestosTrait,
    typeof ImpuestosTrait
>(
    class extends AbstractElement {
        public override getChildrenOrder(): string[] {
            return [
                'cfdi:CfdiRelacionados',
                'cfdi:Emisor',
                'cfdi:Receptor',
                'cfdi:Conceptos',
                'cfdi:Impuestos',
                'cfdi:Complemento',
                'cfdi:Addenda'
            ];
        }

        public override getFixedAttributes(): Record<string, string> {
            return {
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation':
                    'http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
                'Version': '3.3'
            };
        }
    },
    ImpuestosTrait
) {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Comprobante', attributes, children);
    }

    public getCfdiRelacionados(): CfdiRelacionados {
        return this.helperGetOrAdd(new CfdiRelacionados());
    }

    public addCfdiRelacionados(attributes: Record<string, unknown> = {}): CfdiRelacionados {
        const cfdiRelacionados = this.getCfdiRelacionados();
        cfdiRelacionados.addAttributes(attributes);

        return cfdiRelacionados;
    }

    public addCfdiRelacionado(attributes: Record<string, unknown> = {}): CfdiRelacionado {
        return this.getCfdiRelacionados().addCfdiRelacionado(attributes);
    }

    public multiCfdiRelacionado(...elementAttributes: Array<Record<string, unknown>>): this {
        this.getCfdiRelacionados().multiCfdiRelacionado(...elementAttributes);

        return this;
    }

    public getEmisor(): Emisor {
        return this.helperGetOrAdd(new Emisor());
    }

    public addEmisor(attributes: Record<string, unknown> = {}): Emisor {
        const emisor = this.getEmisor();
        emisor.addAttributes(attributes);

        return emisor;
    }

    public getReceptor(): Receptor {
        return this.helperGetOrAdd(new Receptor());
    }

    public addReceptor(attributes: Record<string, unknown> = {}): Receptor {
        const receptor = this.getReceptor();
        receptor.addAttributes(attributes);

        return receptor;
    }

    public getConceptos(): Conceptos {
        return this.helperGetOrAdd(new Conceptos());
    }

    public addConceptos(attributes: Record<string, unknown> = {}): Conceptos {
        const subject = this.getConceptos();
        subject.addAttributes(attributes);

        return subject;
    }

    public addConcepto(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): Concepto {
        return this.getConceptos().addConcepto(attributes, children);
    }

    public getImpuestos(): Impuestos {
        return this.helperGetOrAdd(new Impuestos());
    }

    public addImpuestos(attributes: Record<string, unknown> = {}): Impuestos {
        const impuestos = this.getImpuestos();
        impuestos.addAttributes(attributes);

        return impuestos;
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

export { Comprobante };
