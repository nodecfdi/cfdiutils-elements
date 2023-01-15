import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { Beneficiario } from './beneficiario';
import { NoBeneficiario } from './no-beneficiario';

export class Pagosaextranjeros extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('pagosaextranjeros:Pagosaextranjeros', attributes, children);
    }

    public getNoBeneficiario(): NoBeneficiario {
        return this.helperGetOrAdd(new NoBeneficiario());
    }

    public addNoBeneficiario(attributes: Record<string, unknown> = {}): NoBeneficiario {
        const subject = this.getNoBeneficiario();
        subject.addAttributes(attributes);

        return subject;
    }

    public getBeneficiario(): Beneficiario {
        return this.helperGetOrAdd(new Beneficiario());
    }

    public addBeneficiario(attributes: Record<string, unknown> = {}): Beneficiario {
        const subject = this.getBeneficiario();
        subject.addAttributes(attributes);

        return subject;
    }

    public override getChildrenOrder(): string[] {
        return ['pagosaextranjeros:NoBeneficiario', 'pagosaextranjeros:Beneficiario'];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:pagosaextranjeros': 'http://www.sat.gob.mx/esquemas/retencionpago/1/pagosaextranjeros',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/1/pagosaextranjeros http://www.sat.gob.mx/esquemas/retencionpago/1/pagosaextranjeros/pagosaextranjeros.xsd',
            'Version': '1.0'
        };
    }
}
