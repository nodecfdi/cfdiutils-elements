import { type SumasConceptos } from '../../common/sumas-conceptos/sumas-conceptos';
import { SumasConceptosWriter as BaseSumasConceptosWriter } from '../../common/sumas-conceptos/sumas-conceptos-writer';
import { Comprobante as Comprobante40 } from '../../cfdi40/comprobante';

export class SumasConceptosWriter extends BaseSumasConceptosWriter {
    constructor(comprobante: Comprobante40, sumas: SumasConceptos, precision = 6) {
        super(comprobante, sumas, precision);
    }

    public override getComprobante(): Comprobante40 {
        const comprobante = super.getComprobante();
        if (!(comprobante instanceof Comprobante40)) {
            throw new TypeError('Property comprobante is not instance of Comprobante40');
        }

        return comprobante;
    }
}
