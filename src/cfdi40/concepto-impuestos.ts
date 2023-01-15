import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Mixin } from 'ts-mixer';

import { AbstractElement } from '../common/abstract-element';
import { Traslados } from './traslados';
import { Retenciones } from './retenciones';
import { ImpuestosTrait } from './traits/impuestos-trait';

class ConceptoImpuestos extends Mixin<
    unknown[],
    AbstractElement,
    typeof AbstractElement,
    unknown[],
    ImpuestosTrait,
    typeof ImpuestosTrait
>(
    class extends AbstractElement {
        public override getChildrenOrder(): string[] {
            return ['cfdi:Traslados', 'cfdi:Retenciones'];
        }
    },
    ImpuestosTrait
) {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Impuestos', attributes, children);
    }

    public getElementImpuestos(): this {
        return this;
    }

    public getTraslados(): Traslados {
        return this.helperGetOrAdd(new Traslados());
    }

    public addTraslados(attributes: Record<string, unknown> = {}): Traslados {
        const subject = this.getTraslados();
        subject.addAttributes(attributes);

        return subject;
    }

    public getRetenciones(): Retenciones {
        return this.helperGetOrAdd(new Retenciones());
    }

    public addRetenciones(attributes: Record<string, unknown> = {}): Retenciones {
        const subject = this.getRetenciones();
        subject.addAttributes(attributes);

        return subject;
    }
}

export { ConceptoImpuestos };
