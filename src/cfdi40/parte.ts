import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { InformacionAduanera } from './informacion_aduanera';

export class Parte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Parte', attributes, children);
    }

    public addInformacionAduanera(attributes: Record<string, unknown> = {}): InformacionAduanera {
        const subject = new InformacionAduanera(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiInformacionAduanera(...elementAttributes: Record<string, unknown>[]): Parte {
        elementAttributes.forEach((attributes) => {
            this.addInformacionAduanera(attributes);
        });
        return this;
    }
}
