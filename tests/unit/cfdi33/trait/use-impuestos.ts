import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';
import { AbstractElement } from '~/common/abstract-element';
import { ImpuestosTrait } from '~/cfdi33/traits/impuestos-trait';
import { Impuestos } from '~/cfdi33/impuestos';

class UseImpuestos extends Mixin(
    class extends AbstractElement {
        constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
            super('X', attributes, children);
        }

        public getImpuestos(): Impuestos {
            return this.helperGetOrAdd(new Impuestos());
        }

        public override getElementName(): string {
            return 'X';
        }
    },
    ImpuestosTrait
) {}

export { UseImpuestos };
