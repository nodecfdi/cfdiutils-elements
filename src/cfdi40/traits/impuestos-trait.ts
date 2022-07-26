import { Impuestos } from '../impuestos';
import { Traslado } from '../traslado';
import { Retencion } from '../retencion';

export abstract class ImpuestosTrait {
    public abstract getElementImpuestos(): Impuestos;

    public addTraslado(attributes: Record<string, unknown> = {}): Traslado {
        return this.getElementImpuestos().getTraslados().addTraslado(attributes);
    }

    public multiTraslado(...elementAttributes: Record<string, unknown>[]): this {
        this.getElementImpuestos()
            .getTraslados()
            .multiTraslado(...elementAttributes);

        return this;
    }

    public addRetencion(attributes: Record<string, unknown> = {}): Retencion {
        return this.getElementImpuestos().getRetenciones().addRetencion(attributes);
    }

    public multiRetencion(...elementAttributes: Record<string, unknown>[]): this {
        this.getElementImpuestos()
            .getRetenciones()
            .multiRetencion(...elementAttributes);

        return this;
    }
}
