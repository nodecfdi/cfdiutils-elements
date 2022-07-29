import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { JubilacionPensionRetiro } from './jubilacion-pension-retiro';
import { Percepcion } from './percepcion';
import { SeparacionIndemnizacion } from './separacion-indemnizacion';

export class Percepciones extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Percepciones', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['nomina12:Percepcion', 'nomina12:JubilacionPensionRetiro', 'nomina12:SeparacionIndemnizacion'];
    }

    public addPercepcion(attributes: Record<string, unknown>, children: CNodeInterface[] = []): Percepcion {
        const percepcion = new Percepcion(attributes, children);
        this.addChild(percepcion);

        return percepcion;
    }

    public multiPercepcion(elementAttributes: Record<string, unknown>[] = []): Percepciones {
        elementAttributes.forEach((attributes) => {
            this.addPercepcion(attributes);
        });

        return this;
    }

    public getJubilacionPensionRetiro(): JubilacionPensionRetiro {
        return this.helperGetOrAdd(new JubilacionPensionRetiro());
    }

    public addJubilacionPensionRetiro(attributes: Record<string, unknown> = {}): JubilacionPensionRetiro {
        const jubilacionPensionRetiro = this.getJubilacionPensionRetiro();
        jubilacionPensionRetiro.addAttributes(attributes);

        return jubilacionPensionRetiro;
    }

    public getSeparacionIndemnizacion(): SeparacionIndemnizacion {
        return this.helperGetOrAdd(new SeparacionIndemnizacion());
    }

    public addSeparacionIndemnizacion(attributes: Record<string, unknown> = {}): SeparacionIndemnizacion {
        const separacionIndemnizacion = this.getSeparacionIndemnizacion();
        separacionIndemnizacion.addAttributes(attributes);

        return separacionIndemnizacion;
    }
}
