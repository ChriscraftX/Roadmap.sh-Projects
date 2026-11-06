# Bitácora de Desarrollo

Crear este repositorio para empezar a construir todos los proyectos de [roadmap.sh][1] tiene unas finalidades clave: **Aprender**, **Progresar**, **Seguir una estructura paso a paso** y **Mantener la constancia**.

Creí que era buena idea empezar a crear archivos `DEVLOG.md` para profundizar más sobre los proyectos. Este en particular no documenta un proyecto concreto, sino las **decisiones que aplican a todos**: contexto de estudio, objetivos didácticos, decisiones globales y su evolución a lo largo del tiempo. Las decisiones propias de cada proyecto viven en el `DEVLOG.md` de ese proyecto.

## 🎯 Contexto y Objetivo

- **Contexto**: Luego de algunos cursos, lecturas de guías, rutas de aprendizaje y proyectos ambiciosos inconclusos, vi necesario empezar a poner en práctica lo que realmente sé y reforzar de forma progresiva todo lo que me falta por conocer.
- **Propósito**: Decidí crear este proyecto para dar mis primeros pasos firmes dentro del desarrollo web, aprendiendo conceptos poco a poco, donde cada proyecto completado sea un éxito que sirva de motivación para iniciar el siguiente acompañado de lo aprendido, creando proyectos reales del mundo web y acercándome al desarrollo colaborativo para conocer de cerca las bases de la ingeniería de software. En pocas palabras, **Aprender y practicar con proyectos reales, usando herramientas reales y metodologías colaborativas**.
- **Alcance**: Este repositorio es solo para proyectos de [roadmap.sh][1]; cualquier práctica fuera de eso va en otro repositorio. Es un trabajo individual, pero se configura como si fuera colaborativo, pensando también en mi yo futuro y en cualquiera que quiera usar mi proceso de guía.

## 📑 Guía de principios

1. **Aprendizaje práctico**: El criterio más importante es aprender practicando. Si una decisión entorpece o frena este proceso, debe considerarse seriamente su rechazo.
2. **Buenos hábitos**: Construir un buen sistema depende de adaptar con criterio las buenas prácticas que se internalizaron durante el proceso de aprendizaje.
3. **Productividad**: Evitar caer en la sobreingeniería y las cargas innecesarias. Moderar el tiempo que se le dedica a algo es crucial para priorizar un aprendizaje activo (**Aprendizaje práctico**) y no un aprendizaje pasivo disfrazado de productividad.

## 🖋️ Decisiones

Decisiones tomadas a lo largo del desarrollo y su evaluación.

### Auditorías de decisiones

Las **auditorías de decisiones** son la práctica de dejar por escrito las decisiones tomadas, junto con los criterios con los que se tomaron en su momento. En vez de dar por sentado que una decisión 'está bien', se documenta el contexto, las alternativas y el motivo, de modo que el propio autor (o cualquier otra persona) pueda entenderla después y, si hace falta, re-evaluarla con la información que hoy no se tenía.

Fuera de este repositorio la práctica se conoce como _Architecture Decision Records_ (ADR), propuesta por Michael Nygard en [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions). Aquí se usa un formato propio, con las alternativas explícitas.

#### Problema

Una decisión sin contexto se vuelve incuestionable: con el tiempo se da por sentada, y ni el propio autor puede re-evaluarla con información nueva. Además, cada vez que la práctica contradice una norma, la misma discusión se repite desde cero.

#### Ventajas

- La decisión se entiende después, también por otra persona.
- Puede mantenerse, ajustarse o revertirse con criterio.
- No se repite la misma discusión.
- Obliga a escribir costos y alternativas, no solo la elección.
- Si la práctica contradice una norma, queda a la vista en vez de tolerarse en silencio.

#### Desventajas

- Escribir y mantener cada decisión cuesta tiempo y puede convertirse en el trabajo principal en vez del aprendizaje.
- Exige mantener el documento sincronizado con la práctica.

#### Alternativas

Teniendo en cuenta que el objetivo es poder entender y re-evaluar una decisión después (**Buenos hábitos**) sin que documentar se vuelva la carga principal (**Productividad**), se consideró:

