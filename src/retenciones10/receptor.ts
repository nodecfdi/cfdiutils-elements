import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract_element';
import { Extranjero } from './extranjero';
import { Nacional } from './nacional';

export class Receptor extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('retenciones:Receptor', attributes, children);
    }

    public getNacional(): Nacional {
        const nacional = this.helperGetOrAdd(new Nacional());
        this.children().removeAll();
        this.addChild(nacional);
        this.attributes().set('Nacionalidad', 'Nacional');
        return nacional;
    }

    public addNacional(attributes: Record<string, unknown> = {}): Nacional {
        const nacional = this.getNacional();
        nacional.addAttributes(attributes);
        return nacional;
    }

    public getExtranjero(): Extranjero {
        const extranjero = this.helperGetOrAdd(new Extranjero());
        this.children().removeAll();
        this.addChild(extranjero);
        this.attributes().set('Nacionalidad', 'Extranjero');
        return extranjero;
    }

    public addExtranjero(attributes: Record<string, unknown> = {}): Extranjero {
        const extranjero = this.getExtranjero();
        extranjero.addAttributes(attributes);
        return extranjero;
    }
}
