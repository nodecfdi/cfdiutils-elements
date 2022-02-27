import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';

export class TimbreFiscalDigital extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('tfd:TimbreFiscalDigital', attributes, children);
    }

    public getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:tfd': 'http://www.sat.gob.mx/TimbreFiscalDigital',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd',
            'Version': '1.1',
        };
    }
}