- **No documentar (solo código y commits)**: El historial de Git como único registro.
  - **Ventaja**: Cero esfuerzo adicional.
  - **Desventaja**: Los commits registran qué cambió, no por qué se descartó lo demás.
  - **Descarte**: Deja las decisiones sin contexto, que es el problema que se quiere resolver.
- **Registro mínimo (solo qué se decidió y por qué)**: Sin alternativas ni costos.
  - **Ventaja**: Rápido de escribir.
  - **Desventaja**: Sin alternativas y costos no hay con qué re-evaluar la decisión después.
  - **Descarte**: Mantiene una razón sin su contraste, así que la decisión sigue siendo difícil de cuestionar.
- **Un registro inmutable por decisión (ADR clásico)**: Cada decisión es un archivo; si cambia, se crea otro y el anterior se marca como reemplazado.
  - **Ventaja**: Conserva intacto lo que se pensó en cada momento.
  - **Desventaja**: Para conocer el estado actual hay que leer varios registros.
  - **Descarte**: Este documento debe mostrar siempre el estado actual.

#### Decisión

Toda decisión de este documento sigue el mismo formato, sin importar su tamaño, con seis partes:

1. **Problema**: La necesidad y sus consecuencias (un párrafo).
2. **Ventajas**: El balance a favor de la opción elegida (lista corta, de al menos un elemento).
3. **Desventajas**: El balance en contra de la opción elegida (lista corta, de al menos un elemento).
4. **Alternativas**: Los criterios con los que se buscaron y, por cada una, su ventaja, su desventaja y el motivo del descarte.
5. **Decisión**: Qué se eligió, por qué y cómo se aplica.
6. **Historial**: Notas con fecha sobre cambios, revisiones o aclaraciones, de la más reciente a la más antigua.

Cuando una decisión cambia, la vigente se reescribe (el documento siempre muestra el estado actual), la opción anterior pasa a **Alternativas** con el motivo de su descarte y se agrega una nota al **Historial** de esa decisión. Si la práctica contradice una norma, no se tolera en silencio: se decide cuál cambia y se registra.

**Estructura obligatoria**:

```markdown
### {Título de la decisión}

{Introducción}

#### Problema

{Problema}

#### Ventajas

- {Ventaja}

#### Desventajas

- {Desventaja}

#### Alternativas

{Criterios}

- **{Alternativa}**: {Descripción}
  - **Ventaja**: {Ventaja}
  - **Desventaja**: {Desventaja}
  - **Descarte**: {Motivo}

#### Decisión

{Decisión}

#### Historial

- **YYYY-MM-DD - {Título}**: {Nota}
```

#### Historial

- **2026-10-31 - Ajuste de formato**: Se vació la plantilla para dejar solo la estructura, se numeraron las seis partes y se fijó el Historial de la más reciente a la más antigua.
- **2026-10-26 - Decisión**: Se decidió seguir la estructura (Problema, Ventajas, Desventajas, Alternativas, Decisión, Historial) para decisiones.

### Carta de presentación `README.md`

Un **README.md** es un archivo de texto plano estructurado con formato Markdown, ubicado normalmente en la raíz de un repositorio de código, que sirve como el manual de instrucciones principal y la carta de presentación de un proyecto de software.

#### Problema

Sin una presentación, quien llega al código (_incluso uno mismo en el futuro_) no sabe de qué trata el proyecto ni cómo usarlo, y tiene que deducirlo leyendo el código: **¿Qué es?** y **¿Cómo puede usarse?**. Esa es la función primordial de `README.md`.

#### Ventajas

- Se renderiza de forma automática en GitHub, sirviendo de presentación visual antes de navegar por el código.
- Se versiona junto al código: cambia en el mismo commit.
- Es el punto de entrada: desde él se enlazan el despliegue, la bitácora y los requisitos.
- Es una convención conocida: quien llega sabe dónde buscar.
- No depende de recordar cómo funciona cada proyecto.
- Practica la sintaxis **Markdown**.

#### Desventajas

