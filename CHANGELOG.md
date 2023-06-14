# @nodecfdi/cfdiutils-elements ChangeLog

## 1.4.2

### Patch Changes - Fixed SumasConceptos with Exentos

- Add exentos property to SumasConceptos
- Add writeExentos to SumasConceptosWriter
- Test CFDI3.3 and CFDI4.0 behavior on when to write or not exentos node
- Update dependencies
- Change theme for docs

## 1.4.1

### Minor Changes - Change export for build process using bundlers

- Resolve exports for usage with bundlers like a vite|rollup
- Update dependencies

## 1.4.0

### Minor Changes - Change build process

- Fixes various problems outside perfect way data.
- Update dependencies.
- Move from microbundle to rollup for generation of library.
- Move from jest to vitest for increment code coverage with testing on browser and node.
- Update rules for eslint more strict.

## 1.3.1

- fixed problem with traits on multiple inheritance lose children order
- Update dependencies
- Update test with double check on order of children nodes

## 1.3.0

### DOM Agnostic

- Added support to DOM agnostic
- Update dependency @nodecfdi/cfdiutils-common for support to DOM agnostic

### CI

- Update workflow for use pnpm and better test coverage
- Added Sonarcloud for better continuous code quality

### Build

- Replace rollup bundle for microbundle for generation of library

## 1.2.0

- Added `Elements\PlataformasTecnologicas10` Elements to work with "Complemento Servicios de Plataformas Tecnológicas"
- Added `Elements\Retenciones20` Elements to work with "Retenciones e información de pagos 2.0"
- Minor updates

## 1.1.2

- Update dependencies (target last version of @nodecfdi/cfdiutils-common)
- Update scripts on package.json for use on CI github

## 1.1.1

- Minor refactoring code for last version of @nodecfdi/cfdiutils-common
- updated dependencies

## 1.1.0

- Added `Elements\Pagos20` Elements to work with "Complemento para recepción de Pagos 2.0".
- Update license happy new year
- Updated dependencies
- Minor fixes related to eslint and prettier

## 1.0.1

- Added CFDI4.0 Compatibility
- Elements CFDI40 were created.
- Add minimal documentation to elements cfdi40

## 1.0.0

- Refactor on src files, remove unnecessary method getElementName, inherit on AbstractElement
- Added missing elements CartaPorte10, Cce11

## 0.1.0

- First release
- Support to browser and node environments
