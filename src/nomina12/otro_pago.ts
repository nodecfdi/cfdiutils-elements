import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { CompensacionSaldosAFavor } from './compensacion_saldos_a_favor';
import { SubsidioAlEmpleo } from './subsidio_al_empleo';

export class OtroPago extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:OtroPago', attributes, children);
    }

    public getElementName(): string {
        return 'nomina12:OtroPago';
    }

    public getChildrenOrder(): string[] {
        return ['nomina12:SubsidioAlEmpleo', 'nomina12:CompensacionSaldosAFavor'];
    }

    public getSubsidioAlEmpleo(): SubsidioAlEmpleo {
        return this.helperGetOrAdd(new SubsidioAlEmpleo());
    }

    public addSubsidioAlEmpleo(attributes: Record<string, unknown> = {}): SubsidioAlEmpleo {
        const subsidioAlEmpleo = this.getSubsidioAlEmpleo();
        subsidioAlEmpleo.addAttributes(attributes);
        return subsidioAlEmpleo;
    }

    public getCompensacionSaldosAFavor(): CompensacionSaldosAFavor {
        return this.helperGetOrAdd(new CompensacionSaldosAFavor());
    }

    public addCompensacionSaldosAFavor(attributes: Record<string, unknown>): CompensacionSaldosAFavor {
        const compensacionSaldosAFavor = this.getCompensacionSaldosAFavor();
        compensacionSaldosAFavor.addAttributes(attributes);
        return compensacionSaldosAFavor;
    }
}
