import { Emisor } from '~/retenciones20';

describe('Elements.Retenciones20.Emisor', () => {
    test('emisor', () => {
        const element = new Emisor();
        expect(element.name()).toBe('retenciones:Emisor');
        expect(element.getElementName()).toBe('retenciones:Emisor');
    });
});
