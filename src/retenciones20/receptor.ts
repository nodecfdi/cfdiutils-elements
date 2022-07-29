import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Nacional } from './nacional';
import { Extranjero } from './extranjero';

export class Receptor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Receptor', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['retenciones:Nacional', 'retenciones:Extranjero'];
    }

    public getNacional(): Nacional {
        return this.helperGetOrAdd(new Nacional());
    }

    public addNacional(attributes: Record<string, unknown> = {}): Nacional {
        const subject = this.getNacional();
        subject.addAttributes(attributes);

        return subject;
    }

    public getExtranjero(): Extranjero {
        return this.helperGetOrAdd(new Extranjero());
    }

    public addExtranjero(attributes: Record<string, unknown> = {}): Extranjero {
        const subject = this.getExtranjero();
        subject.addAttributes(attributes);

        return subject;
    }
}
