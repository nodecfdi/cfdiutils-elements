import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { InformacionGlobal } from './informacion-global';
import { CfdiRelacionados } from './cfdi-relacionados';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Conceptos } from './conceptos';
import { Impuestos } from './impuestos';
import { Complemento } from './complemento';
import { Addenda } from './addenda';
import { ImpuestosTrait } from './traits/impuestos-trait';
import { Concepto } from './concepto';

class Comprobante extends Mixin(
    class extends AbstractElement {
        constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
            super('cfdi:Comprobante', attributes, children);
        }

        public getElementImpuestos(): Impuestos {
            return this.getImpuestos();
        }

        public override getChildrenOrder(): string[] {
            return [
                'cfdi:InformacionGlobal',
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
                'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation':
                    'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
                'Version': '4.0'
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

        public multiCfdiRelacionados(...elementAttributes: Record<string, unknown>[]): this {
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

        public addComplemento(children: CNodeInterface): this {
            this.getComplemento().addChild(children);

            return this;
        }

        public getAddenda(): Addenda {
            return this.helperGetOrAdd(new Addenda());
        }

        public addAddenda(children: CNodeInterface): this {
            this.getAddenda().addChild(children);

            return this;
        }

        public addConcepto(attributes: Record<string, unknown> = {}): Concepto {
            return this.getConceptos().addConcepto(attributes);
        }
    },
    ImpuestosTrait
) {}

export { Comprobante };
