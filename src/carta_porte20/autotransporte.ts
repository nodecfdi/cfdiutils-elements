import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { IdentificacionVehicular } from './identificacion_vehicular';
import { Remolques } from './remolques';
import { Seguros } from './seguros';

export class Autotransporte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:Autotransporte', attributes, children);
    }

    public getElementName(): string {
        return 'cartaporte20:Autotransporte';
    }

    public getChildrenOrder(): string[] {
        return ['cartaporte20:IdentificacionVehicular', 'cartaporte20:Seguros', 'cartaporte20:Remolques'];
    }

    public getIdentificacionVehicular(): IdentificacionVehicular {
        return this.helperGetOrAdd(new IdentificacionVehicular());
    }

    public addIdentificacionVehicular(attributes: Record<string, unknown> = {}): IdentificacionVehicular {
        const subject = this.getIdentificacionVehicular();
        subject.addAttributes(attributes);
        return subject;
    }

    public getSeguros(): Seguros {
        return this.helperGetOrAdd(new Seguros());
    }

    public addSeguros(attributes: Record<string, unknown>): Seguros {
        const subject = this.getSeguros();
        subject.addAttributes(attributes);
        return subject;
    }

    public getRemolques(): Remolques {
        return this.helperGetOrAdd(new Remolques());
    }

    public addRemolques(attributes: Record<string, unknown> = {}): Remolques {
        const subject = this.getRemolques();
        subject.addAttributes(attributes);
        return subject;
    }
}
