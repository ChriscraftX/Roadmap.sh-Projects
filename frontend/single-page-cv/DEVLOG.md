# Bitácora de Desarrollo

Como primer proyecto de frontend, se debe crear una sola página web utilizando únicamente HTML, un currículum (CV) que muestre un historial profesional. [Ver idea del proyecto][1].

Se debe centrar en exponer educación, habilidades e historial profesional de una manera limpia y semántica. Ya que el estilo se aplicará en un proyecto posterior.

![Imagen de referencia][2]

Lista de requisitos mínimos para este proyecto:

- HTML semántico: Utilizar etiquetas HTML adecuadas para estructurar el CV.
- Metaetiquetas SEO: Incluir metaetiquetas esenciales para SEO.
- Etiquetas Open Graph (OG): Agregar etiquetas OG para compartir mejor en las redes sociales.
- Favicon: Agregar un favicon para la página de CV.
- La estructura del CV debe ser fácilmente comprensible y estar lista para ser estilizada en un proyecto futuro.

Al completar este proyecto, se obtendrá una comprensión sólida de cómo crear un CV de una sola página utilizando HTML, aplicar principios básicos de SEO y preparar una página web para estilos futuros. Esta base permitirá pasar a diseñar el CV utilizando CSS en proyectos posteriores.

## Decisiones

Decisiones sobre cada parte de `index.html`, en el orden en que aparecen.

### Metadatos

- Atributos `html`:
  - `lang="es"`: Se usa `lang="es"` para cubrir a todos los hispanohablantes en lugar de acotarlo a Latinoamérica (`es-419`).
  - `dir="ltr"`: Es innecesario porque los navegadores ya leen el español de izquierda a derecha por defecto.
- `<meta charset="utf-8">`: Se usa el estándar de la web `utf-8`. Va primero en el `<head>` para que el navegador lo conozca antes de leer el resto del texto.
- `<meta name="viewport">`: Se usa `width=device-width, initial-scale=1.0` para que la página use el ancho real del dispositivo en móvil. No se usa `user-scalable=no` ni `maximum-scale` para no impedir el zoom.
- `<title>`: Es lo que se ve en la pestaña, en favoritos y como título en los resultados de búsqueda.
- `<meta name="description">`: Sugerencia de texto para los resultados de búsqueda. No influye en el posicionamiento, pero el buscador puede mostrarla como fragmento.
- `<link rel="canonical">`: Se usa con la URL completa y con barra final, idéntica a `og:url`. GitHub Pages no permite configurar redirecciones del servidor y el mismo contenido responde en `/single-page-cv/` y en `/single-page-cv/index.html`, así que el `canonical` es la forma de declarar cuál es la URL preferida. Si el proyecto cambia de dominio o de ruta, hay que actualizar ambos.

### Open Graph

- `og:type`: Se usa `profile` porque el proyecto muestra la información de una persona específica; si se omite, se interpreta como `website`. Se acompaña de `profile:first_name` y `profile:last_name`.
- `og:title`, `og:description`, `og:url`, `og:image`: `og:title`, `og:type`, `og:image` y `og:url` son las propiedades obligatorias del protocolo; la descripción acompaña la vista previa.
- Rutas absolutas: `og:image` y `og:url` las requieren porque quien rastrea la página no resuelve rutas relativas.
- `og:image:width`, `og:image:height`: Se declaran con las medidas reales de la vista previa para que las plataformas puedan mostrar la vista previa desde el primer compartido sin descargar antes la imagen.
- `og:image:alt`: Texto alternativo de la imagen.
- `twitter:card`: Se usa `summary` porque la vista previa es vertical y `summary_large_image` la recortaría a formato panorámico. X toma el resto de los datos de Open Graph, por eso no se repiten etiquetas `twitter:*`.
- Validación: Los validadores HTML pueden marcar el atributo `property` de las etiquetas `og:*` y `profile:*`, porque Open Graph se define con ese atributo y no con `name`. Es un aviso esperado sin probar.

### Favicons

- `favicon.ico` con `sizes="32x32"`: Favicon de retrocompatibilidad. El atributo `sizes` es el truco habitual para que los navegadores con soporte SVG prefieran el SVG.
- `favicon.svg` con `type="image/svg+xml"`: Favicon moderno y escalable.
- `apple-touch-icon`: Se omite por ahora. Se usa sobre todo al guardar la página en la pantalla de inicio de iOS, algo poco probable en un CV.

### Estructura

- `header`:
  - `h1`: Se usa como encabezado principal "Gustavo Persson", seguido del rol en un `p`. En un sitio con múltiples páginas donde el encabezado de página se reutiliza se puede usar un `p` en vez de `h1` y mover el encabezado con mayor importancia al `main`. No se usa `hgroup`: hoy su efecto práctico es mínimo.
  - `address`: Agrupa los datos de contacto de la persona dueña de la página, cada dato en su propio `p`. La dirección se divide en dos `p` en lugar de usar `br`, por simplicidad. Los enlaces usan `href="tel:+*"` y `href="mailto:*"` para que el dato se convierta en una acción. El teléfono usa el código ficticio `+999`, que la ITU no tiene asignado, y el bloque `555-01xx`, habitual en números de ficción, para que no corresponda a una línea real.
- `main`:
  - `section`: Separa Habilidades, Educación y Experiencia, cada una con su `h2`.
  - `ul`, `li`: Para listar habilidades, logros y enlaces.
  - `article`: Cada estudio o puesto se entiende por sí solo.
  - `h3`: Cada entrada usa dos líneas: el título o puesto en el `h3` y la institución o empresa en un `p`. Así los encabezados son cortos y fáciles de recorrer, y cada dato puede estilizarse por separado. No se usan guiones como separador visual dentro del contenido; eso corresponde al CSS.
  - `abbr`: No se usa. Se evaluó marcar la sigla con `<abbr title="...">`, pero el `title` no es accesible en pantallas táctiles ni con teclado; por eso se escribe visible el nombre completo de la universidad en lugar de la sigla UNVE.
  - `time datetime=".."`: Marca las fechas con precisión de mes (AAAA-MM), porque la fuente solo indica mes y año y no se inventa el día. "Presente" no va dentro de `<time>`: no existe un valor que exprese "hasta hoy" y una fecha fija contradiría el texto y quedaría desactualizada.
  - `Habilidades:` En cada puesto: Se conserva como un `p` porque es una línea corta de etiquetas, no una lista de logros.
- `footer`: Contiene los enlaces "A través de Internet" con su `h2` y un `ul`. Los enlaces externos usan `target="_blank"` para no sacar al lector del CV, con `rel="noopener noreferrer"`: `noopener` impide que la pestaña abierta controle a esta (los navegadores modernos ya lo aplican y se deja explícito) y `noreferrer` evita enviar la página de origen.
- Sin `style`, `script`, `class` ni `id`: El proyecto es solo HTML. La estructura semántica ya ofrece puntos de enganche (`header`, `section`, `article`, `ul`) y las clases se agregarán en el proyecto de CSS si hacen falta.

---

[1]: https://roadmap.sh/projects/single-page-cv
[2]: https://assets.roadmap.sh/guest/resume-template-zyl70.png
