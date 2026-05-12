# Descubriendo · 3 años  Sitio web

Sitio estático con la programación, materiales y secuenciación semanal del proyecto **Descubriendo** (Educación Infantil 3 años · CSMB).

Replica la estructura del Google Site actual con un aire editorial nuevo y todo el contenido centralizado en un único archivo de datos.

---

## Estructura

El sitio vive en la **raíz del repositorio** (sin subcarpeta `site/`):

```
├── index.html              — punto de entrada del curso 3 años
├── buenas-practicas.html   — presentación Buenas prácticas (deck)
├── assets/
│   ├── styles.css          — estilos
│   └── app.js              — router + render (no tocar salvo cambios técnicos)
├── data/
│   └── data.js             — TODO el contenido del sitio (editar aquí)
└── README.md
```

---

## Estado del contenido

- **Octubre**  completo (4 semanas con grupo coloquial, fases, rincones y rutina de pensamiento).
- **Noviembre, Diciembre, Enero, Febrero, Marzo, Abril, Mayo**  esqueleto navegable con marcadores `Pendiente de rellenar`.

Cada mes y semana borrador aparece en la interfaz marcado con la etiqueta **Borrador**.

---

## Cómo ver el sitio en local

Abre `index.html` con doble clic. Funciona directamente en el navegador.

> Si tu navegador bloquea algo por abrir desde `file://`, levanta un servidor mínimo:
>
> ```bash
> cd /ruta/al/repo/descubriendo
> python3 -m http.server 8080
> # luego abre http://localhost:8080
> ```

---

## Cómo añadir o cambiar contenido

Toca **solo `data/data.js`**. La interfaz se regenera sola.

### Rellenar un mes que está como esqueleto

Sustituye la línea correspondiente, por ejemplo:

```js
noviembre: makeSkeleton({ ... }),
```

Por un objeto completo siguiendo el patrón de `octubre`:

```js
noviembre: {
  slug: "noviembre",
  nombre: "Noviembre",
  trimestre: "t1",
  titulo: "El otoño · La cara · Van Gogh · La familia",
  descripcion: "...",
  programacion: {
    objetivos: ["..."],
    contenidos: ["..."],
    criterios: ["..."],
  },
  materiales: {
    laminas: ["..."],
    gruposColoquiales: [
      { numero: 1, titulo: "Tipos de hojas", items: ["..."] },
      // ...
    ],
    rincones: [
      { semana: 1, items: ["..."] },
      // ...
    ],
    rutinasPensamiento: [
      { numero: 1, titulo: "Spider del otoño", items: ["..."] },
      // ...
    ],
  },
  semanas: [
    {
      numero: 1,
      titulo: "El otoño · Tipos de hojas",
      programacion: { objetivos: ["..."] },
      materiales: {
        grupoColoquial: ["..."],
        rincones: ["..."],
        rutinaPensamiento: ["..."],
      },
      grupoColoquial: {
        titulo: "Otoño",
        faseMotivacion: "...",
        faseAnalisis: {
          espaciales: ["..."],
          temporales: ["..."],
          causales: ["..."],
          utilidad: ["..."],
          origen: ["..."],
          social: ["..."],
        },
        faseExpresion: "...",
      },
      rincones: [
        { tipo: "JUEGA",    descripcion: "..." },
        { tipo: "PRACTICA", descripcion: "..." },
        { tipo: "EXPRESA",  descripcion: "..." },
      ],
      rutinaPensamiento: {
        titulo: "Spider · El otoño",
        descripcion: "...",
      },
    },
    // ...semanas 2, 3, 4
  ],
},
```

> Tipos de rincón soportados (cambian el color del badge automáticamente):
> `JUEGA`, `EXPRESA`, `PRACTICA`, `EVALUA`, `ACTIVA`.

### Cambiar solo una semana

Localiza el mes en `data.js`, encuentra el array `semanas` y modifica el objeto de la semana que toque.

### Saltos de línea en textos largos

En `faseMotivacion`, `faseExpresion` o `descripcion` puedes usar `\n\n` para separar párrafos:

```js
faseMotivacion: "Primer párrafo.\n\nSegundo párrafo con más detalle.",
```

---

## Publicar el sitio

Es un sitio 100% estático: **cualquier hosting estático funciona**.

### Opción 1 · GitHub Pages (gratis)

1. El repo ya tiene `index.html` en la raíz: haz push de la rama (por ejemplo `main`).
2. En *Settings → Pages*, elige la rama y carpeta **`/` (root)** — no uses `/site`.
3. URL pública en unos segundos.

### Opción 2 · Netlify / Vercel (drag & drop)

Arrastra la **raíz del repo** (o conecta el repositorio) en [app.netlify.com/drop](https://app.netlify.com/drop) o despliega con Vercel. Listo.

### Opción 3 · Subdominio del centro

Sube todos los archivos por FTP/SFTP a la carpeta del subdominio (`descubriendo.csmb.es`, por ejemplo). Asegúrate de que `index.html` queda en la raíz de la carpeta.

### Opción 4 · Pegarlo en Google Sites

Google Sites no admite HTML/CSS/JS personalizado a pelo, pero puedes:

- **Embeber** el sitio publicado (opciones 13) dentro de una página de Google Sites con el bloque *Insertar → Insertar URL*.
- O usar este sitio como **referencia visual** y copiar/pegar manualmente cada bloque de texto (programación, fases, rincones) en las páginas y subpáginas del Google Site.

---

## Personalización rápida

- **Colores por trimestre**: en `assets/styles.css`, busca `--t1`, `--t2`, `--t3`.
- **Tipografías**: `Fraunces` (display) e `Inter` (sans). Se cargan desde Google Fonts en `index.html`.
- **Título y subtítulo**: `data/data.js` → `SITE.meta`.

---

## Accesibilidad y rendimiento

- Navegación por teclado y enlace *Saltar al contenido*.
- Contraste alto en texto principal.
- Sin frameworks ni dependencias: carga instantánea.
- Funciona offline una vez abierto en local.

---

## Licencia / créditos

Contenido pedagógico © CSMB · Proyecto EBI.
Maqueta construida sobre los PDFs `DESCUBRIENDO 3 años.pdf` y `descu3-v02sotero.pdf`.
