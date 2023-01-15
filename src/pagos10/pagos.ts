import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Pago } from './pago';

export class Pagos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago10:Pagos', attributes, children);
    }

    public addPago(attributes: Record<string, unknown> = {}): Pago {
        const pago = new Pago(attributes);
        this.addChild(pago);

        return pago;
    }

    public multiPago(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addPago(attributes);
        }

        return this;
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:pago10': 'http://www.sat.gob.mx/Pagos',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/Pagos http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd',
            'Version': '1.0'
        };
    }
}
