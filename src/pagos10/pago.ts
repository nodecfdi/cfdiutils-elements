import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DoctoRelacionado } from './docto-relacionado';
import { Impuestos } from './impuestos';

export class Pago extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago10:Pago', attributes, children);
    }

    public addDoctoRelacionado(attributes: Record<string, unknown> = {}): DoctoRelacionado {
        const doctoRelacionado = new DoctoRelacionado(attributes);
        this.addChild(doctoRelacionado);

        return doctoRelacionado;
    }

    public multiDoctoRelacionado(...elementAttributes: Record<string, unknown>[]): Pago {
        elementAttributes.forEach((attributes) => {
            this.addDoctoRelacionado(attributes);
        });

        return this;
    }

    public addImpuestos(attributes: Record<string, unknown> = {}): Impuestos {
        const impuestos = new Impuestos(attributes);
        this.addChild(impuestos);

        return impuestos;
    }

    public override getChildrenOrder(): string[] {
        return ['pago10:DoctoRelacionado', 'pago10:Impuestos'];
    }
}
