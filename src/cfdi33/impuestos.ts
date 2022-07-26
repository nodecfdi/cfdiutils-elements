import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Traslados } from './traslados';
import { Retenciones } from './retenciones';

export class Impuestos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Impuestos', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['cfdi:Retenciones', 'cfdi:Traslados'];
    }

    public getTraslados(): Traslados {
        return this.helperGetOrAdd(new Traslados());
    }

    public getRetenciones(): Retenciones {
        return this.helperGetOrAdd(new Retenciones());
    }
}