- Exige supervisión constante para mantener el `README.md` actualizado.
- Sobrecarga en proyectos pequeños: exige más tiempo redactar la presentación que escribir el código.

#### Alternativas

Teniendo en cuenta que el objetivo es **presentar el proyecto** y que **se dé a entender por sí solo**, se consideró una alternativa que redujera las desventajas de **actualizaciones constantes** y **exigencias extras de tiempo** al finalizar un proyecto:

- **Sección About de GitHub**: Descripción corta del repositorio dentro de GitHub.
  - **Ventaja**: Se redacta una sola vez, de forma general, para responder _¿Qué es?_.
  - **Desventaja**: Enfoque estático y simplista, poco adecuado para explicar _¿Cómo se usa?_.
  - **Descarte**: No va con el código y se limita a una breve descripción; complementa al `README.md`, no compite con él.

#### Decisión

Se usa un `README.md` minimalista en el proyecto principal, con el índice de los proyectos desplegados, y un `README.md` por proyecto. Se elige porque GitHub lo muestra automáticamente y viaja con el código, a diferencia de About, que solo complementa.

Cada `README.md` de proyecto se crea desde la [plantilla](assets/templates/readme.md), que es la fuente de verdad del formato y reduce el costo de redactarlo. La plantilla se revisa cada vez que cambia una norma que la afecta.

#### Historial

- **2026-04-02 - Decisión**: Se decidió aplicar de forma progresiva los archivos `README.md`.

### Arquitectura de carpetas (monorrepo plano por categorías)

Una arquitectura de monorrepo plano agrupado por categoría (`frontend/`, `backend/`) donde cada proyecto de [roadmap.sh][1] vive en su propia carpeta con identificadores en `kebab-case` que siguen la referencia de enlace de un proyecto real de [Roadmap.sh Projects][2]. Un **monorrepo** es un solo repositorio que contiene varios proyectos; **plano** significa que solo hay un nivel de agrupación (la categoría), sin subniveles.

Ejemplo:

```txt
https://roadmap.sh/projects/single-page-cv --> frontend/single-page-cv
https://roadmap.sh/projects/task-tracker --> backend/task-tracker

Identificadores:
  single-page-cv
  task-tracker
```

#### Problema

Los múltiples proyectos de práctica necesitan una organización que los mantenga independientes entre sí, evite conflictos de nombres y facilite sus despliegues; sin ella, se mezclan, los nombres chocan y los despliegues se vuelven impredecibles.

#### Ventajas

- Facilita enlaces cortos y rutas limpias para el despliegue en GitHub Pages.
- Los nombres no requieren decisión: el identificador es el de roadmap.sh y la URL de despliegue se deduce del enlace del proyecto.
- Un único juego de herramientas de desarrollo (formato, linters, hooks) sirve para todos los proyectos.
- Un solo lugar y un solo despliegue muestran toda la colección.
- Menos fricción y clics para que otros desarrolladores encuentren el código.

#### Desventajas

- Una carpeta con muchos proyectos puede generar densidad visual o dificultar encontrar un proyecto.

#### Alternativas

Teniendo en cuenta que los proyectos deben mantenerse independientes, sin conflictos de nombres y con despliegues simples (**Productividad**), se consideraron variaciones sobre cómo agrupar las carpetas y cuántos repositorios usar:

- **Carpetas por niveles de dificultad**: Es una organización de carpetas donde los proyectos se organizan por nivel de dificultad (Ej. `frontend/nivel-1-html/single-page-cv`).
  - **Ventaja**: Reduce la concentración de proyectos en una sola carpeta.
  - **Desventaja**: Complica un poco la ruta de acceso al proyecto.
  - **Descarte**: La clasificación por dificultad puede volverse subjetiva fácilmente y la ruta dejaría de coincidir con el enlace del proyecto en roadmap.sh.
- **Un repositorio por proyecto**: Cada proyecto de [roadmap.sh][1] en su propio repositorio.
  - **Ventaja**: Independencia total, con historial y despliegue propios.
  - **Desventaja**: Hay que configurar y mantener las herramientas y el despliegue decenas de veces, y no existe un lugar único que muestre la colección.
  - **Descarte**: Multiplica el trabajo de configuración sin aportar aprendizaje; contradice el principio de **Productividad**.

