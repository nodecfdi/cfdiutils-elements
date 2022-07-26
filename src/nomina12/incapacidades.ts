import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Incapacidad } from './incapacidad';

export class Incapacidades extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Incapacidades', attributes, children);
    }

    public addIncapacidad(elementAttributes: Record<string, unknown> = {}): Incapacidad {
        const incapacidad = new Incapacidad(elementAttributes);
        this.addChild(incapacidad);

        return incapacidad;
    }

    public multiIncapacidad(elementAttributes: Record<string, unknown>[] = []): Incapacidades {
        elementAttributes.forEach((attributes) => {
            this.addIncapacidad(attributes);
        });

        return this;
    }
}
