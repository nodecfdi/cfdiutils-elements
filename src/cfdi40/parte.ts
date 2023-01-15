import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { InformacionAduanera } from './informacion-aduanera';

export class Parte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Parte', attributes, children);
    }

    public addInformacionAduanera(attributes: Record<string, unknown> = {}): InformacionAduanera {
        const subject = new InformacionAduanera(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiInformacionAduanera(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addInformacionAduanera(attributes);
        }

        return this;
    }
}
