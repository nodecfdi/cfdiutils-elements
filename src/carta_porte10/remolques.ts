import { AbstractElement } from '../common/abstract_element';
import { CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { Remolque } from './remolque';

export class Remolques extends AbstractElement {
    constructor(attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super('cartaporte:Remolques', attributes, children);
    }

    public addRemolque(attributes: Record<string, unknown> = {}): Remolque {
        const subject = new Remolque(attributes);
        this.addChild(subject);
        return subject;
    }

    public multiRemolque(elementAttributes: Record<string, unknown>[] = []): Remolques {
        elementAttributes.forEach((attributes) => {
            this.addRemolque(attributes);
        });
        return this;
    }
}
