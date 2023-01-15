import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Servicios } from './servicios';

export class ServiciosPlataformasTecnologicas extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('plataformasTecnologicas:ServiciosPlataformasTecnologicas', attributes, children);
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:plataformasTecnologicas': 'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10 http://www.sat.gob.mx/esquemas/retencionpago/1/PlataformasTecnologicas10/ServiciosPlataformasTecnologicas10.xsd',
            'Version': '1.0'
        };
    }

    public getServicios(): Servicios {
        return this.helperGetOrAdd(new Servicios());
    }

    public addServicios(attributes: Record<string, unknown> = {}): Servicios {
        const subject = this.getServicios();
        subject.addAttributes(attributes);

        return subject;
    }
}
