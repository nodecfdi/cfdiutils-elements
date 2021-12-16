import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { OtroPago } from './otro_pago';

export class OtrosPagos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:OtrosPagos', attributes, children);
    }

    public getElementName(): string {
        return 'nomina12:OtrosPagos';
    }

    public addOtroPago(attributes: Record<string, unknown> = {}): OtroPago {
        const otroPago = new OtroPago(attributes);
        this.addChild(otroPago);
        return otroPago;
    }

    public multiOtroPago(elementAttributes: Record<string, unknown>[] = []): OtrosPagos {
        elementAttributes.forEach((attributes) => {
            this.addOtroPago(attributes);
        });
        return this;
    }
}
