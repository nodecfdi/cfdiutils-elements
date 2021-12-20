import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { Domicilio } from './domicilio';
import { PartesTransporte } from './partes_transporte';

export class TiposFigura extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:TiposFigura', attributes, children);
    }

    public getElementName(): string {
        return 'cartaporte20:TiposFigura';
    }

    public getChildrenOrder(): string[] {
        return ['cartaporte20:PartesTransporte', 'cartaporte20:Domicilio'];
    }

    public addPartesTransporte(attributes: Record<string, unknown> = {}): PartesTransporte {
        const subject = new PartesTransporte(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiPartesTransporte(elementAttributes: Record<string, unknown>[] = []): TiposFigura {
        elementAttributes.forEach(attributes => {
            this.addPartesTransporte(attributes);
        });
        return this;
    }

    public getDomicilio(): Domicilio {
        return this.helperGetOrAdd(new Domicilio());
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = this.getDomicilio();
        subject.addAttributes(attributes);
        return subject;
    }
}
