import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { InformacionAduaneraTrait } from './traits/informacion-aduanera-trait';
import { ImpuestosTrait } from './traits/impuestos-trait';
import { ConceptoImpuestos } from './concepto-impuestos';
import { CuentaPredial } from './cuenta-predial';
import { ComplementoConcepto } from './complemento-concepto';
import { Parte } from './parte';

class Concepto extends Mixin<
    unknown[],
    AbstractElement,
    typeof AbstractElement,
    unknown[],
    InformacionAduaneraTrait,
    typeof InformacionAduaneraTrait,
    unknown[],
    ImpuestosTrait,
    typeof ImpuestosTrait
>(
    class extends AbstractElement {
        public override getChildrenOrder(): string[] {
            return [
                'cfdi:Impuestos',
                'cfdi:InformacionAduanera',
                'cfdi:CuentaPredial',
                'cfdi:ComplementoConcepto',
                'cfdi:Parte'
            ];
        }
    },
    InformacionAduaneraTrait,
    ImpuestosTrait
) {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Concepto', attributes, children);
    }

    public getImpuestos(): ConceptoImpuestos {
        return this.helperGetOrAdd(new ConceptoImpuestos());
    }

    public getCuentaPredial(): CuentaPredial {
        return this.helperGetOrAdd(new CuentaPredial());
    }

    public addCuentaPredial(attributes: Record<string, unknown> = {}): CuentaPredial {
        const cuentaPredial = this.getCuentaPredial();
        cuentaPredial.addAttributes(attributes);

        return cuentaPredial;
    }

    public getComplementoConcepto(): ComplementoConcepto {
        return this.helperGetOrAdd(new ComplementoConcepto());
    }

    public addComplementoConcepto(
        attributes: Record<string, unknown> = {},
        children: CNodeInterface[] = []
    ): ComplementoConcepto {
        const complementoConcepto = this.getComplementoConcepto();
        complementoConcepto.addAttributes(attributes);
        complementoConcepto.children().importFromArray(children);

        return complementoConcepto;
    }

    public addParte(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): Parte {
        const parte = new Parte(attributes, children);
        this.addChild(parte);

        return parte;
    }

    public multiParte(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addParte(attributes);
        }

        return this;
    }
}

export { Concepto };
