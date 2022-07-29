import { Domicilio } from '~/cce11/domicilio';
import { UseDomicilio } from './use-domicilio';

describe('Elements.CCE11.Traits.DomicilioTrait', () => {
    let element: UseDomicilio;

    beforeEach(() => {
        element = new UseDomicilio();
    });

    test('domicilio', () => {
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
