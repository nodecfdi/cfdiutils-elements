import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Deduccion } from './deduccion';

export class Deducciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Deducciones', attributes, children);
    }

    public addDeduccion(attributes: Record<string, unknown> = {}): Deduccion {
        const deduccion = new Deduccion(attributes);
        this.addChild(deduccion);

        return deduccion;
    }

    public multiDeduccion(elementAttributes: Record<string, unknown>[] = []): Deducciones {
        elementAttributes.forEach((attributes) => {
            this.addDeduccion(attributes);
        });

        return this;
    }
}
