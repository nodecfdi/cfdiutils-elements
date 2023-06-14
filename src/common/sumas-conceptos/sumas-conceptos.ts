import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';

export class SumasConceptos {
    public static impuestoKey(impuesto: string, tipoFactor = '', tasaOCuota = ''): string {
        return [impuesto, tipoFactor, tasaOCuota].join(':');
    }

    private importes = 0;
    private descuento = 0;
    private total!: number;
    private impuestosTrasladados!: number;
    private impuestosRetenidos!: number;
    private traslados: Record<string, Record<string, string | number>> = {};
    private exentos: Record<string, Record<string, string | number>> = {};
    private retenciones: Record<string, Record<string, string | number>> = {};
    private localesImpuestosTraslados!: number;
    private localesImpuestosRetenidos!: number;
    private localesTraslados: Array<Record<string, string | number>> = [];
    private localesRetenciones: Array<Record<string, string | number>> = [];
    private readonly precision;
    private _foundAnyConceptWithDiscount = false;

    constructor(comprobante: CNodeInterface, precision = 2) {
        this.precision = precision;
        this.addComprobante(comprobante);
    }

    /**
     * Getters
     */

    public getTotal(): number {
        return this.total;
    }

    public getSubTotal(): number {
        return this.importes;
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public getTraslados(): Record<string, Record<string, string | number>> {
        return this.traslados;
    }

    public getExentos(): Record<string, Record<string, string | number>> {
        return this.exentos;
    }

    public getRetenciones(): Record<string, Record<string, string | number>> {
        return this.retenciones;
    }

    public hasTraslados(): boolean {
        return Object.keys(this.traslados).length > 0;
    }

    public hasExentos(): boolean {
        return Object.keys(this.exentos).length > 0;
    }

    public hasRetenciones(): boolean {
        return Object.keys(this.retenciones).length > 0;
    }

    public getImpuestosTrasladados(): number {
        return this.impuestosTrasladados;
    }

    public getImpuestosRetenidos(): number {
        return this.impuestosRetenidos;
    }

    public getPrecision(): number {
        return this.precision;
    }

    public getLocalesImpuestosTrasladados(): number {
        return this.localesImpuestosTraslados;
    }

    public getLocalesImpuestosRetenidos(): number {
        return this.localesImpuestosRetenidos;
    }

    public getLocalesTraslados(): Array<Record<string, string | number>> {
        return this.localesTraslados;
    }

    public getLocalesRetenciones(): Array<Record<string, string | number>> {
        return this.localesRetenciones;
    }

    public hasLocalesTraslados(): boolean {
        return this.localesTraslados.length > 0;
    }

    public hasLocalesRetenciones(): boolean {
        return this.localesRetenciones.length > 0;
    }

    public foundAnyConceptWithDiscount(): boolean {
        return this._foundAnyConceptWithDiscount;
    }

    /**
     * Helper functions to populate the object
     * @param comprobante -
     */
    private addComprobante(comprobante: CNodeInterface): void {
        const conceptos = comprobante.searchNodes('cfdi:Conceptos', 'cfdi:Concepto');
        for (const concepto of conceptos) {
            this.addConcepto(concepto);
        }

        this.localesTraslados = this.populateImpuestosLocales(comprobante, 'TrasladosLocales', 'Traslado');
        this.localesImpuestosTraslados = this.localesTraslados.reduce((a: number, b) => a + Number(b.Importe), 0);
        this.localesRetenciones = this.populateImpuestosLocales(comprobante, 'RetencionesLocales', 'Retenido');
        this.localesImpuestosRetenidos = this.localesRetenciones.reduce((a: number, b) => a + Number(b.Importe), 0);

        this.traslados = this.roundImpuestosGroup(this.traslados);
        this.retenciones = this.roundImpuestosGroup(this.retenciones);
        this.impuestosTrasladados = Object.values(this.traslados)
            .map((v) => Number(v.Importe))
            .reduce((a: number, b) => a + b, 0);
        this.impuestosRetenidos = Object.values(this.retenciones)
            .map((v) => Number(v.Importe))
            .reduce((a: number, b) => a + b, 0);

        this.impuestosTrasladados = Number(this.impuestosTrasladados.toFixed(this.precision));
        this.impuestosRetenidos = Number(this.impuestosRetenidos.toFixed(this.precision));
        this.importes = Number(this.importes.toFixed(this.precision));
        this.descuento = Number(this.descuento.toFixed(this.precision));

        this.total = Number(
            [
                this.importes,
                -this.descuento,
                this.impuestosTrasladados,
                -this.impuestosRetenidos,
                this.localesImpuestosTraslados,
                -this.localesImpuestosRetenidos
            ]
                .reduce((a, b) => a + b, 0)
                .toFixed(this.precision)
        );
    }

    private addConcepto(concepto: CNodeInterface): void {
        const conceptoImporte = Number.isNaN(Number.parseFloat(concepto.get('Importe')))
            ? '0'
            : concepto.get('Importe');
        this.importes += Number.parseFloat(conceptoImporte);
        if (concepto.offsetExists('Descuento')) {
            this._foundAnyConceptWithDiscount = true;
        }

        const conceptoDescuento = Number.isNaN(Number.parseFloat(concepto.get('Descuento')))
            ? '0'
            : concepto.get('Descuento');
        this.descuento += Number.parseFloat(conceptoDescuento);

        const traslados = concepto.searchNodes('cfdi:Impuestos', 'cfdi:Traslados', 'cfdi:Traslado');
        for (const traslado of traslados) {
            if (traslado.get('TipoFactor') === 'Exento') {
                this.addExento(traslado);
            } else {
                this.addTraslado(traslado);
            }
        }

        const retenciones = concepto.searchNodes('cfdi:Impuestos', 'cfdi:Retenciones', 'cfdi:Retencion');
        for (const retencion of retenciones) {
            this.addRetencion(retencion);
        }
    }

    private populateImpuestosLocales(
        comprobante: CNodeInterface,
        plural: string,
        singular: string
    ): Array<Record<string, string | number>> {
        const locales = comprobante.searchNodes('cfdi:Complemento', 'implocal:ImpuestosLocales', `implocal:${plural}`);
        const list: Array<Record<string, string | number>> = [];
        for (const local of locales) {
            const importeValue = Number.isNaN(Number.parseFloat(local.get('Importe'))) ? '0' : local.get('Importe');
            const tasaValue = Number.isNaN(Number.parseFloat(local.get(`Tasade${singular}`)))
                ? '0'
                : local.get(`Tasade${singular}`);

            list.push({
                Impuesto: local.get(`ImpLoc${singular}`),
                Tasa: Number.parseFloat(tasaValue),
                Importe: Number.parseFloat(importeValue)
            });
        }

        return list;
    }

    private roundImpuestosGroup(
        group: Record<string, Record<string, string | number>>
    ): Record<string, Record<string, string | number>> {
        for (const key of Object.keys(group)) {
            group[key].Importe = Number(group[key].Importe).toFixed(this.precision);
            if (group[key].Base) {
                group[key].Base = Number(group[key].Base).toFixed(this.precision);
            }
        }

        return group;
    }

    private addTraslado(traslado: CNodeInterface): void {
        const attributes = traslado.attributes();
        const key = SumasConceptos.impuestoKey(
            attributes.get('Impuesto'),
            attributes.get('TipoFactor'),
            attributes.get('TasaOCuota')
        );
        if (!this.traslados[key]) {
            this.traslados[key] = {
                Impuesto: attributes.get('Impuesto'),
                TipoFactor: attributes.get('TipoFactor'),
                TasaOCuota: attributes.get('TasaOCuota'),
                Importe: 0,
                Base: 0
            };
        }

        const attributeImporte = Number.isNaN(Number.parseFloat(attributes.get('Importe')))
            ? '0'
            : attributes.get('Importe');
        (this.traslados[key].Importe as number) += Number.parseFloat(attributeImporte);

        const attributeBase = Number.isNaN(Number.parseFloat(attributes.get('Base'))) ? '0' : attributes.get('Base');
        (this.traslados[key].Base as number) += Number.parseFloat(attributeBase);
    }

    private addExento(exento: CNodeInterface): void {
        const key = SumasConceptos.impuestoKey(exento.get('Impuesto'), exento.get('TipoFactor'), '');
        if (!this.exentos[key]) {
            this.exentos[key] = {
                TipoFactor: exento.get('TipoFactor'),
                Impuesto: exento.get('Impuesto'),
                Base: 0
            };
        }

        const attributeBase = Number.isNaN(Number.parseFloat(exento.get('Base'))) ? '0' : exento.get('Base');
        (this.exentos[key].Base as number) += Number.parseFloat(attributeBase);
    }

    private addRetencion(retencion: CNodeInterface): void {
        const key = SumasConceptos.impuestoKey(retencion.get('Impuesto'));
        if (!this.retenciones[key]) {
            this.retenciones[key] = {
                Impuesto: retencion.get('Impuesto'),
                Importe: 0
            };
        }

        const retencionImporte = Number.isNaN(Number.parseFloat(retencion.get('Importe')))
            ? '0'
            : retencion.get('Importe');
        (this.retenciones[key].Importe as number) += Number.parseFloat(retencionImporte);
    }
}
