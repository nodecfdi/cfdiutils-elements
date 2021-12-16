import { CNodeInterface } from "@nodecfdi/cfdiutils-common";
import { AbstractElement } from '../common/abstract_element';
import { AccionesOTitulos } from "./acciones_o_titulos";
import { HorasExtra } from "./horas_extra";

export class Percepcion extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Percepcion', attributes, children);
    }

    public getElementName(): string {
        return 'nomina12:Percepcion';
    }

    public getChildrenOrder(): string[] {
        return ['nomina12:AccionesOTitulos', 'nomina12:HorasExtra'];
    }

    public getAccionesOTitulos(): AccionesOTitulos {
        return this.helperGetOrAdd(new AccionesOTitulos());
    }

    public addAccionesOTitulos(attributes: Record<string, unknown> = {}): AccionesOTitulos {
        const accionesOTitulos = this.getAccionesOTitulos();
        accionesOTitulos.addAttributes(attributes);
        return accionesOTitulos;
    }

    public addHorasExtras(attributes: Record<string, unknown> = {}, children: CNodeInterface [] = []): HorasExtra {
        const horasExtra = new HorasExtra(attributes, children);
        this.addChild(horasExtra);
        return horasExtra;
    }

    public multiHorasExtra(elementAttributes: Record<string, unknown>[] = []): Percepcion {
        elementAttributes.forEach(attributes => {
            this.addHorasExtras(attributes);
        });
        return this;
    }
}