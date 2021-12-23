import '../../../matchers/to_element_has_child';
import { Domicilio } from '../../../../src/cce11/domicilio';
import { UseDomicilio } from './use_domicilio';

describe('Elements.CCE11.Traits.DomicilioTrait', () => {
    let element: UseDomicilio;

    beforeEach(() => {
        element = new UseDomicilio();
    });

    test('domicilio', () => {
        expect(element).toElementHasChildSingle(Domicilio);
    });
});
