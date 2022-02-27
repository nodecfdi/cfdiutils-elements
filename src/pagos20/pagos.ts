import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Totales } from './totales';
import { Pago } from './pago';

export class Pagos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:Pagos', attributes, children);
    }

    public getChildrenOrder(): string[] {
        return ['pago20:Totales', 'pago20:Pago'];
    }

    public getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:pago20': 'http://www.sat.gob.mx/Pagos20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/Pagos20 http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd',
            'Version': '2.0',
        };
    }

    public getTotales(): Totales {
        return this.helperGetOrAdd(new Totales());
    }

    public addTotales(attributes: Record<string, unknown> = {}): Totales {
        const subject = this.getTotales();
        subject.addAttributes(attributes);
        return subject;
    }

    public addPago(attributes: Record<string, unknown> = {}): Pago {
        const subject = new Pago(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiPago(...elementAttributes: Record<string, unknown>[]): Pagos {
        elementAttributes.forEach((attributes) => {
            this.addPago(attributes);
        });
        return this;
    }
}
