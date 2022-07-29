# `@nodecfdi/cfdiutils-elements`

[![Source Code][badge-source]][source]
[![Npm Node Version Support][badge-node-version]][node-version]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Build Status][badge-build]][build]
[![Reliability][badge-reliability]][reliability]
[![Maintainability][badge-maintainability]][maintainability]
[![Code Coverage][badge-coverage]][coverage]
[![Violations][badge-violations]][violations]
[![Total Downloads][badge-downloads]][downloads]

> Sub-library of nodecfdi/cfdiutils for cfdi struct data

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Acerca de `@nodecfdi/cfdiutils-elements`

Librería para contener las estructuras de datos que componen un cfdi. Inspirada por la versión de
php <https://github.com/eclipxe13/CfdiUtils>

## Instalación

### NPM

```shell
npm i @nodecfdi/cfdiutils-elements --save
```

### Yarn

```shell
yarn add @nodecfdi/cfdiutils-elements --save
```

### PNPM

```shell
pnpm add @nodecfdi/cfdiutils-elements
```

## Estructura de datos Elements

La librería `@nodecfdi/cfdiutils-elements` es una especialización de `CNodes`.

Se trata solo de una estructura de datos, no caigas en la tentación de insertar lógica más allá de la propia estructura.

Todo *elemento* es un *nodo*, entonces todos los métodos y propiedades de `CNodeInterface` están presentes.

Entonces, para escribir atributos se recomienda usar la forma de arreglo, por ejemplo:
`comprobante.attributes().set('Descuento','1234.56')` para establecer el atributo "Descuento" a "1234.56".

Cualquier elemento debe cumplir con la interfaz `ElementInterface`
que es una extensión de `CNodeInterface` y agrega:

- `getElementName(): string`: Devuelve el nombre del elemento, como `cfdi:Complemento`
- `getFixedAttributes(): array`: Establece la lista de nodos predefinidos al crearse (útil para Complementos y
  Comprobante)
- `getChildrenOrder(): array`: establece el orden de los nodos hijos

En última instancia, un *elemento* (`ElementInterface`) es un *nodo* (`CNodeInterface`)
por lo que puedes utilizar a bajo nivel todo el poder de los nodos para trabajar con esta estructura de datos.

## Nomenclatura genérica

Los elementos deberían seguir esta nomenclatura genérica para nombrar sus métodos.

### Prefijo `get*`

La nomenclatura con el prefijo `get*` se escribe en la forma `ElementoPadre.getElementoHijo(): ElementoHijo`
y se espera devolver una única instancia de `ElementoHijo`. Si la instancia no existe entonces se crea.

### Prefijo `add*`

La nomenclatura con el prefijo `add*` se escribe la forma `ElementoPadre.addElementoHijo(attributes): ElementoHijo`
y se espera crear una instancia de `ElementoHijo` con los atributos datos, agregarla a los hijos de `ElementoPadre`
y la instancia de `ElementoHijo` creada.

Cuando se utiliza `add*` hay dos comportamientos esperados:

- Si solo debe haber un hijo de un determinado tipo, entonces no se crea uno nuevo y se ocupa el existente.
- Si puede haber más de un hijo de un determinado tipo, entonces se crea uno nuevo y se agrega a los hijos.

Por eso, como solo debe haber un nodo emisor dentro de un comprobante,
entonces `Comprobante.addEmisor({'RegimenFiscal' : '601'})` tiene este comportamiento:

- Se obtiene el elemento `Emisor`, si no existe se crea uno vacío.
- Se escriben los atributos pasados al elemento obtenido.
- Se devuelve el elemento.

Por el contrario, como puede haber varios Cfdi Relacionados, entonces
`CfdiRelacionados.addCfdiRelacionado({ 'UUID' : uuid })` tiene este comportamiento:

- Se crea un elemento de tipo `CfdiRelacionado` con los atributos pasados.
- Se agrega el elemento recién creado a los hijos de `CfdiRelacionados`.
- Se devuelve el elemento creado.

Existe un caso donde lo que se espera entregar como atributo al prefijo `add*` es en realidad un hijo. Esto sucede
en `addComplemento` y `addAddenda`.

### Prefijo `multi*`

La nomenclatura con el prefijo `multi*` se escribe la
forma `ElementoPadre.multiElementoHijo(...attributes): ElementoPadre`
y se espera crear múltiples una instancia de `ElementoHijo` con los atributos datos, agregarla a los hijos
de `ElementoPadre`
y la instancia de `ElementoPadre` creada.

Otra forma de decirlo: es como los métodos `add*` pero se le pueden mandar varios arreglos de atributos y se creará un
elemento para cada parámetro enviado.

Por lo anterior, `CfdiRelacionados.multiCfdiRelacionado( {'UUID' : uuid1}, {'UUID' : uuid2})` agregará dos hijos y
devolverá la misma instancia del objeto llamado.

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

Adicionalmente, esta librería pertenece a la comunidad [OcelotlStudio](https://ocelotlstudio.com), así que puedes usar los mismos canales de comunicación para obtener ayuda de algún miembro de la comunidad.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/cfdiutils-elements` library is copyright © [NodeCfdi](https://github.com/nodecfdi) - [OcelotlStudio](https://ocelotlstudio.com) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/cfdiutils-elements/blob/main/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/cfdiutils-elements/blob/main/CHANGELOG.md

[source]: https://github.com/nodecfdi/cfdiutils-elements
[node-version]: https://www.npmjs.com/package/@nodecfdi/cfdiutils-elements
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/cfdiutils-elements
[license]: https://github.com/nodecfdi/cfdiutils-elements/blob/main/LICENSE
[build]: https://github.com/nodecfdi/cfdiutils-elements/actions/workflows/build.yml?query=branch:main
[reliability]:https://sonarcloud.io/component_measures?id=nodecfdi_cfdiutils-elements&metric=Reliability
[maintainability]: https://sonarcloud.io/component_measures?id=nodecfdi_cfdiutils-elements&metric=Maintainability
[coverage]: https://sonarcloud.io/component_measures?id=nodecfdi_cfdiutils-elements&metric=Coverage
[violations]: https://sonarcloud.io/project/issues?id=nodecfdi_cfdiutils-elements&resolved=false
[downloads]: https://www.npmjs.com/package/@nodecfdi/cfdiutils-elements

[badge-source]: https://img.shields.io/badge/source-nodecfdi/cfdiutils--elements-blue.svg?logo=github
[badge-node-version]: https://img.shields.io/node/v/@nodecfdi/cfdiutils-elements.svg?logo=nodedotjs
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/cfdiutils-elements.svg?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/cfdiutils-elements.svg?logo=open-source-initiative
[badge-build]: https://img.shields.io/github/workflow/status/nodecfdi/cfdiutils-elements/build/main?logo=github-actions
[badge-reliability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_cfdiutils-elements&metric=reliability_rating
[badge-maintainability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_cfdiutils-elements&metric=sqale_rating
[badge-coverage]: https://img.shields.io/sonar/coverage/nodecfdi_cfdiutils-elements/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-violations]: https://img.shields.io/sonar/violations/nodecfdi_cfdiutils-elements/main?format=long&logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/cfdiutils-elements.svg?logo=npm
