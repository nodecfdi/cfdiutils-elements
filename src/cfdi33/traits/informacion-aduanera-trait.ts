import { type CNodeInterface } from '@nodecfdi/cfdiutils-common';
import { InformacionAduanera } from '../informacion-aduanera';

export abstract class InformacionAduaneraTrait {
    public addInformacionAduanera(attributes: Record<string, unknown> = {}): InformacionAduanera {
        const informacionAduanera = new InformacionAduanera(attributes);
        this.addChild(informacionAduanera);

        return informacionAduanera;
    }

    public multiInformacionAduanera(...elementAttributes: Array<Record<string, unknown>>): this {
        for (const attributes of elementAttributes) {
            this.addInformacionAduanera(attributes);
        }

        return this;
    }

    public abstract addChild(node: CNodeInterface): CNodeInterface;
}
