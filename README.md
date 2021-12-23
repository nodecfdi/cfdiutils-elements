# @nodecfdi/cfdiutils-elements

[![Source Code][badge-source]][source]
[![Software License][badge-license]][license]
[![Latest Version][badge-release]][release]
[![Discord][badge-discord]][discord]

[source]: https://github.com/nodecfdi/cfdiutils-elements

[badge-source]: https://img.shields.io/badge/source-nodecfdi%2Fcfdiutils--elements-blue?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMTIgMTIgNDAgNDAiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiwxMy40Yy0xMC41LDAtMTksOC41LTE5LDE5YzAsOC40LDUuNSwxNS41LDEzLDE4YzEsMC4yLDEuMy0wLjQsMS4zLTAuOWMwLTAuNSwwLTEuNywwLTMuMiBjLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42IGMwLjItMS4yLDAuNy0yLjEsMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEsMC43LTMuNywyLTUuMWMtMC4yLTAuNS0wLjgtMi40LDAuMi01YzAsMCwxLjYtMC41LDUuMiwyIGMxLjUtMC40LDMuMS0wLjcsNC44LTAuN2MxLjYsMCwzLjMsMC4yLDQuNywwLjdjMy42LTIuNCw1LjItMiw1LjItMmMxLDIuNiwwLjQsNC42LDAuMiw1YzEuMiwxLjMsMiwzLDIsNS4xYzAsNy4zLTQuNSw4LjktOC43LDkuNCBjMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz48L3N2Zz4%3D

[license]: https://github.com/nodecfdi/cfdiutils-elements/blob/main/LICENSE

[badge-license]: https://img.shields.io/github/license/nodecfdi/cfdiutils-elements?logo=open-source-initiative&style=flat-square

[badge-release]: https://img.shields.io/npm/v/@nodecfdi/cfdiutils-elements

[release]: https://www.npmjs.com/package/@nodecfdi/cfdiutils-elements

[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord&style=flat-square

[discord]: https://discord.gg/aFGYXvX

> Sub-library of @nodecfdi/cfdiutils for cfdi struct data

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Acerca de @nodecfdi/cfdiutils-elements

Librería para contener las estructuras de datos que componen un cfdi. Inspirada por la versión de
php https://github.com/eclipxe13/CfdiUtils

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
