import { Impuestos } from './impuestos';

export class ConceptoImpuestos extends Impuestos {
    public override getElementImpuestos(): Impuestos {
        return this;
    }

    public override getChildrenOrder(): string[] {
        return ['cfdi:Traslados', 'cfdi:Retenciones'];
    }
}
