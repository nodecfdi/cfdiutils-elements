import {
    ACuentaTerceros,
    ComplementoConcepto,
    Concepto,
    ConceptoImpuestos,
    CuentaPredial,
    InformacionAduanera,
    Parte
} from '~/cfdi40';

describe('Elements.CFDI40.Concepto', () => {
    test('concepto', () => {
        const element = new Concepto();
        expect(element.getElementName()).toBe('cfdi:Concepto');
        expect(element.getChildrenOrder()).toStrictEqual([
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte'
        ]);
        expect(element.children().getOrder()).toStrictEqual([
            'cfdi:Impuestos',
            'cfdi:ACuentaTerceros',
            'cfdi:InformacionAduanera',
            'cfdi:CuentaPredial',
            'cfdi:ComplementoConcepto',
            'cfdi:Parte'
        ]);
        expect(element).toElementHasChildSingle(ConceptoImpuestos, 'getImpuestos', 'addImpuestos');
        expect(element).toElementHasChildSingle(ACuentaTerceros);
        expect(element).toElementHasChildMultiple(InformacionAduanera);
        expect(element).toElementHasChildMultiple(CuentaPredial);
        expect(element).toElementHasChildSingleAddChild(ComplementoConcepto);
        expect(element).toElementHasChildMultiple(Parte);
    });
});