#### Decisión

Se aplica una arquitectura de **monorrepo plano por categorías**, la más pragmática en colecciones de práctica que usan los identificadores de [Roadmap.sh Projects][2]. Evita la sobreingeniería, centraliza los proyectos en un solo lugar al alcance de todos y mantiene las URLs de despliegue simples y predecibles.

La categoría y el identificador de cada proyecto salen de su enlace en roadmap.sh, así que al crear uno nuevo no hay nada que decidir. Esta decisión se revisa cuando aparezca un tipo de proyecto nuevo.

**Vinculación**: El criterio de **independencia** es compartido con **Activos de proyectos**.

#### Historial

- **2026-11-01 - Vinculación de criterio**: Luego de una verificación se enlazó un criterio compartido con la decisión **Activos de proyectos**. Si alguno de los dos deja de darle importancia a la **independencia**, es muy probable que ambas decisiones requieran ajustes simultáneos.
- **2026-10-02 - Sin indicador de orden**: Se cambió el indicador numérico al principio de los nombres de proyectos de `01-single-page-cv` a simplemente `single-page-cv` para simplificar las rutas de acceso.
- **2026-04-02 - Decisión**: Se adoptó el monorrepo plano por categorías.

### Activos de proyectos `assets/`

Los **activos** son los archivos que acompañan al código pero no son código: imágenes, favicons, plantillas y otros recursos. El repositorio maneja dos tipos, con necesidades distintas:

- **Material del repositorio**.
- **Recursos de cada proyecto**.

#### Problema

Sin una regla clara se vuelve difícil saber qué se puede mover o borrar sin romper algo. Además, cuando dos proyectos necesitan el mismo archivo, hay que decidir si se **comparte** o se **duplica**.

#### Ventajas

- Un proyecto se puede copiar, mover, refactorizar o borrar sin romper a otro, y sigue funcionando por sí solo.
- No hay recursos "compartidos" que obliguen a rutas relativas frágiles (fuera del proyecto) ni a URLs absolutas entre proyectos.
- Cada proyecto tiene su propia identidad: recursos y estilos son los que corresponden a su contenido, algo necesario cuando los proyectos no tienen relación entre sí (un CV, un juego, una API).
- Duplicar casi no cuesta: Git guarda una sola vez los archivos idénticos, así que el repositorio apenas crece.
- En local se puede probar un cambio antes de desplegar sin recursos externos.

#### Desventajas

- Un cambio en un archivo duplicado debe repetirse a mano en cada copia.

#### Alternativas

Teniendo en cuenta que cada proyecto debe poder copiarse, moverse o borrarse por separado, y que el repositorio también tiene material propio, se consideraron variaciones sobre dónde viven los recursos:

- **Un único `assets/` global para todo**: Todos los recursos, incluidos los de las páginas, viven en la raíz.
  - **Ventaja**: Hay un solo lugar donde buscar.
  - **Desventaja**: Los proyectos dejan de ser independientes. Sus páginas dependen de rutas relativas fuera del proyecto, así que un proyecto copiado solo, sin el resto del repositorio, pierde sus recursos.
  - **Descarte**: Acopla a la raíz hasta los recursos propios de cada página.
- **Recursos compartidos en la raíz**: La raíz concentra el material del repositorio y lo que usan varios proyectos.
  - **Ventaja**: Identidad visual única y un solo lugar donde mantener cada archivo.
  - **Desventaja**: Cada proyecto debía enlazarlos con `../../assets/...` (copiado solo, se rompía) o con una URL absoluta (dependía de la red, del nombre del repositorio y del despliegue). Mover o renombrar un archivo compartido rompía en silencio las vistas previas de todos los proyectos.
  - **Descarte**: Contradice el objetivo de proyectos independientes; el costo de duplicar es menor que el de esa dependencia.
