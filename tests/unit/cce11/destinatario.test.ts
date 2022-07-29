import { Domicilio, Destinatario } from '~/cce11';

describe('Elements.CCE11.Destinatario', () => {
    test('destinatario', () => {
        const element = new Destinatario();
        expect(element.name()).toBe('cce11:Destinatario');
        expect(element.getElementName()).toBe('cce11:Destinatario');

        expect(element).toElementHasChildMultiple(Domicilio);
    });
});
