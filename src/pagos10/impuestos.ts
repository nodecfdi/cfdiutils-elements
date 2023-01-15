import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Traslados } from './traslados';
import { Retenciones } from './retenciones';

export class Impuestos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago10:Impuestos', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['pago10:Retenciones', 'pago10:Traslados'];
    }

    public getTraslados(): Traslados {
        return this.helperGetOrAdd(new Traslados());
    }

    public getRetenciones(): Retenciones {
        return this.helperGetOrAdd(new Retenciones());
    }
}
