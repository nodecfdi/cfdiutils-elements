import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '~/common/abstract-element';
import { ImpuestosTrait } from '~/cfdi40/traits/impuestos-trait';
import { Impuestos } from '~/cfdi40/impuestos';

class TemporaryClass extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('X', attributes, children);
    }

    public getElementImpuestos(): Impuestos {
        return this.helperGetOrAdd(new Impuestos());
    }

    public override getElementName(): string {
        return 'X';
    }
}

class UseImpuestos extends Mixin(TemporaryClass, ImpuestosTrait) {}

export { UseImpuestos };
