import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { ACuentaTerceros } from './a-cuenta-terceros';
import { InformacionAduanera } from './informacion-aduanera';
import { CuentaPredial } from './cuenta-predial';
import { ComplementoConcepto } from './complemento-concepto';
import { Parte } from './parte';
import { ImpuestosTrait } from './traits/impuestos-trait';
import { ConceptoImpuestos } from './concepto-impuestos';

class TConcepto extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Concepto', attributes, children);
    }

    public getElementImpuestos(): ConceptoImpuestos {
        return this.getImpuestos();
    }

    public override getChildrenOrder(): string[] {
        return [
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte'
        ];
    }

    public getImpuestos(): ConceptoImpuestos {
        return this.helperGetOrAdd(new ConceptoImpuestos());
    }

    public addImpuestos(attributes: Record<string, unknown> = {}): ConceptoImpuestos {
        const subject = this.getImpuestos();
        subject.addAttributes(attributes);

        return subject;
    }

    public getACuentaTerceros(): ACuentaTerceros {
        return this.helperGetOrAdd(new ACuentaTerceros());
    }

    public addACuentaTerceros(attributes: Record<string, unknown> = {}): ACuentaTerceros {
        const subject = this.getACuentaTerceros();
        subject.addAttributes(attributes);

        return subject;
    }

    public addInformacionAduanera(attributes: Record<string, unknown> = {}): InformacionAduanera {
        const subject = new InformacionAduanera(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiInformacionAduanera(...elementAttributes: Record<string, unknown>[]): this {
        elementAttributes.forEach((attributes) => {
            this.addInformacionAduanera(attributes);
        });

        return this;
    }

    public addCuentaPredial(attributes: Record<string, unknown> = {}): CuentaPredial {
        const subject = new CuentaPredial(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiCuentaPredial(...elementAttributes: Record<string, unknown>[]): this {
        elementAttributes.forEach((attributes) => {
            this.addCuentaPredial(attributes);
        });

        return this;
    }

    public getComplementoConcepto(): ComplementoConcepto {
        return this.helperGetOrAdd(new ComplementoConcepto());
    }

    public addComplementoConcepto(child: CNodeInterface): this {
        this.getComplementoConcepto().addChild(child);

        return this;
    }

    public addParte(attributes: Record<string, unknown> = {}): Parte {
        const subject = new Parte(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiParte(...elementAttributes: Record<string, unknown>[]): this {
        elementAttributes.forEach((attributes) => {
            this.addParte(attributes);
        });

        return this;
    }
}

class Concepto extends Mixin(TConcepto, ImpuestosTrait) {}

export { Concepto };
