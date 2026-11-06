# Desarrollo local

Si quieres contribuir o trabajar en los proyectos localmente, necesitas **Node.js 24 o superior** y **npm**.

## 🛠 Preparación

### 1. Clona el repositorio

```bash
git clone https://github.com/ChriscraftX/Roadmap.sh-Projects.git
cd Roadmap.sh-Projects
```

Si usas SSH, cambia la URL por `git@github.com:ChriscraftX/Roadmap.sh-Projects.git`.

### 2. Instala las dependencias de desarrollo

```bash
npm install
```

Al hacer `git commit`, el hook `pre-commit` ejecuta `lint-staged`: **Prettier formatea** y los **linters revisan y corrigen lo que sea automático** en los archivos staged. Solo revisa lo que entra en el commit, así que no sustituye la verificación completa (`npm run format:check` y `npm run lint`). No necesitas configurar nada más.

---

## ⚡ Scripts disponibles

| Comando                 | Qué hace                                 |
| ----------------------- | ---------------------------------------- |
| `npm run format`        | Formatea todo el proyecto con Prettier   |
| `npm run format:check`  | Revisa el formato sin modificar archivos |
| `npm run lint`          | Ejecuta todos los linters                |
| `npm run lint:html`     | Revisa HTML (ESLint)                     |
| `npm run lint:html:fix` | Corrige HTML (ESLint)                    |
| `npm run lint:css`      | Revisa CSS (Stylelint)                   |
| `npm run lint:css:fix`  | Corrige CSS (Stylelint)                  |
| `npm run lint:js`       | Revisa JavaScript (ESLint)               |
| `npm run lint:js:fix`   | Corrige JavaScript (ESLint)              |
| `npm run lint:json`     | Revisa JSON (ESLint)                     |
| `npm run lint:json:fix` | Corrige JSON (ESLint)                    |
| `npm run lint:md`       | Revisa Markdown (`markdownlint-cli2`)    |
| `npm run lint:md:fix`   | Corrige Markdown (`markdownlint-cli2`)   |

**Editor recomendado**: VS Code. Al abrir la carpeta te sugerirá instalar las extensiones útiles en el desarrollo (Prettier, EditorConfig, Live Server, Stylelint, ESLint y markdownlint).

---
