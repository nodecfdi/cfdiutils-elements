import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Deducciones } from './deducciones';
import { Incapacidades } from './incapacidades';
import { OtrosPagos } from './otros_pagos';
import { Percepciones } from './percepciones';

export class Nomina extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('nomina12:Nomina', attributes, children);
    }

    public getChildrenOrder(): string[] {
        return [
            'nomina12:Emisor',
            'nomina12:Receptor',
            'nomina12:Percepciones',
            'nomina12:Deducciones',
            'nomina12:OtrosPagos',
            'nomina12:Incapacidades',
        ];
    }

    public getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:nomina12': 'http://www.sat.gob.mx/nomina12',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/nomina12 http://www.sat.gob.mx/sitio_internet/cfd/nomina/nomina12.xsd',
            Version: '1.2',
        };
    }

    public getEmisor(): Emisor {
        return this.helperGetOrAdd(new Emisor());
    }

    public addEmisor(attributes: Record<string, unknown> = {}): Emisor {
        const emisor = this.getEmisor();
        emisor.addAttributes(attributes);
        return emisor;
    }

    public getReceptor(): Receptor {
        return this.helperGetOrAdd(new Receptor());
    }

    public addReceptor(attributes: Record<string, unknown> = {}): Receptor {
        const receptor = this.getReceptor();
        receptor.addAttributes(attributes);
        return receptor;
    }

    public getPercepciones(): Percepciones {
        return this.helperGetOrAdd(new Percepciones());
    }

    public addPercepciones(attributes: Record<string, unknown> = {}): Percepciones {
        const percepciones = this.getPercepciones();
        percepciones.addAttributes(attributes);
        return percepciones;
    }

    public getDeducciones(): Deducciones {
        return this.helperGetOrAdd(new Deducciones());
    }

    public addDeducciones(attributes: Record<string, unknown> = {}): Deducciones {
        const deducciones = this.getDeducciones();
        deducciones.addAttributes(attributes);
        return deducciones;
    }

    public getOtrosPagos(): OtrosPagos {
        return this.helperGetOrAdd(new OtrosPagos());
    }

    public addOtrosPagos(attributes: Record<string, unknown> = {}): OtrosPagos {
        const otrosPagos = this.getOtrosPagos();
        otrosPagos.addAttributes(attributes);
        return otrosPagos;
    }

    public getIncapacidades(): Incapacidades {
        return this.helperGetOrAdd(new Incapacidades());
    }

    public addIncapacidades(attributes: Record<string, unknown> = {}): Incapacidades {
        const incapacidades = this.getIncapacidades();
        incapacidades.addAttributes(attributes);
        return incapacidades;
    }
}
