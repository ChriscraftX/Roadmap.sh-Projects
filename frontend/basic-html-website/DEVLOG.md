# Bitácora de Desarrollo

Como segundo proyecto de frontend, se debe crear un sitio web simple con varias páginas usando únicamente HTML. [Ver idea del proyecto][1].

El sitio debe incluir las páginas Inicio, Proyectos, Artículos y Contacto, con una barra de navegación presente en todas. El objetivo es practicar la estructura semántica, la navegación entre páginas y las metaetiquetas SEO, sin aplicar estilos; el diseño se hará en un proyecto posterior.

![Imagen de referencia][2]

Lista de requisitos mínimos para este proyecto:

- Cuatro páginas: Inicio, Proyectos, Artículos y Contacto.
- Barra de navegación en todas las páginas, con enlaces a todas.
- Estructura semántica en HTML.
- Metaetiquetas SEO en el `<head>` de cada página.
- Formulario de contacto con nombre, correo y mensaje.
- Sin estilos: el sitio se limita a HTML.

El proyecto sirvió para practicar la navegación entre páginas con rutas relativas, la repetición de una estructura común y el uso de formularios. Sin CSS, la jerarquía depende por completo de las etiquetas: `header`, `nav`, `main`, `section`, `article` y `footer` hacen que el documento se entienda antes de estilizarlo.

## Decisiones

Las decisiones sobre metadatos, Open Graph y favicons son las mismas que en [Single-Page CV](../single-page-cv/DEVLOG.md). Aquí solo se documenta lo que cambia al pasar de una página a un sitio con varias páginas.

### Rutas y navegación

- **Una carpeta por página, con `index.html`**: Cada página vive en su propia carpeta (`Projects/`, `Articles/`, `Contact/`) y los enlaces apuntan a la carpeta con barra final, no al archivo. Se llama `Directory-based Routing` y `Pretty URLs`: las URLs quedan limpias y GitHub Pages sirve el `index.html` de cada carpeta.

### Metadatos y Open Graph

- **`canonical` y `og:url` por página**: Cada página declara su propia URL, con barra final. Si todas declararan la portada, los buscadores y las redes tratarían las subpáginas como contenido duplicado.
- **`og:type="website"`**: El sitio tiene varias páginas y no representa el perfil de una persona, así que se usa `website` y se omiten `profile:*`.
- **`og:image` compartida**: Las cuatro páginas usan la captura de la portada (`assets/preview.png`). Es una imagen del sitio y vive dentro del proyecto.

### Estructura compartida

- **Encabezado, navegación y pie repetidos**: Las cuatro páginas comparten el mismo `header`, `nav` y `footer`. Sin plantillas ni JavaScript, es la forma de mantener un sitio estático; se asume la duplicación a cambio de no introducir una dependencia para un ejercicio de HTML.
  - **`header`**: Un `a` que hace alusión a un logo y el `nav`
  - **`nav`**: Cuatro `a` para cada pagina del sitio.
  - **`footer`**: Una sección de comentarios, otro `nav` y un `small` para derechos reservados.

- **Opiniones**: Una sección de comentarios.
  - **`figure`**: Aisla la reseña como un componente independiente y completo del resto del contenido.
  - **`blockquote`**: Señala que el texto exacto proviene de una fuente externa.
  - **`figcaption`**: Vincula formalmente los datos de autoría con la cita que encapsula. No se usa `cite` porque no es correcto usarse con nombre de personas.

### Formulario de contacto

- **Campos nativos con validación**: `label`, `input` y `textarea`, con `required`, `type="email"` y `autocomplete`. El navegador valida sin JavaScript.
- **Sin envío real**: El formulario no tiene `action` ni backend. GitHub Pages es estático y el requisito pide la estructura del formulario, no un servicio de correo. Se conserva `method="POST"` para no enviar los campos por la URL, aunque no haya destino. Se deja preparado para conectarlo en un proyecto posterior.

---

[1]: https://roadmap.sh/projects/basic-html-website
[2]: https://assets.roadmap.sh/guest/portfolio-design-83lku.png
