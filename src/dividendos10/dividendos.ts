import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { DividOUtil } from './divid-o-util';
import { Remanente } from './remanente';

export class Dividendos extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('dividendos:Dividendos', attributes, children);
    }

    public getDividOUtil(): DividOUtil {
        return this.helperGetOrAdd(new DividOUtil());
    }

    public addDividOUtil(attributes: Record<string, unknown> = {}): DividOUtil {
        const subject = this.getDividOUtil();
        subject.addAttributes(attributes);

        return subject;
    }

    public getRemanente(): Remanente {
        return this.helperGetOrAdd(new Remanente());
    }

    public addRemanente(attributes: Record<string, unknown> = {}): Remanente {
        const subject = this.getRemanente();
        subject.addAttributes(attributes);

        return subject;
    }

    public override getChildrenOrder(): string[] {
        return ['dividendos:DividOUtil', 'dividendos:Remanente'];
    }

    public override getFixedAttributes(): Record<string, string> {
        return {
            'xmlns:dividendos': 'http://www.sat.gob.mx/esquemas/retencionpago/1/dividendos',
            'xsi:schemaLocation':
                'http://www.sat.gob.mx/esquemas/retencionpago/1/dividendos http://www.sat.gob.mx/esquemas/retencionpago/1/dividendos/dividendos.xsd',
            'Version': '1.0'
        };
    }
}
