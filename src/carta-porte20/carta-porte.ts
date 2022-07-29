import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { FiguraTransporte } from './figura-transporte';
import { Mercancias } from './mercancias';
import { Ubicaciones } from './ubicaciones';

export class CartaPorte extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte20:CartaPorte', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return ['cartaporte20:Ubicaciones', 'cartaporte20:Mercancias', 'cartaporte20:FiguraTransporte'];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:cartaporte20': 'http://www.sat.gob.mx/CartaPorte20',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/CartaPorte20 http://www.sat.gob.mx/sitio_internet/cfd/CartaPorte/CartaPorte20.xsd',
            'Version': '2.0'
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
