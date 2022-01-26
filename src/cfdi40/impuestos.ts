import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Traslados } from './traslados';
import { Retenciones } from './retenciones';
import { use } from 'typescript-mix';
import { ImpuestosTrait } from './traits/impuestos_trait';

export class Impuestos extends AbstractElement {
    @use(ImpuestosTrait) private this: unknown;

    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cfdi:Impuestos', attributes, children);
    }

    protected getElementImpuestos(): Impuestos {
        return this;
    }

    public getChildrenOrder(): string[] {
        return ['cfdi:Retenciones', 'cfdi:Traslados'];
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
