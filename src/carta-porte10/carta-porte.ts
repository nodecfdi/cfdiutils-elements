import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Ubicaciones } from './ubicaciones';
import { Mercancias } from './mercancias';
import { FiguraTransporte } from './figura-transporte';

export class CartaPorte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:CartaPorte', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['cartaporte:Ubicaciones', 'cartaporte:Mercancias', 'cartaporte:FiguraTransporte'];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:cartaporte': 'http://www.sat.gob.mx/cartaporte',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/cartaporte http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte.xsd',
            'Version': '1.0'
        };
    }

    public getUbicaciones(): Ubicaciones {
        return this.helperGetOrAdd(new Ubicaciones());
    }

    public addUbicaciones(attributes: Record<string, unknown> = {}): Ubicaciones {
        const subject = this.getUbicaciones();
        subject.addAttributes(attributes);

        return subject;
    }

    public getMercancias(): Mercancias {
        return this.helperGetOrAdd(new Mercancias());
    }

    public addMercancias(attributes: Record<string, unknown> = {}): Mercancias {
        const subject = this.getMercancias();
        subject.addAttributes(attributes);

        return subject;
    }

    public getFiguraTransporte(): FiguraTransporte {
        return this.helperGetOrAdd(new FiguraTransporte());
    }

    public addFiguraTransporte(attributes: Record<string, unknown> = {}): FiguraTransporte {
        const subject = this.getFiguraTransporte();
        subject.addAttributes(attributes);

        return subject;
    }
}
