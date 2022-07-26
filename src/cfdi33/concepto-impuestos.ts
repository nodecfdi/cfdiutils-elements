import { Impuestos } from './impuestos';

export class ConceptoImpuestos extends Impuestos {
    public override getChildrenOrder(): string[] {
        return ['cfdi:Traslados', 'cfdi:Retenciones'];
    }
}
