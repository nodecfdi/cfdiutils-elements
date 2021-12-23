import { Domicilio } from '../../../src/cce11';
import { Destinatario } from '../../../src/cce11';

describe('Elements.CCE11.Destinatario', () => {
    let element: Destinatario;

    beforeEach(() => {
        element = new Destinatario();
    });

    test('get element name', () => {
        expect(element.name()).toBe('cce11:Destinatario');
        expect(element.getElementName()).toBe('cce11:Destinatario');
    });

    test('add domicilio', () => {
        expect(element.count()).toBe(0);
 
        const first = element.addDomicilio({id: 'first'});
        expect(first).toBeInstanceOf(Domicilio);
        expect(first.attributes().get('id')).toBe('first');
        expect(element.count()).toBe(1);

        const second = element.addDomicilio({id: 'second'});
        expect(second.attributes().get('id')).toBe('second');
        expect(element.count()).toBe(2);
        expect(first).not.toBe(second);
     });
});
