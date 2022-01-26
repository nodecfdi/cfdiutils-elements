import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { CfdiRelacionado } from './cfdi_relacionado';

export class CfdiRelacionados extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:CfdiRelacionados', attributes, children);
    }

    public addCfdiRelacionado(attributes: Record<string, unknown> = {}): CfdiRelacionado {
        const subject = new CfdiRelacionado(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiCfdiRelacionado(...elementAttributes: Record<string, unknown>[]): CfdiRelacionados {
        elementAttributes.forEach((attributes) => {
            this.addCfdiRelacionado(attributes);
        });
        return this;
    }
}
