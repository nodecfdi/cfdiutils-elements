import { SumasConceptos } from '../../common/sumas_conceptos/sumas_conceptos';
import { Comprobante as Comprobante33 } from '../comprobante';
import { SumasConceptosWriter as BaseSumasConceptosWriter } from '../../common/sumas_conceptos/sumas_conceptos_writer';
import { Comprobante as Comprobante40 } from '../../cfdi40/comprobante';

export class SumasConceptosWriter extends BaseSumasConceptosWriter {
    constructor(comprobante: Comprobante40, sumas: SumasConceptos, precision = 6) {
        super(comprobante, sumas, precision);
    }

    public getComprobante(): Comprobante33 | Comprobante40 {
        const comprobante = super.getComprobante();
        if (!(comprobante instanceof Comprobante40)) {
            const type = typeof comprobante;
            const rigthType = typeof Comprobante40;
            throw new Error(`Property comprobante ${type} is not ${rigthType}`);
        }
        return comprobante;
    }
}
