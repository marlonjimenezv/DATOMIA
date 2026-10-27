# Tarea para Claude en el computador de Marlon

Marlon pidió que Claude termine de publicar su portafolio. Esta tarea necesita un navegador con su sesión iniciada
en GitHub y en Upwork, por eso se hace desde Claude en su computador (Claude Desktop con Claude in Chrome o con
control del computador). Marlon ya dio permiso para todo lo de abajo. Aun así: antes de publicar el **primer**
proyecto de Upwork, muéstrale cómo quedó y espera su visto bueno; después sigue con los demás.

## 0. Conseguir los archivos

```bash
git clone --depth 1 --branch ccr-e258660f-8myl64 https://github.com/marlonjimenezv/DATOMIA.git datomia-tmp
```

Todo está en `datomia-tmp/data-portfolio/`. Lee primero `PUBLICAR.md` y `PORTAFOLIO_UPWORK.md`.

## 1. Publicar el repositorio en GitHub (primero, porque los links de Upwork apuntan ahí)

1. En github.com (sesión de `marlonjimenezv`) crea el repositorio **`data-portfolio`**, público, vacío (sin README,
   sin .gitignore, sin licencia).
2. Sigue el paso 2 de `PUBLICAR.md` (copia la carpeta `data-portfolio`, `git init -b main`, un solo commit,
   `git push -u origin main`). El commit va a nombre de Marlon; no agregues co-autores ni menciones a la IA.
3. Activa GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `/docs` → Save.
4. Espera 1–2 minutos y verifica que abran:
   - https://marlonjimenezv.github.io/data-portfolio/
   - https://marlonjimenezv.github.io/data-portfolio/procurement-dashboard/
   - https://marlonjimenezv.github.io/data-portfolio/survey-report/
   - https://marlonjimenezv.github.io/data-portfolio/churn-report/

## 2. Crear los 8 proyectos en el Portafolio de Upwork

En upwork.com (sesión de Marlon): Perfil → Portfolio → **Add a project** (o el botón "+" de Portfolio). Para cada
proyecto, en el orden de `PORTAFOLIO_UPWORK.md` sugerido (02, 01, 03, 08, 06, 05, 04, 07):

- **Project title**: el título de `PORTAFOLIO_UPWORK.md` (máx. 50 caracteres).
- **Your role**: `Data analyst (sample project)`.
- **Project description**: la descripción (máx. 500 caracteres), tal cual.
- **Skills and deliverables**: las 5 skills listadas.
- **Content**: sube primero `cover.png` y luego `shot-1.png`, `shot-2.png`… desde
  `datomia-tmp/data-portfolio/<carpeta del proyecto>/upwork/`. Si Upwork deja escribir un texto bajo cada imagen,
  usa el caption. Agrega los links de `links.txt` como bloque de link (o al final de la descripción si no hay bloque
  de link). En 06 y 07 agrega también el PDF de esa carpeta si Upwork lo acepta.
- Elige `cover.png` como miniatura si Upwork lo pregunta. Publica el proyecto.

No cambies nada más del perfil de Upwork (descripción, habilidades, tarifa, experiencia laboral): eso ya está hecho.

## 3. Comprobar

Abre el perfil público de Marlon en Upwork y confirma que los 8 proyectos aparecen con su portada. Avísale qué
quedó publicado y si algo falló.

## 4. Opcional: Power BI

Si Power BI Desktop está instalado (Windows), arma el informe siguiendo
`02-procurement-dashboard/powerbi/POWERBI_PASO_A_PASO.md`, compáralo con `VALORES_ESPERADOS.md`, guarda el `.pbix`
en `02-procurement-dashboard/powerbi/` del repositorio `data-portfolio` y haz push. Si no está instalado, sáltalo.
