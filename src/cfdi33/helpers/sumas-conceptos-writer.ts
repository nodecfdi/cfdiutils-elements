import { type SumasConceptos } from '../../common/sumas-conceptos/sumas-conceptos';
import { Comprobante as Comprobante33 } from '../comprobante';
import { SumasConceptosWriter as BaseSumasConceptosWriter } from '../../common/sumas-conceptos/sumas-conceptos-writer';

export class SumasConceptosWriter extends BaseSumasConceptosWriter {
    constructor(comprobante: Comprobante33, sumas: SumasConceptos, precision = 6) {
        super(comprobante, sumas, precision);
    }

    public override getComprobante(): Comprobante33 {
        const comprobante = super.getComprobante();
        if (!(comprobante instanceof Comprobante33)) {
            throw new TypeError('Property comprobante is not instance of Comprobante33');
        }

        return comprobante;
    }
}
