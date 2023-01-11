import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { OtroPago } from './otro-pago';

export class OtrosPagos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:OtrosPagos', attributes, children);
    }

    public addOtroPago(attributes: Record<string, unknown> = {}): OtroPago {
        const otroPago = new OtroPago(attributes);
        this.addChild(otroPago);

        return otroPago;
    }

    public multiOtroPago(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addOtroPago(attributes);
        }

        return this;
    }
}
