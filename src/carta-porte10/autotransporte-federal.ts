import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { AbstractElement } from '../common/abstract-element';
import { IdentificacionVehicular } from './identificacion-vehicular';
import { Remolques } from './remolques';

export class AutotransporteFederal extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:AutotransporteFederal', attributes, children);
    }

    public getIdentificacionVehicular(): IdentificacionVehicular {
        return this.helperGetOrAdd(new IdentificacionVehicular());
    }

    public addIdentificacionVehicular(attributes: Record<string, unknown> = {}): IdentificacionVehicular {
        const subject = this.getIdentificacionVehicular();
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
