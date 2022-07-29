import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { ImpuestosTrasladadosdelServicio } from './impuestos-trasladados-del-servicio';
import { ContribucionGubernamental } from './contribucion-gubernamental';
import { ComisionDelServicio } from './comision-del-servicio';

export class DetallesDelServicio extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('plataformasTecnologicas:DetallesDelServicio', attributes, children);
    }

    public override getChildrenOrder(): string[] {
        return [
            'plataformasTecnologicas:ImpuestosTrasladadosdelServicio',
            'plataformasTecnologicas:ContribucionGubernamental',
            'plataformasTecnologicas:ComisionDelServicio'
        ];
    }

    public getImpuestosTrasladadosdelServicio(): ImpuestosTrasladadosdelServicio {
        return this.helperGetOrAdd(new ImpuestosTrasladadosdelServicio());
    }

    public addImpuestosTrasladadosdelServicio(
        attributes: Record<string, unknown> = {}
    ): ImpuestosTrasladadosdelServicio {
        const subject = this.getImpuestosTrasladadosdelServicio();
        subject.addAttributes(attributes);

        return subject;
    }

    public getContribucionGubernamental(): ContribucionGubernamental {
        return this.helperGetOrAdd(new ContribucionGubernamental());
    }

    public addContribucionGubernamental(attributes: Record<string, unknown> = {}): ContribucionGubernamental {
        const subject = this.getContribucionGubernamental();
        subject.addAttributes(attributes);

        return subject;
    }

    public getComisionDelServicio(): ComisionDelServicio {
        return this.helperGetOrAdd(new ComisionDelServicio());
    }

    public addComisionDelServicio(attributes: Record<string, unknown> = {}): ComisionDelServicio {
        const subject = this.getComisionDelServicio();
        subject.addAttributes(attributes);

        return subject;
    }
}
