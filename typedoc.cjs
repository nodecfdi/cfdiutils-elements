module.exports = {
    entryPoints: ['src'],
    entryPointStrategy: 'Expand',
    out: 'docs',
    plugin: ['typedoc-theme-hierarchy'],
    theme: 'hierarchy',
    tsconfig: './tsconfig.json',
    name: '@nodecfdi/cfdiutils-elements',
    exclude: ['./src/globals.d.ts', './src/__tests__']
};
