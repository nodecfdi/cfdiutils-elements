import { Impuestos } from './impuestos';

export class ConceptoImpuestos extends Impuestos {
    public override getElementImpuestos(): this {
        return this;
    }

    public override getChildrenOrder(): string[] {
        return ['cfdi:Traslados', 'cfdi:Retenciones'];
    }
}