- **`assets/` solo dentro de cada proyecto, sin carpeta en la raíz**: No existe carpeta de activos en la raíz.
  - **Ventaja**: Independencia total entre proyectos.
  - **Desventaja**: Los recursos del repositorio no tienen un lugar natural y terminarían sueltos en la raíz.
  - **Descarte**: No resuelve el material del repositorio, que no pertenece a ningún proyecto.

#### Decisión

Se aplican **dos niveles con una regla única**: cada proyecto es dueño de todos sus recursos y nada se comparte entre proyectos. `assets/` en la raíz es solo para el material **del repositorio**. Dentro de cada proyecto, `assets/` contiene todo lo propio: favicons, imágenes, fuentes y la captura `preview.png`.

**Si dos proyectos necesitan el mismo archivo, se duplica**: duplicar es preferible a acoplar. Las rutas son relativas dentro del proyecto; las únicas absolutas son las de `og:*` y `canonical`, y apuntan al propio proyecto. Para que crear los recursos de cada proyecto no sea una carga (**Productividad**), se parte de variantes simples de un mismo SVG y se usan imágenes ligeras.

**Vinculación**: El criterio de **independencia** es compartido con **Arquitectura de carpetas**.

#### Historial

- **2026-11-01 - Vinculación de criterio**: Luego de una verificación se enlazó un criterio compartido con la decisión **Arquitectura de carpetas**. Si alguno de los dos deja de darle importancia a la **independencia**, es muy probable que ambas decisiones requieran ajustes simultáneos.
- **2026-10-24 - De compartido a independiente**: Se pasó de "la raíz guarda lo del repositorio y lo compartido" a "cada proyecto es dueño de todos sus recursos y lo repetido se duplica". Motivo: independencia entre proyectos; lo compartido obligaba a rutas relativas, a URLs absolutas o a excepciones, y no tiene sentido en proyectos de temas distintos. La opción anterior quedó en Alternativas como **Recursos compartidos en la raíz**.
- **2026-04-03 - Activos compartidos**: Se empezarán a crear activos compartidos en la raíz del repositorio.
- **2026-04-02 - Decisión**: Se empezaron a crear activos en el repositorio.

### Herramientas de desarrollo

Las herramientas de desarrollo son utilidades y protocolos que se usan al momento de desarrollar para ayudar a mantener legibilidad, limpieza, formato, verificación de errores, versionamiento e integridad del código fuente.

Herramientas adoptadas:

- **Git**: Control de versiones.
- **EditorConfig**: Reglas básicas de escritura compartidas entre editores.
- **`.gitattributes`**: Normaliza los saltos de línea a LF entre sistemas.
- **Prettier**: Formateo de código.
- **Linters**: Validan errores y buenas prácticas: ESLint para HTML, JavaScript y JSON, Stylelint para CSS y markdownlint para Markdown.
- **Husky + lint-staged**: Ejecutan las herramientas sobre los archivos preparados antes de cada commit.

[Ver herramientas de desarrollo actuales](DEVELOPMENT.md)

#### Problema

Sin estas herramientas aparecen problemas frecuentes: formato inconsistente entre archivos y editores (los diffs se llenan de cambios de estilo), saltos de línea mezclados (**CRLF** y **LF**) al pasar entre Windows y otros entornos, errores de sintaxis y malas prácticas que se descubren tarde (ya en el navegador), documentación con formato Markdown inconsistente y verificación manual y repetitiva antes de cada commit.

#### Ventajas

- Los linters detectan errores y malas prácticas antes del commit.
- Prettier elimina las decisiones de estilo y mantiene los diffs limpios.
- Trabajar con reglas reales obliga a escribir código válido desde el principio.
- Se deja de pensar en si el código se ve bien o es válido; la herramienta se encarga.
- EditorConfig y `.gitattributes` unifican la escritura y los saltos de línea.
- `README.md` y `DEVLOG.md` pasan por las mismas herramientas, por lo que también tienen formato y sintaxis verificables.
- Adoptarlas desde el primer proyecto es más barato que añadirlas después sobre decenas de proyectos.

#### Desventajas

- Cada herramienta agrega su configuración, además de `node_modules`.
- Para desarrollar hace falta ejecutar `npm install`.
- Los hooks se ejecutan en cada commit.
- Los hooks son locales y se saltan con `git commit --no-verify`; nada obliga a ejecutarlos.
- No detectan un enlace roto, una imagen que no existe en el sitio desplegado ni una decisión mal justificada.

