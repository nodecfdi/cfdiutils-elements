import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { CfdiRelacionado } from './cfdi-relacionado';

export class CfdiRelacionados extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:CfdiRelacionados', attributes, children);
    }

    public addCfdiRelacionado(attributes: Record<string, unknown> = {}): CfdiRelacionado {
        const subject = new CfdiRelacionado(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiCfdiRelacionado(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addCfdiRelacionado(attributes);
        }

        return this;
    }
}
