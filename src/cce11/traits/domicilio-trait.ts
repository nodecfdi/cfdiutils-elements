import { type ElementInterface } from '../../common/element-interface';
import { Domicilio } from '../domicilio';

export abstract class DomicilioTrait {
    public getDomicilio(): Domicilio {
        return this.helperGetOrAdd(new Domicilio());
    }

    public addDomicilio(attributes: Record<string, unknown> = {}): Domicilio {
        const subject = this.getDomicilio();
        subject.addAttributes(attributes);

        return subject;
    }

    protected abstract helperGetOrAdd(element: ElementInterface): Domicilio;
}