#### Alternativas

Teniendo en cuenta que el objetivo es mantener el formato y la validez del código sin que verificar sea una carga (**Productividad**) y reforzar los **Buenos hábitos**, se consideraron variaciones sobre qué herramientas usar y dónde verificar:

- **Sin herramientas**: Formatear y revisar a mano.
  - **Ventaja**: Cero configuración y cero dependencias.
  - **Desventaja**: Formato inconsistente, errores que se cuelan y retrabajo.
  - **Descarte**: Contradice el principio de **Buenos hábitos** y no resuelve la normalización de saltos de línea entre Windows y otros entornos.
- **Solo Prettier**: Un formateador automático, sin validación.
  - **Ventaja**: Cubre el formato de forma automática.
  - **Desventaja**: No valida errores ni malas prácticas.
  - **Descarte**: Insuficiente para el objetivo de aprendizaje.
- **Solo linters (sin formateador)**: Validadores sin formateador.
  - **Ventaja**: Valida la correctitud del código.
  - **Desventaja**: No unifica el estilo; el formato seguiría siendo manual.
  - **Descarte**: El formato a mano vuelve a ser una carga innecesaria.
- **Verificar en CI en vez de en local**: Ejecutar las herramientas en un servicio de integración continua.
  - **Ventaja**: No se puede saltar con `--no-verify`.
  - **Desventaja**: El error aparece después del commit, no antes, y exige configuración adicional.
  - **Descarte**: Se prefiere entender primero el concepto antes de adoptarlo.

#### Decisión

Se adopta el stack completo, priorizando herramientas reales que acompañen el desarrollo y refuercen el principio de **Buenos hábitos**. Se reconoce que supera lo estrictamente necesario para proyectos pequeños, pero se asume como inversión de aprendizaje. Cada herramienta debe poder justificarse: si no se sabe qué cubre ni qué límite tiene, se revisa.

Cada herramienta tiene su territorio: Prettier decide el formato; los linters solo validan errores y buenas prácticas, sin reglas de estilo que choquen con Prettier. Los hooks verifican en local, así que son una ayuda y no una garantía.

La verificación en GitHub (CI) sigue pendiente: hoy los hooks son locales y se pueden omitir, así que la comprobación automática en el repositorio se implementará cuando se estudie el concepto.

#### Historial

- **2026-10-31 - Verificación en GitHub pendiente**: Se dejó explícito que la verificación en GitHub (CI) sigue pendiente y que los hooks locales no son una garantía.
- **2026-09-28 - Primeras herramientas**: `.gitattributes` y linters se agregaron a las herramientas adoptadas.

### Bitácora por proyecto `DEVLOG.md`

El `DEVLOG.md` de un proyecto es el registro de las decisiones que solo aplican a ese proyecto: qué se eligió, por qué y qué se descartó. Su función es justificar las decisiones que no pertenecen al documento global. Se mantiene junto al código y se actualiza cuando una decisión cambia.

#### Problema

Las decisiones de cada proyecto se olvidan si no se escriben, pero documentarlo todo con el mismo detalle consume más tiempo que construir, rompiendo el principio de **Productividad**.

#### Ventajas

- Cada decisión queda justificada y se puede re-evaluar después con información nueva.
- Cada decisión deja constancia de por qué ocurrió de esa forma y no de otra.
- Con las decisiones y lo descartado, sirve para reconstruir el criterio con el que se construyó el proyecto.

#### Desventajas

- Exige mantenerla sincronizada con el código.
- Sin un límite, puede convertirse en el trabajo principal en vez del aprendizaje.

#### Alternativas

Teniendo en cuenta que las decisiones de un proyecto deben poder entenderse sin mezclarse con las globales, se consideró:

- **Documentar solo en el `README.md`**: Una sola pieza de documentación por proyecto.
  - **Ventaja**: Menos archivos que mantener.
  - **Desventaja**: Mezcla la presentación con la justificación.
  - **Descarte**: El `README.md` presenta y el `DEVLOG.md` justifica; son funciones distintas.

