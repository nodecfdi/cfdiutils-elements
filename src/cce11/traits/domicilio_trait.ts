import { ElementInterface } from '../../common/element_interface';
import { Domicilio } from '../domicilio';

export abstract class DomicilioTrait {
    protected abstract helperGetOrAdd(element: ElementInterface): Domicilio;

    public getDomicilio(): Domicilio {
        return this.helperGetOrAdd(new Domicilio);
    }

    public addDomicilio(attributes: Record<string, unknown>): Domicilio {
        const subject = this.getDomicilio();
        subject.addAttributes(attributes);
        return subject;
    }
}
