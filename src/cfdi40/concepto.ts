import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Impuestos } from './impuestos';
import { ACuentaTerceros } from './a_cuenta_terceros';
import { InformacionAduanera } from './informacion_aduanera';
import { CuentaPredial } from './cuenta_predial';
import { ComplementoConcepto } from './complemento_concepto';
import { Parte } from './parte';
import { use } from 'typescript-mix';
import { ImpuestosTrait } from './traits/impuestos_trait';
import { ConceptoImpuestos } from './concepto_impuestos';

interface Concepto extends AbstractElement, ImpuestosTrait {}

class Concepto extends AbstractElement {
    @use(ImpuestosTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Concepto', attributes, children);
    }

    public getElementImpuestos(): Impuestos {
        return this.getImpuestos();
    }

    public getChildrenOrder(): string[] {
        return [
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte',
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

    public multiInformacionAduanera(...elementAttributes: Record<string, unknown>[]): Concepto {
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

    public multiCuentaPredial(...elementAttributes: Record<string, unknown>[]): Concepto {
        elementAttributes.forEach((attributes) => {
            this.addCuentaPredial(attributes);
        });
        return this;
    }

    public getComplementoConcepto(): ComplementoConcepto {
        return this.helperGetOrAdd(new ComplementoConcepto());
    }

    public addComplementoConcepto(child: CNodeInterface): Concepto {
        this.getComplementoConcepto().addChild(child);
        return this;
    }
    public addParte(attributes: Record<string, unknown> = {}): Parte {
        const subject = new Parte(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiParte(...elementAttributes: Record<string, unknown>[]): Concepto {
        elementAttributes.forEach((attributes) => {
            this.addParte(attributes);
        });
        return this;
    }
}

export { Concepto };