#### Decisión

Cada proyecto tiene su `DEVLOG.md` con **solo las decisiones propias de ese proyecto** (las que cambiarían si fuera otro proyecto): los requisitos, las decisiones por etiqueta o parte del código con su razón, y lo descartado cuando enseñó algo. Lo que aplica a todos va en este documento; lo que comparten varios proyectos se enlaza desde el `DEVLOG.md` que lo estableció, no se repite. Criterio de profundidad: si una decisión no enseñó nada ni cambió el resultado, no se documenta.

**Vinculación**: El formato de las decisiones globales se define en [Auditorías de decisiones](#auditorías-de-decisiones); las de proyecto siguen la [plantilla de DEVLOG.md](assets/templates/devlog.md).

#### Historial

- **2026-11-05 - Formato y alcance**: Se aclaró que las decisiones globales usan las seis partes y las de proyecto siguen la plantilla; las compartidas se enlazan desde el proyecto que las estableció. Se retiró la lista de verificación duplicada de la plantilla y de los `DEVLOG.md` de proyecto, y se ajustó la ventaja del diario a la práctica real.
- **2026-11-01 - Definición y vínculo**: Se reescribió la introducción para explicar qué es el `DEVLOG.md` de un proyecto, sin depender de la práctica actual, y se enlazó el formato con **Auditorías de decisiones**.
- **2026-10-31 - Introducción y formato**: Se añadió la introducción y un borrador que hay que revisar.

### Exposición de datos en ejercicios prácticos

Los proyectos se publican en GitHub Pages y se comparten como ejercicios de práctica. Cualquier dato que aparezca en ellos es público, así que el contenido debe ser ficticio y no puede corresponder a personas, cuentas o servicios reales.

#### Problema

Un ejercicio necesita contenido realista para evaluar la semántica, el diseño y las vistas previas. Usar datos reales expone información personal, credenciales o servicios de terceros; también correos, teléfonos, direcciones, tokens, URLs privadas y capturas.

#### Ventajas

- Permite usar contenido realista sin exponer datos de personas reales.
- Da un criterio único para nombres, contactos, credenciales, tokens y capturas.
- Protege también a terceros, no solo al autor.
- Evita que las capturas o los ejemplos filtren datos que el texto no muestra.

#### Desventajas

- Hay que mantener coherentes los datos ficticios entre proyectos.
- Exige aclarar en cada `README.md` de proyecto que los datos son ficticios para que no se confundan con reales.
- Las capturas y los ejemplos pueden filtrar datos reales aunque el texto visible sea ficticio.

#### Alternativas

Teniendo en cuenta que el repositorio es público y que el contenido debe parecer real sin serlo, se consideraron:

- **Datos reales**: Usar nombres, contactos o cuentas reales.
  - **Ventaja**: Realismo inmediato.
  - **Desventaja**: Expone información personal y de terceros.
  - **Descarte**: Riesgo de privacidad y seguridad; no es aceptable en un repositorio público.
- **Texto de relleno (_lorem ipsum_)**: Contenido sin datos concretos.
  - **Ventaja**: No expone datos.
  - **Desventaja**: No permite evaluar la semántica ni las vistas previas con contenido realista.
  - **Descarte**: No sirve para el objetivo de aprendizaje.

#### Decisión

Todo contenido publicado en los proyectos es ficticio. No se usan datos personales reales, credenciales reales, tokens, URLs privadas ni información de terceros. Los nombres, contactos, cuentas y credenciales de ejemplo se inventan y, cuando corresponda, se marcan como no funcionales. Cada `README.md` de proyecto aclara que los datos no son reales. La regla cubre también capturas, textos alternativos y ejemplos de credenciales.

#### Historial

- **2026-11-05 - Alcance**: La aclaración se limita a los `README.md` de proyectos que usen datos ficticios.
- **2026-04-03 - Decisión**: Se decidió usar datos ficticios en los proyectos para no exponer información personal real.

---

[1]: https://roadmap.sh
[2]: https://roadmap.sh/projects
