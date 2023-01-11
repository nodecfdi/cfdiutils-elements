import { CNode, type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { type ElementInterface } from './element-interface';

export abstract class AbstractElement extends CNode implements ElementInterface {
    constructor(name: string, attributes: Record<string, unknown> = {}, children: CNodeInterface[] = []) {
        super(name, {}, children);
        this.children().setOrder(this.getChildrenOrder());
        this.attributes().importRecord({
            ...this.getFixedAttributes(),
            ...attributes
        });
    }

    public getChildrenOrder(): string[] {
        return [];
    }

    public getElementName(): string {
        return this.name();
    }

    public getFixedAttributes(): Record<string, string> {
        return {};
    }

    protected helperGetOrAdd<T extends AbstractElement>(element: T): T {
        const retrieved = this.searchNode(element.getElementName());
        if (retrieved) {
            return retrieved as T;
        }

        this.addChild(element);

        return element;
    }
}
