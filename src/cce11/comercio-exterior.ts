import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Emisor } from './emisor';
import { Receptor } from './receptor';
import { Propietario } from './propietario';
import { Destinatario } from './destinatario';
import { Mercancias } from './mercancias';
import { Mercancia } from './mercancia';

export class ComercioExterior extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cce11:ComercioExterior', attributes, children);
    }

    public getEmisor(): Emisor {
        return this.helperGetOrAdd(new Emisor());
    }

    public addEmisor(attributes: Record<string, unknown> = {}): Emisor {
        const subject = this.getEmisor();
        subject.addAttributes(attributes);

        return subject;
    }

    public getReceptor(): Receptor {
        return this.helperGetOrAdd(new Receptor());
    }

    public addReceptor(attributes: Record<string, unknown> = {}): Receptor {
        const subject = this.getReceptor();
        subject.addAttributes(attributes);

        return subject;
    }

    public addPropietario(attributes: Record<string, unknown> = {}): Propietario {
        const subject = new Propietario(attributes);
        this.addChild(subject);

        return subject;
    }

    public addDestinatario(attributes: Record<string, unknown> = {}): Destinatario {
        const subject = new Destinatario(attributes);
        this.addChild(subject);

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

    public addMercancia(attributes: Record<string, unknown> = {}): Mercancia {
        return this.getMercancias().addMercancia(attributes);
    }

    public override getChildrenOrder(): string[] {
        return ['cce11:Emisor', 'cce11:Propietario', 'cce11:Receptor', 'cce11:Destinatario', 'cce11:Mercancias'];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:cce11': 'http://www.sat.gob.mx/ComercioExterior11',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/ComercioExterior11 http://www.sat.gob.mx/sitio_internet/cfd/ComercioExterior11/ComercioExterior11.xsd',
            'Version': '1.1'
        };
    }
}
