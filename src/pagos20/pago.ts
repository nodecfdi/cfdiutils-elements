import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DoctoRelacionado } from './docto-relacionado';
import { ImpuestosP } from './impuestos-p';

export class Pago extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pago20:Pago', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['pago20:DoctoRelacionado', 'pago20:ImpuestosP'];
    }

    public addDoctoRelacionado(attributes: Record<string, unknown> = {}): DoctoRelacionado {
        const subject = new DoctoRelacionado(attributes);
        this.addChild(subject);

        return subject;
    }

    public multiDoctoRelacionado(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addDoctoRelacionado(attributes);
        }

        return this;
    }

    public getImpuestosP(): ImpuestosP {
        return this.helperGetOrAdd(new ImpuestosP());
    }

    public addImpuestosP(attributes: Record<string, unknown> = {}): ImpuestosP {
        const subject = this.getImpuestosP();
        subject.addAttributes(attributes);

        return subject;
    }
}
