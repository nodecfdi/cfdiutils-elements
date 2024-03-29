import { InformacionAduanera } from '~/cfdi33';
import { UseInformacionAduanera } from './use-informacion-aduanera';

describe('Elements.Cfdi33.Trait.InformacionAduaneraTrait', () => {
    test('add informacion aduanera', () => {
        // No child's
        const node = new UseInformacionAduanera('X');
        expect(node.count()).toBe(0);

        // Add first child
        const first = node.addInformacionAduanera({
            name: 'first'
        });
        expect(first).toBeInstanceOf(InformacionAduanera);
        expect(first.attributes().get('name')).toBe('first');
        expect(node.count()).toBe(1);

        // Add second child
        node.addInformacionAduanera();
        expect(node.count()).toBe(2);
    });

    test('multi informacion aduanera', () => {
        const node = new UseInformacionAduanera('X');
        expect(node.count()).toBe(0);
        const multiReturn = node.multiInformacionAduanera({ id: 'first' }, { id: 'second' });
        expect(node).toStrictEqual(multiReturn);
        expect(node.count()).toBe(2);
        expect(node.searchAttribute('cfdi:InformacionAduanera', 'id')).toBe('first');
    });
});
