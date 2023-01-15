import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { AccionesOTitulos } from './acciones-o-titulos';
import { HorasExtra } from './horas-extra';

export class Percepcion extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Percepcion', attributes, children);
    }

    public override getChildrenOrder(): string[] {
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

    public addHorasExtra(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []): HorasExtra {
        const horasExtra = new HorasExtra(attributes, children);
        this.addChild(horasExtra);

        return horasExtra;
    }

    public multiHorasExtra(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addHorasExtra(attributes);
        }

        return this;
    }
}
