/* =====================================================================
 * Descubriendo · 3 años — App
 * SPA con router por hash. Mascotas PNG en assets/img; iconos SVG en sprites.js
 * ===================================================================== */

(function () {
  const SITE = window.SITE;
  if (!SITE) {
    document.body.innerHTML =
      '<p style="padding:40px;font-family:sans-serif">Error: no se ha cargado <code>data/data.js</code>.</p>';
    return;
  }

  const $main = document.getElementById("main");
  const $sidebar = document.getElementById("sidebar");
  const $lastUpdated = document.getElementById("lastUpdated");
  const $menuToggle = document.querySelector(".menu-toggle");
  const $nav = document.querySelector(".primary-nav");

  const PLACEHOLDER = "Pendiente de rellenar";

  // ───────────────── helpers ─────────────────
  function esc(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function escMl(s) { return esc(s).replace(/\n/g, "<br />"); }
  function isPlaceholder(s) { return typeof s === "string" && s.trim() === PLACEHOLDER; }

  /** Texto corto para enlaces del menú lateral (evita filas kilométricas). */
  function semanaNavCorta(s, max = 42) {
    const t = (s.titulo || "").trim();
    if (!t) return `Semana ${s.numero}`;
    if (t.length <= max) return `S${s.numero} · ${t}`;
    return `S${s.numero} · ${t.slice(0, max - 1)}…`;
  }

  /** Navegación horizontal por anclas dentro de la página del mes. */
  function mesJumpNav(slug) {
    return `
      <nav class="jump-nav jump-nav--mes" aria-label="Saltar dentro de este mes">
        <a class="jump-nav__a" href="#mes-${slug}-programacion">Programación</a>
        <a class="jump-nav__a" href="#mes-${slug}-materiales">Materiales</a>
        <a class="jump-nav__a" href="#mes-${slug}-semanas">Semanas</a>
      </nav>`;
  }

  /** Anclas dentro de la vista de una semana. */
  function semanaJumpNav(slug) {
    return `
      <nav class="jump-nav jump-nav--semana" aria-label="Saltar dentro de esta semana">
        <a class="jump-nav__a" href="#sem-${slug}-objetivos">Objetivos</a>
        <a class="jump-nav__a" href="#sem-${slug}-materiales">Materiales</a>
        <a class="jump-nav__a" href="#sem-${slug}-gc">Grupo coloquial</a>
        <a class="jump-nav__a" href="#sem-${slug}-rincones">Rincones</a>
        <a class="jump-nav__a" href="#sem-${slug}-rutina">Rutina</a>
      </nav>`;
  }

  function listOrEmpty(arr, opts = {}) {
    if (!arr || !arr.length) return "";
    const cls = opts.checks ? "bullets bullets--check" : "bullets";
    const items = arr
      .filter(Boolean)
      .map((it) =>
        isPlaceholder(it)
          ? `<li class="muted"><em>${esc(it)}</em></li>`
          : `<li>${escMl(it)}</li>`
      )
      .join("");
    return `<ul class="${cls}">${items}</ul>`;
  }
  function byNumber(arr, key = "numero") {
    return [...(arr || [])].sort((a, b) => Number(a[key] || 0) - Number(b[key] || 0));
  }
  function laminaPdfHref(slug) {
    const t3 = slug.startsWith("t3-");
    const t2 = slug.startsWith("t2-");
    if (t3) return "../documentos/Descubriendo 3 Laminas A2 - Trimestre 3.pdf";
    if (t2) return "../documentos/Descubriendo 3 Laminas a2 Trimestre 2.pdf";
    return "../documentos/Descubriendo 3 Laminas a2 Trimestre 1.pdf";
  }

  function trimestreOf(mes) {
    return SITE.trimestres.find((t) => t.id === mes.trimestre);
  }
  function setActiveAccent(trimestreId) {
    document.documentElement.dataset.trimestre = trimestreId || "t1";
  }
  function setActiveLinks(route) {
    document.querySelectorAll(".primary-nav a").forEach((a) => {
      const key = a.dataset.link;
      a.classList.toggle(
        "is-active",
        (route.kind === "home" && key === "home") ||
          (route.kind === "trimestre" && key === route.id) ||
          (route.kind !== "home" && route.trimestre === key)
      );
    });
    document.querySelectorAll(".side-list a").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.mes === route.mes);
    });
    document.querySelectorAll(".side-sub a").forEach((a) => {
      a.classList.toggle(
        "is-active",
        a.dataset.mes === route.mes && String(a.dataset.semana) === String(route.semana)
      );
    });
    document.querySelectorAll(".side-home__link").forEach((a) => {
      a.classList.toggle("is-active", route.kind === "home");
    });
  }

  // ───────────────── UI helpers ─────────────────
  const sign = (text, variant = "green") =>
    `<span class="sign sign--${variant}">${esc(text)}</span>`;

  const useIcon = (id, cls = "action-icon") =>
    `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

  // Banderín de madera con Sete (PNG) a la izquierda
  const banner = (text, opts = {}) => {
    const small = opts.small ? " banner--small" : "";
    const noMascot = opts.hideMascot ? " banner--no-mascot" : "";
    const seteImg = opts.sete || "sete-senala";
    const mascotEl =
      opts.hideMascot === true
        ? ""
        : `<img class="banner__sete" src="assets/img/${seteImg}.png" alt="" loading="lazy" />`;
    return `
      <span class="banner${small}${noMascot}">
        ${mascotEl}
        <svg class="banner__svg" viewBox="0 0 600 100" preserveAspectRatio="none" aria-hidden="true">
          <use href="#i-banner-plain"/>
        </svg>
        <span class="banner__text">${esc(text)}</span>
      </span>`;
  };

  // Mini rueda en cabecera del cuaderno
  const wheelMini = () =>
    `<span class="wheel-mini" aria-hidden="true"><svg viewBox="0 0 200 200"><use href="#i-wheel"/></svg></span>`;

  // Filmstrip con N celdas, marca cuáles están activas
  const filmstrip = (active = ["JUEGA", "PRACTICA", "EXPRESA"]) => {
    const all = ["ACTIVA", "JUEGA", "PRACTICA", "EXPRESA", "EVALUA"];
    const map = {
      ACTIVA: "i-activa", JUEGA: "i-juega", PRACTICA: "i-practica",
      EXPRESA: "i-expresa", EVALUA: "i-evalua",
    };
    const norm = active.map((x) => x.toUpperCase());
    const cells = all
      .map((t) => {
        const on = norm.includes(t);
        return `<span class="filmstrip__cell" data-on="${on}" data-tipo="${t}" title="${t}">
          <svg aria-hidden="true"><use href="#${map[t]}"/></svg>
        </span>`;
      })
      .join("");
    return `<span class="filmstrip" aria-hidden="true">${cells}</span>`;
  };

  // Badge con Kala (PNG)
  const kalaBadge = (n, opts = {}) => {
    const cls = opts.large ? " kala-badge--lg" : "";
    const variant = opts.variant || "kala-saluda";
    return `<span class="kala-badge${cls}" aria-hidden="true">
      <img class="kala-badge__img" src="assets/img/${variant}.png" alt="" loading="lazy" />
      <span class="kala-badge__num">${esc(String(n))}</span>
    </span>`;
  };

  // Cabecera estilo cuaderno: filmstrip · banner · rueda
  const notebookHead = (titulo, subtitulo, opts = {}) => {
    return `
      <div class="notebook__head">
        ${filmstrip(opts.fases || ["JUEGA", "PRACTICA", "EXPRESA"])}
        <div class="banner-wrap">${banner(titulo, { sete: opts.sete, hideMascot: opts.hideMascot })}</div>
        ${wheelMini()}
      </div>
      ${subtitulo ? `<p class="notebook__sub">${esc(subtitulo)}</p>` : ""}`;
  };

  // Hero principal: Sete + Kala (PNG)
  const heroIllustration = () => `
    <div class="hero-illus">
      <div class="hero-illus__sky"></div>
      <img class="hero-illus__sete" src="assets/img/sete-saluda.png" alt="Sete saludando" loading="eager" />
      <img class="hero-illus__kala" src="assets/img/kala-saluda.png" alt="Kala saludando" loading="eager" />
      <div class="hero-illus__ground"></div>
    </div>`;

  const MES_VISUAL = {
    octubre:    { sete: "sete-senala",   kala: "kala-saluda",  laminas: ["aseo","rio","mar"] },
    noviembre:  { sete: "sete-libro",    kala: "kala-hoja",    laminas: ["arboles-y-hojas","somos-diferentes","alegria-tristeza"] },
    diciembre:  { sete: "sete-celebra",  kala: "kala-osito",   laminas: ["animales-domesticos","enfado-alegria"] },
    enero:      { sete: "sete-binoculares", kala: "kala-binoculares", laminas: ["t2-lamina-1", "t2-lamina-2", "t2-lamina-3", "t2-lamina-4"] },
    febrero:    { sete: "sete-ok",       kala: "kala-idea",    laminas: ["t2-lamina-5", "t2-lamina-6", "t2-lamina-7", "t2-lamina-8"] },
    marzo:      { sete: "sete-lupa",     kala: "kala-lupa",    laminas: ["t2-lamina-9", "t2-lamina-10", "t2-lamina-11", "t2-lamina-12"] },
    abril:      { sete: "sete-corre",    kala: "kala-saluda",  laminas: ["t3-lamina-1", "t3-lamina-2", "t3-lamina-3", "t3-lamina-4"] },
    mayo:       { sete: "sete-brujula",  kala: "kala-arbol",   laminas: ["t3-lamina-5", "t3-lamina-6", "t3-lamina-7", "t3-lamina-8"] },
  };
  const visualOf = (slug) => MES_VISUAL[slug] || { sete: "sete-senala", kala: "kala-saluda", laminas: [] };

  const monthBadge = (m) => {
    const v = visualOf(m.slug);
    return `
      <div class="month-art">
        <div class="month-art__bg"></div>
        <img class="month-art__sete" src="assets/img/${v.sete}.png" alt="" loading="lazy" />
        <img class="month-art__kala" src="assets/img/${v.kala}.png" alt="" loading="lazy" />
      </div>`;
  };

  // Galería de láminas (miniaturas con lightbox)
  const laminaGallery = (slugs) => {
    if (!slugs || !slugs.length) return "";
    const items = slugs.map((s) => `
      <a class="lamina lamina--doc" href="${laminaPdfHref(s)}" target="_blank" rel="noopener" data-lamina="${s}">
        <span class="lamina__doc-icon" aria-hidden="true">${useIcon("i-practica", "action-icon")}</span>
        <span class="lamina__doc-copy">Abrir cuaderno de láminas</span>
        <span class="lamina__label">${esc(s.replace(/-/g," "))}</span>
      </a>`).join("");
    return `
      <div class="lamina-gallery">
        ${items}
      </div>`;
  };

  function rinconIcon(tipo) {
    const t = (tipo || "").toUpperCase();
    const map = {
      JUEGA: "i-juega",
      EXPRESA: "i-expresa",
      PRACTICA: "i-practica",
      EVALUA: "i-evalua",
      ACTIVA: "i-activa",
    };
    const id = map[t] || "i-juega";
    return useIcon(id, "action-icon");
  }

  // ───────────────── Sidebar ─────────────────
  function trimestreActivoDesdeRuta(route) {
    if (route.kind === "trimestre") return route.id;
    if (route.kind === "mes" || route.kind === "semana") {
      const m = SITE.meses[route.mes];
      return m ? m.trimestre : null;
    }
    return null;
  }

  function renderSidebar(route = { kind: "home", trimestre: "t1" }) {
    const trimActivo = trimestreActivoDesdeRuta(route);
    const html = SITE.trimestres
      .map((t) => {
        const meses = t.meses
          .map((slug) => SITE.meses[slug])
          .filter(Boolean);
        const marcarTrim = trimActivo === t.id;
        return `
          <div class="side-group${marcarTrim ? " side-group--current" : ""}" data-trimestre="${t.id}" style="--mark:${t.color}">
            <div class="side-group__title">${esc(t.nombre)}</div>
            <ul class="side-list">
              ${meses
                .map(
                  (m) => `
                <li>
                  <a href="#/mes/${m.slug}" data-mes="${m.slug}">
                    ${esc(m.nombre)}
                    ${m.esqueleto ? '<span class="tag tag--draft" style="margin-left:6px">Borrador</span>' : ""}
                  </a>
                  <ul class="side-sub">
                    ${byNumber(m.semanas || [], "numero")
                      .map(
                        (s) => `
                      <li>
                        <a href="#/mes/${m.slug}/semana/${s.numero}" data-mes="${m.slug}" data-semana="${s.numero}" title="${esc(
                          s.titulo || `Semana ${s.numero}`
                        )}">
                          ${esc(semanaNavCorta(s))}
                        </a>
                      </li>`
                      )
                      .join("")}
                  </ul>
                </li>`
                )
                .join("")}
            </ul>
          </div>`;
      })
      .join("");
    $sidebar.innerHTML = `
      <nav class="side-home" aria-label="Principal">
        <a href="#/" class="side-home__link${route.kind === "home" ? " is-active" : ""}">Inicio</a>
      </nav>
      <h2 class="side-heading">Meses y semanas</h2>
      ${html}`;
  }

  // ───────────────── Views ─────────────────

  function viewHome() {
    const trimestres = SITE.trimestres
      .map((t) => {
        const meses = t.meses.map((slug) => SITE.meses[slug]).filter(Boolean);
        const cards = meses
          .map(
            (m) => {
              const v = visualOf(m.slug);
              return `
          <a class="card card--mes" href="#/mes/${m.slug}" data-trimestre="${t.id}">
            <div class="card__art">
              <img src="assets/img/${v.kala}.png" alt="" loading="lazy" />
            </div>
            <div class="card__body">
              <span class="card__num">${m.nombre[0]}</span>
              <h3 class="card__title">${esc(m.nombre)}</h3>
              <p class="card__sub">${esc(m.titulo || "")}</p>
              <div class="card__meta">
                <span>${m.semanas ? m.semanas.length : 0} semanas</span>
                <span class="card__cta">Ver mes</span>
              </div>
            </div>
          </a>`;
            }
          )
          .join("");
        return `
          <section class="section" data-trimestre="${t.id}">
            <h2 class="section__title">
              ${esc(t.nombre)}
              <span class="pill">${meses.length} meses</span>
            </h2>
            <p class="section__sub">${meses.map((m) => esc(m.nombre)).join(" · ")}</p>
            <div class="grid grid--3">${cards}</div>
          </section>`;
      })
      .join("");

    return `
      <div class="hero hero--book" data-trimestre="t1">
        <div class="hero-grid">
          <div class="hero__text">
            <div class="hero__sign-row" style="margin-bottom:18px">
              ${banner("¡Hola! Somos Sete y Kala", { sete: "sete-celebra" })}
            </div>
            <h1 class="hero__title">Descubriendo<br/><em>3 años</em></h1>
            <p class="hero__lead">
              Programación, materiales y secuenciación semanal del proyecto
              <strong>Descubriendo</strong> para Educación Infantil.
              Acompáñanos por el bosque del aprendizaje con
              <strong>Sete</strong>, el explorador, y <strong>Kala</strong>, el koala curioso.
            </p>
          </div>
          <div class="hero__art">${heroIllustration()}</div>
        </div>
      </div>

      <nav class="home-trims" aria-label="Ir a un trimestre">
        ${SITE.trimestres
          .map((t) => {
            const n = (t.meses || []).length;
            return `
          <a class="home-trims__card" href="#/trimestre/${t.id}" data-trimestre="${t.id}" style="--mark:${t.color}">
            <span class="home-trims__dot" aria-hidden="true"></span>
            <span class="home-trims__label">${esc(t.nombre)}</span>
            <span class="home-trims__meta">${n} meses</span>
          </a>`;
          })
          .join("")}
      </nav>

      ${trimestres}

      <section class="section" data-trimestre="t1">
        <div class="ebi-section-head">
          <div>
            <h2 class="section__title" style="margin-bottom:6px">El método: las 5 fases EBI</h2>
            <p class="section__sub" style="margin:0">
              Cada sesión recorre cinco tipos de experiencias de aprendizaje. Las verás en cada rincón y semana.
            </p>
          </div>
          <img class="ebi-section-mascot" src="assets/img/kala-idea.png" alt="" loading="lazy" />
        </div>
        <div class="ebi-wheel">
          <svg class="ebi-wheel__svg" viewBox="0 0 200 200" aria-hidden="true">
            <use href="#i-wheel"/>
          </svg>
          <ul class="ebi-list">
            <li data-tipo="ACTIVA">
              <span class="ebi-icon">${useIcon("i-activa")}</span>
              <div><strong>Activa</strong><small>Despertamos la motivación y los conocimientos previos.</small></div>
            </li>
            <li data-tipo="JUEGA">
              <span class="ebi-icon">${useIcon("i-juega")}</span>
              <div><strong>Juega</strong><small>Experiencias lúdicas y manipulativas para un aprendizaje activo.</small></div>
            </li>
            <li data-tipo="PRACTICA">
              <span class="ebi-icon">${useIcon("i-practica")}</span>
              <div><strong>Practica</strong><small>Consolidamos y ejercitamos los contenidos.</small></div>
            </li>
            <li data-tipo="EXPRESA">
              <span class="ebi-icon">${useIcon("i-expresa")}</span>
              <div><strong>Expresa</strong><small>Creación, expresión plástica y destrezas de pensamiento.</small></div>
            </li>
            <li data-tipo="EVALUA">
              <span class="ebi-icon">${useIcon("i-evalua")}</span>
              <div><strong>Evalúa</strong><small>Dejamos evidencias del proceso y del progreso.</small></div>
            </li>
          </ul>
        </div>
      </section>`;
  }

  function viewTrimestre(id) {
    const t = SITE.trimestres.find((x) => x.id === id);
    if (!t) return viewNotFound();
    const meses = t.meses.map((slug) => SITE.meses[slug]).filter(Boolean);

    return `
      <nav class="crumbs">
        <a href="#/">Inicio</a><span class="sep"></span>
        <span>${esc(t.nombre)}</span>
      </nav>

      <div class="notebook" data-trimestre="${t.id}">
        ${notebookHead(t.nombre, `${meses.length} meses · ${meses.map((m) => m.nombre).join(" · ")}`, { sete: "sete-celebra" })}
        <div class="grid grid--2">
          ${meses
            .map((m) => {
              const v = visualOf(m.slug);
              return `
            <a class="card card--mes" href="#/mes/${m.slug}" data-trimestre="${t.id}">
              <div class="card__art">
                <img src="assets/img/${v.kala}.png" alt="" loading="lazy" />
              </div>
              <div class="card__body">
                <span class="card__num">${m.nombre[0]}</span>
                <h3 class="card__title">${esc(m.nombre)}</h3>
                <p class="card__sub">${esc(m.titulo || "")}</p>
                <div class="card__meta">
                  <span>${m.semanas ? m.semanas.length : 0} semanas</span>
                  <span class="card__cta">Ver mes</span>
                </div>
              </div>
            </a>`;
            })
            .join("")}
        </div>
      </div>`;
  }

  function viewMes(slug) {
    const m = SITE.meses[slug];
    if (!m) return viewNotFound();
    const t = trimestreOf(m);
    const isEsqueleto = !!m.esqueleto;
    const v = visualOf(m.slug);

    return `
      <nav class="crumbs">
        <a href="#/">Inicio</a><span class="sep"></span>
        <a href="#/trimestre/${t.id}">${esc(t.nombre)}</a><span class="sep"></span>
        <span>${esc(m.nombre)}</span>
      </nav>

      <div class="notebook" data-trimestre="${t.id}">
        ${notebookHead(m.nombre, "", { hideMascot: true })}
        <div class="hero-grid hero-grid--notebook">
          <div class="hero__text">
            <h1 class="page-title page-title--mes" style="margin-top:0">${esc(m.titulo || m.nombre)}</h1>
            ${m.descripcion && !isPlaceholder(m.descripcion)
              ? `<p class="page-lead">${escMl(m.descripcion)}</p>`
              : `<p class="page-lead">${esc(t.nombre)} · ${(m.semanas || []).length} semanas.</p>`}
            ${isEsqueleto ? '<p style="margin-top:6px"><span class="tag tag--draft">Borrador</span> Este mes está pendiente de rellenar.</p>' : ""}
          </div>
          <div class="hero__art">${monthBadge(m)}</div>
        </div>
      </div>

      ${mesJumpNav(m.slug)}

      <section class="section" id="mes-${m.slug}-programacion">
        <h2 class="section__title">Programación <span class="pill">Mes</span></h2>
        <p class="section__sub">Objetivos, contenidos y criterios de evaluación.</p>
        <div class="prog-cols">
          <div>
            <h3>Objetivos</h3>
            ${listOrEmpty(m.programacion.objetivos, { checks: true })}
          </div>
          <div>
            <h3>Contenidos</h3>
            ${listOrEmpty(m.programacion.contenidos)}
          </div>
          <div>
            <h3>Criterios de evaluación</h3>
            ${listOrEmpty(m.programacion.criterios)}
          </div>
        </div>
      </section>

      <section class="section" id="mes-${m.slug}-materiales">
        <h2 class="section__title">Materiales <span class="pill">Mes</span></h2>
        <p class="section__sub">Lo que se va a usar este mes, organizado por bloque.</p>

        <div class="subhead">Láminas</div>
        ${listOrEmpty(m.materiales.laminas)}
        ${
          v.laminas && v.laminas.length
            ? `<p class="section__sub" style="margin-top:10px">Miniaturas A2 (se abren en pestaña nueva).</p>${laminaGallery(v.laminas)}`
            : ""
        }

        <div class="section-divider"></div>

        <div class="subhead">Grupo coloquial</div>
        <div class="matgrid">
          ${byNumber(m.materiales.gruposColoquiales || [], "numero")
            .map(
              (g) => `
            <div class="matblock">
              <h4><span class="num">${g.numero}</span> ${esc(g.titulo || "")}</h4>
              ${listOrEmpty(g.items)}
            </div>`
            )
            .join("")}
        </div>

        <div class="section-divider"></div>

        <div class="subhead">Rincones</div>
        <div class="matgrid">
          ${byNumber(m.materiales.rincones || [], "semana")
            .map(
              (r) => `
            <div class="matblock">
              <h4><span class="num">${r.semana}</span> Semana ${r.semana}</h4>
              ${listOrEmpty(r.items)}
            </div>`
            )
            .join("")}
        </div>

        <div class="section-divider"></div>

        <div class="subhead">Rutinas de pensamiento</div>
        <div class="matgrid">
          ${byNumber(m.materiales.rutinasPensamiento || [], "numero")
            .map(
              (r) => `
            <div class="matblock">
              <h4><span class="num">${r.numero}</span> ${esc(r.titulo || "")}</h4>
              ${listOrEmpty(r.items)}
            </div>`
            )
            .join("")}
        </div>

        ${
          m.materiales.tarjetas && m.materiales.tarjetas.length
            ? `
          <div class="section-divider"></div>
          <div class="subhead">Tarjetas con dibujos</div>
          ${listOrEmpty(m.materiales.tarjetas)}`
            : ""
        }
      </section>

      <section class="section" id="mes-${m.slug}-semanas">
        <h2 class="section__title">Semanas <span class="pill">${m.semanas ? m.semanas.length : 0}</span></h2>
        <p class="section__sub">Pulsa cada semana para ver su programación, grupo coloquial, rincones y rutina.</p>
        <div class="grid grid--3">
          ${byNumber(m.semanas || [], "numero")
            .map(
              (s) => `
            <a class="card" href="#/mes/${m.slug}/semana/${s.numero}" data-trimestre="${t.id}">
              <span class="card__num">S${s.numero}</span>
              <h3 class="card__title">Semana ${s.numero}</h3>
              <p class="card__sub">${esc(s.titulo || "")}</p>
              <div class="card__meta">
                <span>${s.esqueleto ? '<span class="tag tag--draft">Borrador</span>' : "Listo"}</span>
                <span class="card__cta">Abrir</span>
              </div>
            </a>`
            )
            .join("")}
        </div>
      </section>`;
  }

  function viewSemana(slug, numero) {
    const m = SITE.meses[slug];
    if (!m) return viewNotFound();
    const s = (m.semanas || []).find((x) => String(x.numero) === String(numero));
    if (!s) return viewNotFound();
    const t = trimestreOf(m);
    const v = visualOf(m.slug);

    const tabs = `
      <nav class="tabs" aria-label="Semanas del mes">
        ${byNumber(m.semanas, "numero")
          .map((x) => {
            const raw = (x.titulo || "").trim();
            const titCorto =
              raw.length > 30 ? `${raw.slice(0, 28)}…` : raw || `Semana ${x.numero}`;
            return `
          <a href="#/mes/${m.slug}/semana/${x.numero}" class="${
              String(x.numero) === String(numero) ? "is-active" : ""
            }" title="${esc(raw || `Semana ${x.numero}`)}"><span class="tabs__num">S${x.numero}</span><span class="tabs__tit">${esc(
              titCorto
            )}</span></a>`;
          })
          .join("")}
      </nav>`;

    const fa = (s.grupoColoquial && s.grupoColoquial.faseAnalisis) || {};
    const grupos = [
      ["espaciales", "Espaciales"],
      ["temporales", "Temporales"],
      ["causales", "Causales"],
      ["utilidad", "Utilidad"],
      ["origen", "Origen"],
      ["social", "Social"],
    ];

    const activeFases = Array.from(new Set(
      (s.rincones || []).map((r) => (r.tipo || "").toUpperCase()).filter(Boolean)
    ));

    // Mascota Kala distinta por número de semana (variar)
    const KALA_BY_WEEK = ["kala-saluda", "kala-lupa", "kala-idea", "kala-hoja"];
    const kalaVar = KALA_BY_WEEK[(parseInt(s.numero, 10) - 1) % KALA_BY_WEEK.length];

    return `
      <nav class="crumbs">
        <a href="#/">Inicio</a><span class="sep"></span>
        <a href="#/trimestre/${t.id}">${esc(t.nombre)}</a><span class="sep"></span>
        <a href="#/mes/${m.slug}">${esc(m.nombre)}</a><span class="sep"></span>
        <span>Semana ${s.numero}</span>
      </nav>

      <div class="notebook" data-trimestre="${t.id}">
        ${notebookHead(`${m.nombre} · Semana ${s.numero}`, "", { fases: activeFases, sete: v.sete })}
        <div class="hero-grid hero-grid--notebook">
          <div class="hero__text">
            <h1 class="page-title" style="margin-top:0">${esc(s.titulo || `Semana ${s.numero}`)}</h1>
            ${s.esqueleto ? '<p style="margin:-4px 0 0"><span class="tag tag--draft">Borrador</span> Esta semana está pendiente de rellenar.</p>' : ""}
          </div>
          <div class="hero__art" style="max-width:200px">${kalaBadge(`S${s.numero}`, { large: true, variant: kalaVar })}</div>
        </div>
      </div>

      ${tabs}
      ${semanaJumpNav(m.slug)}

      <section class="section" id="sem-${m.slug}-objetivos">
        <h2 class="section__title">Programación de la semana</h2>
        <p class="section__sub">Objetivo de las sesiones concretas.</p>
        ${listOrEmpty((s.programacion && s.programacion.objetivos) || [], { checks: true })}
      </section>

      <section class="section" id="sem-${m.slug}-materiales">
        <h2 class="section__title">Materiales <span class="pill">Semana ${s.numero}</span></h2>
        <p class="section__sub">Lo que necesitas preparar para grupo coloquial, rincones y rutina de pensamiento.</p>
        <div class="matgrid">
          <div class="matblock">
            <h4>Grupo coloquial · Lunes</h4>
            ${listOrEmpty((s.materiales && s.materiales.grupoColoquial) || [])}
          </div>
          <div class="matblock">
            <h4>Rincones · Martes y miércoles</h4>
            ${listOrEmpty((s.materiales && s.materiales.rincones) || [])}
          </div>
          <div class="matblock">
            <h4>Rutina de pensamiento · Jueves</h4>
            ${listOrEmpty((s.materiales && s.materiales.rutinaPensamiento) || [])}
          </div>
        </div>
      </section>

      <section class="section" id="sem-${m.slug}-gc">
        <h2 class="section__title">Grupo coloquial <span class="pill">${esc(
          (s.grupoColoquial && s.grupoColoquial.titulo) || ""
        )}</span></h2>

        <div class="phase">
          <div class="phase__name">Fase de motivación</div>
          ${
            s.grupoColoquial && s.grupoColoquial.faseMotivacion
              ? isPlaceholder(s.grupoColoquial.faseMotivacion)
                ? `<p class="muted"><em>${esc(s.grupoColoquial.faseMotivacion)}</em></p>`
                : `<p>${escMl(s.grupoColoquial.faseMotivacion)}</p>`
              : ""
          }
        </div>

        <div class="phase">
          <div class="phase__name">Fase de análisis</div>
          <p class="muted" style="margin-top:0">Preguntas a realizar y posibles respuestas.</p>
          ${grupos
            .map(([key, label]) =>
              fa[key] && fa[key].length
                ? `
              <div class="qa-group">
                <h5>${label}</h5>
                <ul>
                  ${fa[key]
                    .map((q) =>
                      isPlaceholder(q)
                        ? `<li class="muted"><em>${esc(q)}</em></li>`
                        : `<li>${escMl(q)}</li>`
                    )
                    .join("")}
                </ul>
              </div>`
                : ""
            )
            .join("")}
        </div>

        <div class="phase">
          <div class="phase__name">Fase de expresión</div>
          ${
            s.grupoColoquial && s.grupoColoquial.faseExpresion
              ? isPlaceholder(s.grupoColoquial.faseExpresion)
                ? `<p class="muted"><em>${esc(s.grupoColoquial.faseExpresion)}</em></p>`
                : `<p>${escMl(s.grupoColoquial.faseExpresion)}</p>`
              : ""
          }
        </div>
      </section>

      <section class="section" id="sem-${m.slug}-rincones">
        <h2 class="section__title">Rincones</h2>
        <p class="section__sub">Cada rincón es una propuesta para martes y miércoles.</p>
        ${(s.rincones || [])
          .map(
            (r) => `
          <div class="rincon">
            <span class="rincon__type" data-tipo="${esc((r.tipo || "").toUpperCase())}">
              ${rinconIcon(r.tipo)}${esc(r.tipo || "")}
            </span>
            <div class="rincon__desc">${
              isPlaceholder(r.descripcion)
                ? `<span class="muted"><em>${esc(r.descripcion)}</em></span>`
                : escMl(r.descripcion || "")
            }</div>
          </div>`
          )
          .join("")}
      </section>

      <section class="section" id="sem-${m.slug}-rutina">
        <h2 class="section__title">Rutina de pensamiento</h2>
        <div class="rp">
          <h3 class="rp__title">${esc((s.rutinaPensamiento && s.rutinaPensamiento.titulo) || "")}</h3>
          ${
            s.rutinaPensamiento && s.rutinaPensamiento.descripcion
              ? isPlaceholder(s.rutinaPensamiento.descripcion)
                ? `<p class="muted"><em>${esc(s.rutinaPensamiento.descripcion)}</em></p>`
                : `<p>${escMl(s.rutinaPensamiento.descripcion)}</p>`
              : ""
          }
        </div>
      </section>

      <nav class="tabs" aria-label="Navegación entre semanas" style="margin-top:32px">
        ${prevNextLinks(m, s)}
      </nav>`;
  }

  function prevNextLinks(m, s) {
    const idx = m.semanas.findIndex((x) => x.numero === s.numero);
    const prev = m.semanas[idx - 1];
    const next = m.semanas[idx + 1];
    const left = prev
      ? `<a href="#/mes/${m.slug}/semana/${prev.numero}">← Semana ${prev.numero}</a>`
      : `<a href="#/mes/${m.slug}">← Volver al mes</a>`;
    const right = next
      ? `<a href="#/mes/${m.slug}/semana/${next.numero}" style="margin-left:auto">Semana ${next.numero} →</a>`
      : `<a href="#/mes/${m.slug}" style="margin-left:auto">Mes completo →</a>`;
    return left + right;
  }

  function viewNotFound() {
    return `
      <div class="hero hero--book" data-trimestre="t1">
        <div class="hero-grid">
          <div class="hero__text">
            <div style="margin-bottom:18px">${banner("404 · Sin pistas", { sete: "sete-pensando" })}</div>
            <h1 class="hero__title">No encontrado</h1>
            <p class="hero__lead">
              La página que buscas no existe. Vuelve al <a href="#/">inicio</a>
              y sigue el rastro de Sete y Kala.
            </p>
          </div>
          <div class="hero__art">${heroIllustration()}</div>
        </div>
      </div>`;
  }

  // ───────────────── Router ─────────────────

  function parseRoute() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("/").filter(Boolean);
    if (parts.length === 0) return { kind: "home", trimestre: "t1" };
    if (parts[0] === "trimestre" && parts[1]) {
      return { kind: "trimestre", id: parts[1], trimestre: parts[1] };
    }
    if (parts[0] === "mes" && parts[1]) {
      const m = SITE.meses[parts[1]];
      if (!m) return { kind: "404" };
      const route = { kind: "mes", mes: parts[1], trimestre: m.trimestre };
      if (parts[2] === "semana" && parts[3]) {
        route.kind = "semana";
        route.semana = parts[3];
      }
      return route;
    }
    return { kind: "404" };
  }

  function render() {
    const route = parseRoute();
    setActiveAccent(route.trimestre);
    renderSidebar(route);
    setActiveLinks(route);

    let html = "";
    switch (route.kind) {
      case "home":      html = viewHome(); break;
      case "trimestre": html = viewTrimestre(route.id); break;
      case "mes":       html = viewMes(route.mes); break;
      case "semana":    html = viewSemana(route.mes, route.semana); break;
      default:          html = viewNotFound();
    }
    $main.innerHTML = `<div class="page-stack" data-route="${esc(route.kind)}">${html}</div>`;
    $main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });

    document.body.classList.remove("course-nav-open");
    if ($nav) $nav.classList.remove("is-open");
    const dt = document.querySelector(".course-drawer-toggle");
    if (dt) dt.setAttribute("aria-expanded", "false");
  }
  function fallbackSymbolFor(imgSrc = "") {
    const low = imgSrc.toLowerCase();
    if (low.includes("kala")) return "i-kala";
    return "i-sete";
  }
  function applyImageFallback(img) {
    if (!img || img.dataset.fallbackApplied === "true") return;
    const symbol = fallbackSymbolFor(img.getAttribute("src") || "");
    const altText = (img.getAttribute("alt") || "").trim();
    const box = document.createElement("span");
    box.className = "img-fallback";
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", altText || "Ilustración");
    box.innerHTML = `<svg viewBox="0 0 120 140" aria-hidden="true"><use href="#${symbol}"/></svg>`;
    img.dataset.fallbackApplied = "true";
    img.replaceWith(box);
  }
  function installImageFallbacks() {
    document.addEventListener(
      "error",
      (e) => {
        const el = e.target;
        if (!(el instanceof HTMLImageElement)) return;
        if (!(el.getAttribute("src") || "").startsWith("assets/img/")) return;
        applyImageFallback(el);
      },
      true
    );
  }

  // ───────────────── Init ─────────────────

  render();
  installImageFallbacks();
  window.addEventListener("hashchange", render);

  if ($menuToggle && $nav) {
    $menuToggle.addEventListener("click", () => {
      const open = $nav.classList.toggle("is-open");
      $menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const $drawerBackdrop = document.querySelector(".sidebar-backdrop");
  const $drawerToggle = document.querySelector(".course-drawer-toggle");
  function closeCourseDrawer() {
    document.body.classList.remove("course-nav-open");
    if ($drawerToggle) $drawerToggle.setAttribute("aria-expanded", "false");
  }
  if ($drawerToggle) {
    $drawerToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("course-nav-open");
      $drawerToggle.setAttribute("aria-expanded", String(open));
    });
  }
  if ($drawerBackdrop) {
    $drawerBackdrop.addEventListener("click", closeCourseDrawer);
  }
  if ($sidebar) {
    $sidebar.addEventListener("click", (e) => {
      if (e.target.closest("a[href^='#']")) closeCourseDrawer();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCourseDrawer();
      if ($nav) $nav.classList.remove("is-open");
      if ($menuToggle) $menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  if ($lastUpdated) {
    const now = new Date();
    $lastUpdated.textContent = now.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
})();
