import { Impuestos } from './impuestos';

export class ConceptoImpuestos extends Impuestos {
    protected getElementImpuestos(): Impuestos {
        return this;
    }

    public getChildrenOrder(): string[] {
        return ['cfdi:Traslados', 'cfdi:Retenciones'];
    }
}
