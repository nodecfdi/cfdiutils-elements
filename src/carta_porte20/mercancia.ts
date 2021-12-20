import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { CantidadTransporta } from './cantidad_transporta';
import { DetalleMercancia } from './detalle_mercancia';
import { GuiasIdentificacion } from './guias_identificacion';
import { Pedimentos } from './pedimentos';

export class Mercancia extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:Mercancia', attributes, children);
    }

    public getElementName(): string {
        return 'cartaporte20:Mercancia';
    }

    public getChildrenOrder(): string[] {
        return [
            'cartaporte20:Pedimentos',
            'cartaporte20:GuiasIdentificacion',
            'cartaporte20:CantidadTransporta',
            'cartaporte20:DetalleMercancia',
        ];
    }

    public addPedimentos(attributes: Record<string, unknown> = {}): Pedimentos {
        const subject = new Pedimentos(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiPedimentos(elementAttributes: Record<string, unknown>[] = []): Mercancia {
        elementAttributes.forEach(attributes => {
            this.addPedimentos(attributes);
        });
        return this;
    }

    public addGuiasIdentificacion(attributes: Record<string, unknown> = {}): GuiasIdentificacion {
        const subject = new GuiasIdentificacion(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiGuiasIdentificacion(elementAttributes: Record<string, unknown>[] = []): Mercancia {
        elementAttributes.forEach(attributes => {
            this.addGuiasIdentificacion(attributes);
        });
        return this;
    }

    public addCantidadTransporta(attributes: Record<string, unknown> = {}): CantidadTransporta {
        const subject = new CantidadTransporta(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiCantidadTransporta(elementAttributes: Record<string, unknown>[] = []): Mercancia {
        elementAttributes.forEach(attributes => {
            this.addCantidadTransporta(attributes);
        });
        return this;
    }

    public getDetalleMercancia(): DetalleMercancia {
        return this.helperGetOrAdd(new DetalleMercancia());
    } 

    public addDetalleMercancia(attributes: Record<string, unknown>): DetalleMercancia {
        const subject = this.getDetalleMercancia();
        subject.addAttributes(attributes);
        return subject;
    }
}
