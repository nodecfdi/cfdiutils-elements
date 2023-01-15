import { type Impuestos } from '../impuestos';
import { type Traslado } from '../traslado';
import { type Retencion } from '../retencion';

export abstract class ImpuestosTrait {
    public addTraslado(attributes: Record<string, unknown> = {}): Traslado {
        return this.getImpuestos().getTraslados().addTraslado(attributes);
    }

    public multiTraslado(...elementAttributes: Array<Record<string, unknown>>): this {
        this.getImpuestos()
            .getTraslados()
            .multiTraslado(...elementAttributes);

        return this;
    }

    public addRetencion(attributes: Record<string, unknown> = {}): Retencion {
        return this.getImpuestos().getRetenciones().addRetencion(attributes);
    }

    public multiRetencion(...elementAttributes: Array<Record<string, unknown>>): this {
        this.getImpuestos()
            .getRetenciones()
            .multiRetencion(...elementAttributes);

        return this;
    }

    public abstract getImpuestos(): Impuestos;
}
