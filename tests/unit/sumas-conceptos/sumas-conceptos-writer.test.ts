import { CNode } from '@nodecfdi/cfdiutils-common';
import { type Comprobante } from '~/cfdi33';
import { SumasConceptos } from '~/common/sumas-conceptos/sumas-conceptos';
import { SumasConceptosWriter } from '~/common/sumas-conceptos/sumas-conceptos-writer';

describe('SumasConceptosWriter', () => {
    test('constructor with comprobante different to Comprobante33 and different Comprobante40', () => {
        const comprobante = new CNode('cfdi2:Comprobante');
        const sumasConceptos = new SumasConceptos(comprobante);
        const t = (): SumasConceptosWriter =>
            new SumasConceptosWriter(comprobante as unknown as Comprobante, sumasConceptos);
        expect(t).toThrow(TypeError);
        expect(t).toThrow('The argument comprobante must be a Comprobante (CFDI 3.3 or CFDI 4.0) element');
    });
});
