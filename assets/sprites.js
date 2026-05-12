/* =====================================================================
 * Iconografía y mascotas en SVG inline — Estilo cuaderno Descubriendo
 * Se inyecta en el <body> al inicio del documento.
 * Uso: <svg><use href="#i-..."/></svg>
 * ===================================================================== */

(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const sprite = `
<svg xmlns="${SVG_NS}" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">

  <!-- ===================================================================
       Marca / Logo
  =================================================================== -->
  <symbol id="i-brand" viewBox="0 0 56 56">
    <circle cx="28" cy="28" r="26" fill="#FFF1C9" stroke="#7FAE3A" stroke-width="2"/>
    <path d="M14 30c4-10 14-14 28-12-2 12-10 18-22 20-6 1-8-3-6-8z" fill="#7FAE3A"/>
    <path d="M22 28h12 M22 32h10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="38" cy="38" r="7" fill="#fff" stroke="#D9342B" stroke-width="2.2"/>
    <path d="M42.5 42.5 L48 48" stroke="#D9342B" stroke-width="2.6" stroke-linecap="round"/>
  </symbol>

  <!-- ===================================================================
       Iconos de las 5 fases EBI — usadas en rincones y filmstrip
  =================================================================== -->

  <!-- ACTIVA: chispa / motivar -->
  <symbol id="i-activa" viewBox="0 0 24 24">
    <path d="M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l3 3 M16 16l3 3 M19 5l-3 3 M5 19l3-3"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
  </symbol>

  <!-- JUEGA: dado -->
  <symbol id="i-juega" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="3.5"
          fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="8" cy="8" r="1.6" fill="currentColor"/>
    <circle cx="16" cy="8" r="1.6" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
    <circle cx="8" cy="16" r="1.6" fill="currentColor"/>
    <circle cx="16" cy="16" r="1.6" fill="currentColor"/>
  </symbol>

  <!-- PRACTICA: lápiz -->
  <symbol id="i-practica" viewBox="0 0 24 24">
    <path d="M3 17l8-8 4 4-8 8H3v-4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 6l3-3 4 4-3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M11 9l4 4" stroke="currentColor" stroke-width="2"/>
  </symbol>

  <!-- EXPRESA: pincel -->
  <symbol id="i-expresa" viewBox="0 0 24 24">
    <path d="M14 4l6 6-9 9-6-6 9-9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M5 13l-2 6 6-2" fill="currentColor"/>
    <path d="M14 4l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>

  <!-- EVALUA: lupa -->
  <symbol id="i-evalua" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M16 16l5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="11" cy="11" r="2.5" fill="currentColor"/>
  </symbol>

  <!-- ===================================================================
       Iconos de materiales (cera, tijera, pegamento, punzón, dedo)
  =================================================================== -->
  <symbol id="i-cera" viewBox="0 0 24 24">
    <path d="M9 3l6 0 0 4 -6 0z" fill="currentColor" opacity="0.25"/>
    <path d="M8 7l8 0 0 12c0 1-1 2-2 2h-4c-1 0-2-1-2-2z M9 3l6 0 0 4 -6 0z"
          fill="none" stroke="currentColor" stroke-width="1.6"/>
  </symbol>
  <symbol id="i-tijera" viewBox="0 0 24 24">
    <circle cx="6" cy="7" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="6" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M9 9l12 9 M9 15l12-9" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="i-pegamento" viewBox="0 0 24 24">
    <path d="M9 2h6v4l2 3v9c0 2-1 4-5 4s-5-2-5-4V9l2-3z M9 6h6"
          fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>
  <symbol id="i-punzon" viewBox="0 0 24 24">
    <path d="M12 2l3 6h-6l3-6z M9 8h6v6c0 2-1.5 3-3 3s-3-1-3-3z M12 17v5"
          fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>
  <symbol id="i-dedo" viewBox="0 0 24 24">
    <path d="M9 4c0-1 1-2 2-2s2 1 2 2v8h2c2 0 4 1 4 4v3c0 2-1 3-3 3H9c-3 0-5-2-5-5l1-5c0-1 1-2 2-2h2V4z"
          fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>

  <!-- ===================================================================
       SETE (explorador del cuaderno)
       Sombrero safari verde, camisa kaki/verde, pelo naranja, mejillas
  =================================================================== -->
  <symbol id="i-sete" viewBox="0 0 110 140">
    <!-- piernas -->
    <rect x="36" y="108" width="14" height="22" rx="3" fill="#5C8A26"/>
    <rect x="56" y="108" width="14" height="22" rx="3" fill="#5C8A26"/>
    <rect x="34" y="128" width="18" height="6" rx="2" fill="#7E4C24"/>
    <rect x="54" y="128" width="18" height="6" rx="2" fill="#7E4C24"/>
    <!-- camisa kaki -->
    <path d="M28 80 L82 80 L80 112 L30 112 Z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.4" stroke-linejoin="round"/>
    <!-- bolsillo -->
    <rect x="44" y="92" width="14" height="10" rx="1.5" fill="#5C8A26" stroke="#3F2A18" stroke-width="0.9"/>
    <circle cx="51" cy="97" r="2.2" fill="#3F8DB5"/>
    <!-- cinturón -->
    <rect x="28" y="106" width="54" height="6" fill="#7E4C24" stroke="#3F2A18" stroke-width="0.8"/>
    <rect x="51" y="106" width="8" height="6" fill="#F4C84A" stroke="#3F2A18" stroke-width="0.8"/>
    <!-- cuello -->
    <path d="M44 78l11 6 11-6" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <!-- cara redonda -->
    <ellipse cx="55" cy="58" rx="26" ry="26" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.6"/>
    <!-- pelo naranja asomando -->
    <path d="M30 50c0-14 12-22 25-22s25 8 25 22c-5-3-10-4-15-4l-5 5-5-5c-7 0-15 1-25 4z" fill="#E07A2D" stroke="#3F2A18" stroke-width="1.4"/>
    <!-- sombrero safari -->
    <ellipse cx="55" cy="34" rx="38" ry="7" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.6"/>
    <path d="M30 34 C 30 18, 80 18, 80 34 Z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.6"/>
    <ellipse cx="55" cy="28" rx="18" ry="4" fill="#5C8A26" opacity="0.7"/>
    <!-- ojos grandes (estilo cuaderno) -->
    <ellipse cx="46" cy="60" rx="4.5" ry="5.5" fill="#fff" stroke="#3F2A18" stroke-width="1.4"/>
    <ellipse cx="64" cy="60" rx="4.5" ry="5.5" fill="#fff" stroke="#3F2A18" stroke-width="1.4"/>
    <circle cx="46" cy="61" r="2.6" fill="#3F2A18"/>
    <circle cx="64" cy="61" r="2.6" fill="#3F2A18"/>
    <circle cx="47" cy="60" r="0.9" fill="#fff"/>
    <circle cx="65" cy="60" r="0.9" fill="#fff"/>
    <!-- mejillas -->
    <circle cx="38" cy="68" r="3" fill="#F8B0A8" opacity="0.75"/>
    <circle cx="72" cy="68" r="3" fill="#F8B0A8" opacity="0.75"/>
    <!-- nariz -->
    <ellipse cx="55" cy="66" rx="1.8" ry="1.2" fill="#3F2A18" opacity="0.5"/>
    <!-- sonrisa abierta -->
    <path d="M47 72 Q55 80 63 72 Q55 76 47 72 Z" fill="#D9342B" stroke="#3F2A18" stroke-width="1.4"/>
    <path d="M50 73 Q55 76 60 73" stroke="#fff" stroke-width="1" fill="none" stroke-linecap="round"/>
    <!-- brazo izquierdo (saludando) -->
    <path d="M28 86 Q14 78 12 60 Q12 54 18 54 Q22 54 22 60 L26 90 Z"
          fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <!-- mano izquierda -->
    <circle cx="14" cy="56" r="5" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <!-- bandera roja -->
    <path d="M16 56 L16 30" stroke="#3F2A18" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M16 30 L34 32 L30 38 L34 44 L16 44 Z" fill="#D9342B" stroke="#3F2A18" stroke-width="1.4" stroke-linejoin="round"/>
    <!-- brazo derecho -->
    <path d="M82 86 Q92 88 90 100 Q88 106 84 104 L78 96 Z"
          fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
  </symbol>

  <!-- Sete señalando (brazo derecho extendido) -->
  <symbol id="i-sete-point" viewBox="0 0 110 140">
    <rect x="36" y="108" width="14" height="22" rx="3" fill="#5C8A26"/>
    <rect x="56" y="108" width="14" height="22" rx="3" fill="#5C8A26"/>
    <rect x="34" y="128" width="18" height="6" rx="2" fill="#7E4C24"/>
    <rect x="54" y="128" width="18" height="6" rx="2" fill="#7E4C24"/>
    <path d="M28 80 L82 80 L80 112 L30 112 Z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.4" stroke-linejoin="round"/>
    <rect x="44" y="92" width="14" height="10" rx="1.5" fill="#5C8A26" stroke="#3F2A18" stroke-width="0.9"/>
    <circle cx="51" cy="97" r="2.2" fill="#3F8DB5"/>
    <rect x="28" y="106" width="54" height="6" fill="#7E4C24" stroke="#3F2A18" stroke-width="0.8"/>
    <rect x="51" y="106" width="8" height="6" fill="#F4C84A" stroke="#3F2A18" stroke-width="0.8"/>
    <path d="M44 78l11 6 11-6" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <ellipse cx="55" cy="58" rx="26" ry="26" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.6"/>
    <path d="M30 50c0-14 12-22 25-22s25 8 25 22c-5-3-10-4-15-4l-5 5-5-5c-7 0-15 1-25 4z" fill="#E07A2D" stroke="#3F2A18" stroke-width="1.4"/>
    <ellipse cx="55" cy="34" rx="38" ry="7" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.6"/>
    <path d="M30 34 C 30 18, 80 18, 80 34 Z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.6"/>
    <ellipse cx="55" cy="28" rx="18" ry="4" fill="#5C8A26" opacity="0.7"/>
    <ellipse cx="46" cy="60" rx="4.5" ry="5.5" fill="#fff" stroke="#3F2A18" stroke-width="1.4"/>
    <ellipse cx="64" cy="60" rx="4.5" ry="5.5" fill="#fff" stroke="#3F2A18" stroke-width="1.4"/>
    <circle cx="46" cy="61" r="2.6" fill="#3F2A18"/>
    <circle cx="64" cy="61" r="2.6" fill="#3F2A18"/>
    <circle cx="38" cy="68" r="3" fill="#F8B0A8" opacity="0.75"/>
    <circle cx="72" cy="68" r="3" fill="#F8B0A8" opacity="0.75"/>
    <ellipse cx="55" cy="66" rx="1.8" ry="1.2" fill="#3F2A18" opacity="0.5"/>
    <path d="M47 72 Q55 80 63 72 Q55 76 47 72 Z" fill="#D9342B" stroke="#3F2A18" stroke-width="1.4"/>
    <path d="M28 84 L28 108 L34 108 L34 88 Z" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <path d="M82 84 Q104 72 108 62 L112 64 L106 74 L84 92 Z" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <path d="M108 60 L118 56 L120 60 L112 64 Z" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1"/>
  </symbol>

  <!-- Variantes ligeras: base + accesorio -->
  <symbol id="i-sete-book" viewBox="0 0 110 140">
    <use href="#i-sete" width="110" height="140"/>
    <rect x="34" y="84" width="38" height="28" rx="2" fill="#A67C52" stroke="#3F2A18" stroke-width="1.2"/>
    <rect x="38" y="88" width="30" height="18" rx="1" fill="#FEFBF3" stroke="#3F2A18" stroke-width="0.8"/>
    <path d="M42 94h22 M42 100h16" stroke="#3F2A18" stroke-width="0.8" stroke-linecap="round"/>
  </symbol>

  <symbol id="i-sete-search" viewBox="0 0 110 140">
    <use href="#i-sete" width="110" height="140"/>
    <circle cx="78" cy="68" r="10" fill="none" stroke="#3F8DB5" stroke-width="2.4"/>
    <path d="M85 76l10 10" stroke="#3F8DB5" stroke-width="2.4" stroke-linecap="round"/>
  </symbol>

  <symbol id="i-sete-party" viewBox="0 0 110 140">
    <use href="#i-sete" width="110" height="140"/>
    <path d="M18 22l3 7 7 2-7 3-3 7-3-7-7-3 7-2z" fill="#F4C84A" stroke="#3F2A18" stroke-width="0.9"/>
    <path d="M92 18l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#D9342B" stroke="#3F2A18" stroke-width="0.9"/>
    <path d="M52 6l2 5 5 1-5 2-2 5-2-5-5-2 5-1z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="0.8"/>
  </symbol>

  <symbol id="i-sete-think" viewBox="0 0 110 140">
    <use href="#i-sete" width="110" height="140"/>
    <ellipse cx="74" cy="60" rx="9" ry="11" fill="#FBE3C2" stroke="#3F2A18" stroke-width="1.2"/>
    <path d="M86 48q10-8 18-2" fill="none" stroke="#3F2A18" stroke-width="1.2" stroke-linecap="round" opacity="0.55"/>
    <path d="M90 42q8-6 14-1" fill="none" stroke="#3F2A18" stroke-width="1" stroke-linecap="round" opacity="0.45"/>
  </symbol>

  <symbol id="i-sete-ok" viewBox="0 0 110 140">
    <use href="#i-sete-point" width="110" height="140"/>
    <circle cx="106" cy="58" r="10" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1.4"/>
    <path d="M102 58l3 3 8-10" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>

  <symbol id="i-sete-compass" viewBox="0 0 110 140">
    <use href="#i-sete" width="110" height="140"/>
    <circle cx="72" cy="58" r="14" fill="#FFF1C9" stroke="#3F2A18" stroke-width="1.4"/>
    <path d="M72 50l4 14-4-4-4 4 4-14z" fill="#D9342B" stroke="#3F2A18" stroke-width="1" stroke-linejoin="round"/>
    <path d="M70 46h4" stroke="#3F2A18" stroke-width="1.2" stroke-linecap="round"/>
  </symbol>

  <symbol id="i-sete-run" viewBox="0 0 110 140">
    <g transform="translate(6 2) rotate(-3 55 100)">
      <use href="#i-sete" width="110" height="140"/>
    </g>
  </symbol>

  <!-- ===================================================================
       KALA (koala del cuaderno) — gris claro, panza crema, nariz negra grande
  =================================================================== -->
  <symbol id="i-kala" viewBox="0 0 120 130">
    <!-- patas inferiores -->
    <ellipse cx="40" cy="115" rx="10" ry="9" fill="#9F9D98" stroke="#3F2A18" stroke-width="1.4"/>
    <ellipse cx="80" cy="115" rx="10" ry="9" fill="#9F9D98" stroke="#3F2A18" stroke-width="1.4"/>
    <!-- cuerpo -->
    <ellipse cx="60" cy="92" rx="32" ry="30" fill="#B8B6B2" stroke="#3F2A18" stroke-width="1.6"/>
    <!-- panza -->
    <ellipse cx="60" cy="98" rx="22" ry="20" fill="#EFE9DC"/>
    <!-- orejas grandes peludas -->
    <ellipse cx="22" cy="40" rx="14" ry="16" fill="#B8B6B2" stroke="#3F2A18" stroke-width="1.6"/>
    <ellipse cx="22" cy="42" rx="8" ry="10" fill="#F8B0A8"/>
    <ellipse cx="22" cy="42" rx="4" ry="6" fill="#FBE3C2"/>
    <ellipse cx="98" cy="40" rx="14" ry="16" fill="#B8B6B2" stroke="#3F2A18" stroke-width="1.6"/>
    <ellipse cx="98" cy="42" rx="8" ry="10" fill="#F8B0A8"/>
    <ellipse cx="98" cy="42" rx="4" ry="6" fill="#FBE3C2"/>
    <!-- pelitos en la oreja izq -->
    <path d="M14 28 l2 -4 M22 22 l0 -4 M30 28 l-2 -4" stroke="#3F2A18" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M90 28 l2 -4 M98 22 l0 -4 M106 28 l-2 -4" stroke="#3F2A18" stroke-width="1.2" stroke-linecap="round"/>
    <!-- cabeza -->
    <ellipse cx="60" cy="54" rx="32" ry="30" fill="#C5C2BD" stroke="#3F2A18" stroke-width="1.6"/>
    <!-- cara interior crema -->
    <path d="M40 58 Q60 76 80 58 Q72 70 60 70 Q48 70 40 58 Z" fill="#EFE9DC"/>
    <!-- nariz negra grande -->
    <ellipse cx="60" cy="58" rx="11" ry="8" fill="#3F2A18"/>
    <ellipse cx="56" cy="55" rx="2.4" ry="1.6" fill="#fff" opacity="0.55"/>
    <!-- ojos -->
    <ellipse cx="44" cy="46" rx="4.5" ry="5" fill="#fff" stroke="#3F2A18" stroke-width="1.2"/>
    <ellipse cx="76" cy="46" rx="4.5" ry="5" fill="#fff" stroke="#3F2A18" stroke-width="1.2"/>
    <circle cx="44" cy="47" r="2.6" fill="#3F2A18"/>
    <circle cx="76" cy="47" r="2.6" fill="#3F2A18"/>
    <circle cx="45" cy="46" r="0.9" fill="#fff"/>
    <circle cx="77" cy="46" r="0.9" fill="#fff"/>
    <!-- mejillas -->
    <circle cx="34" cy="58" r="3" fill="#F8B0A8" opacity="0.55"/>
    <circle cx="86" cy="58" r="3" fill="#F8B0A8" opacity="0.55"/>
    <!-- sonrisa pequeña roja -->
    <path d="M53 68 Q60 74 67 68" stroke="#3F2A18" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M55 70 Q60 73 65 70 Q60 72 55 70 Z" fill="#D9342B"/>
    <!-- brazos sujetando rama -->
    <ellipse cx="28" cy="86" rx="8" ry="14" fill="#9F9D98" stroke="#3F2A18" stroke-width="1.4" transform="rotate(-22 28 86)"/>
    <ellipse cx="92" cy="86" rx="8" ry="14" fill="#9F9D98" stroke="#3F2A18" stroke-width="1.4" transform="rotate(22 92 86)"/>
  </symbol>

  <symbol id="i-kala-leaf" viewBox="0 0 120 130">
    <use href="#i-kala" width="120" height="130"/>
    <path d="M24 88c8-22 28-28 40-10-12 2-28 6-40 10z" fill="#6FA63A" stroke="#3F2A18" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="M30 86q12-8 22-6" fill="none" stroke="#3F2A18" stroke-width="0.8" stroke-linecap="round"/>
  </symbol>

  <symbol id="i-kala-teddy" viewBox="0 0 120 130">
    <use href="#i-kala" width="120" height="130"/>
    <ellipse cx="38" cy="102" rx="14" ry="12" fill="#8B5A2B" stroke="#3F2A18" stroke-width="1.2"/>
    <circle cx="34" cy="96" r="2.5" fill="#3F2A18"/>
    <circle cx="42" cy="96" r="2.5" fill="#3F2A18"/>
  </symbol>

  <symbol id="i-kala-idea" viewBox="0 0 120 130">
    <use href="#i-kala" width="120" height="130"/>
    <path d="M58 6l4 10 10 3-10 4-4 10-4-10-10-4 10-3z" fill="#F4C84A" stroke="#3F2A18" stroke-width="1.1"/>
    <path d="M48 14l3 5 5 2-5 2-3 5-3-5-5-2 5-2z" fill="#FFF1C9" stroke="#3F2A18" stroke-width="0.9" opacity="0.95"/>
  </symbol>

  <symbol id="i-kala-search" viewBox="0 0 120 130">
    <use href="#i-kala" width="120" height="130"/>
    <g transform="translate(78 38)">
      <circle r="9" fill="none" stroke="#3F8DB5" stroke-width="2"/>
      <path d="M6 6l6 6" stroke="#3F8DB5" stroke-width="2" stroke-linecap="round"/>
    </g>
  </symbol>

  <symbol id="i-kala-tree" viewBox="0 0 120 130">
    <use href="#i-kala" width="120" height="130"/>
    <path d="M14 120 L22 88 L30 120 Z" fill="#5C8A26" stroke="#3F2A18" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M18 96 L26 72 L34 96 Z" fill="#7FAE3A" stroke="#3F2A18" stroke-width="1" stroke-linejoin="round"/>
    <rect x="24" y="118" width="6" height="10" rx="1" fill="#7E4C24" stroke="#3F2A18" stroke-width="0.9"/>
  </symbol>

  <!-- ===================================================================
       BANDERÍN DE MADERA con clavos visibles, vetas y Sete colgando
       Se usa con <svg viewBox="0 0 600 130"><use href="#i-banner"/></svg>
       El texto se superpone con HTML (es responsive)
  =================================================================== -->
  <symbol id="i-banner" viewBox="0 0 600 130">
    <defs>
      <linearGradient id="wood-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="#C99462"/>
        <stop offset="50%" stop-color="#B07641"/>
        <stop offset="100%" stop-color="#8C5A2D"/>
      </linearGradient>
      <pattern id="wood-veta" x="0" y="0" width="600" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 4 Q150 0 300 4 T600 4" stroke="#7E4C24" stroke-width="0.6" fill="none" opacity="0.5"/>
        <path d="M0 14 Q150 12 300 14 T600 14" stroke="#7E4C24" stroke-width="0.5" fill="none" opacity="0.4"/>
      </pattern>
    </defs>
    <!-- tablón principal con esquinas levemente irregulares -->
    <path d="M30 30 L570 28 L580 60 L575 95 L25 92 L20 60 Z"
          fill="url(#wood-grad)" stroke="#5C3818" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 30 L570 28 L580 60 L575 95 L25 92 L20 60 Z"
          fill="url(#wood-veta)" stroke="none"/>
    <!-- Clavos a izquierda y derecha -->
    <g>
      <circle cx="40" cy="42" r="4" fill="#3F2A18"/>
      <circle cx="40" cy="42" r="1.4" fill="#A88A5C"/>
      <circle cx="40" cy="80" r="4" fill="#3F2A18"/>
      <circle cx="40" cy="80" r="1.4" fill="#A88A5C"/>
      <circle cx="560" cy="42" r="4" fill="#3F2A18"/>
      <circle cx="560" cy="42" r="1.4" fill="#A88A5C"/>
      <circle cx="560" cy="80" r="4" fill="#3F2A18"/>
      <circle cx="560" cy="80" r="1.4" fill="#A88A5C"/>
    </g>
    <!-- Sete colgando del banderín a la izquierda -->
    <g transform="translate(-26 -4) scale(0.85)">
      <use href="#i-sete" width="110" height="140"/>
    </g>
  </symbol>

  <!-- Versión sin Sete (cuando va dentro de breadcrumb pequeño) -->
  <symbol id="i-banner-plain" viewBox="0 0 480 100">
    <defs>
      <linearGradient id="wood-grad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="#C99462"/>
        <stop offset="50%" stop-color="#B07641"/>
        <stop offset="100%" stop-color="#8C5A2D"/>
      </linearGradient>
    </defs>
    <path d="M20 22 L460 22 L470 50 L465 78 L18 76 L12 50 Z"
          fill="url(#wood-grad2)" stroke="#5C3818" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="30" cy="34" r="3" fill="#3F2A18"/>
    <circle cx="30" cy="66" r="3" fill="#3F2A18"/>
    <circle cx="450" cy="34" r="3" fill="#3F2A18"/>
    <circle cx="450" cy="66" r="3" fill="#3F2A18"/>
  </symbol>

  <!-- ===================================================================
       BADGE DE NÚMERO con Kala detrás (estilo página del cuaderno)
       El número se superpone con HTML
  =================================================================== -->
  <symbol id="i-kala-badge" viewBox="0 0 100 100">
    <circle cx="58" cy="58" r="34" fill="#C45F2B" stroke="#3F2A18" stroke-width="1.6"/>
    <g transform="translate(8 0) scale(0.55)">
      <use href="#i-kala" width="120" height="130"/>
    </g>
    <circle cx="58" cy="58" r="22" fill="#FFF1C9" stroke="#3F2A18" stroke-width="1.4"/>
  </symbol>

  <!-- ===================================================================
       RUEDA DE LAS 5 FASES EBI
       Cada porción es una fase con su color e icono
  =================================================================== -->
  <symbol id="i-wheel" viewBox="0 0 200 200">
    <!-- 5 sectores de 72° cada uno -->
    <g transform="translate(100 100)">
      <!-- ACTIVA (top) -->
      <path d="M0 0 L 0 -90 A 90 90 0 0 1 85.6 -27.8 Z" fill="#B3964A"/>
      <!-- JUEGA (top-right) -->
      <path d="M0 0 L 85.6 -27.8 A 90 90 0 0 1 52.9 72.8 Z" fill="#D77A2E"/>
      <!-- PRACTICA (bottom-right) -->
      <path d="M0 0 L 52.9 72.8 A 90 90 0 0 1 -52.9 72.8 Z" fill="#7A6CAD"/>
      <!-- EXPRESA (bottom-left) -->
      <path d="M0 0 L -52.9 72.8 A 90 90 0 0 1 -85.6 -27.8 Z" fill="#4F8A7A"/>
      <!-- EVALUA (top-left) -->
      <path d="M0 0 L -85.6 -27.8 A 90 90 0 0 1 0 -90 Z" fill="#C97C8A"/>
      <!-- borde exterior -->
      <circle cx="0" cy="0" r="90" fill="none" stroke="#3F2A18" stroke-width="2"/>
      <!-- centro -->
      <circle cx="0" cy="0" r="22" fill="#FFF1C9" stroke="#3F2A18" stroke-width="2"/>
      <!-- iconos en cada porción -->
      <g style="color:#fff">
        <g transform="translate(-12 -68)"><use href="#i-activa" width="24" height="24"/></g>
        <g transform="translate(38 -22)"><use href="#i-juega" width="24" height="24"/></g>
        <g transform="translate(20 38)"><use href="#i-practica" width="24" height="24"/></g>
        <g transform="translate(-44 38)"><use href="#i-expresa" width="24" height="24"/></g>
        <g transform="translate(-62 -22)"><use href="#i-evalua" width="24" height="24"/></g>
      </g>
      <!-- mascota en el centro -->
      <g transform="translate(-9 -12) scale(0.18)"><use href="#i-sete" width="110" height="140"/></g>
    </g>
  </symbol>

  <!-- Hojita decorativa -->
  <symbol id="i-leaf" viewBox="0 0 60 60">
    <path d="M30 4c-12 6-22 18-22 30 0 8 5 16 14 20 9-4 14-12 14-20 0-12-6-22-6-30z"
          fill="currentColor" opacity="0.18"/>
    <path d="M22 28 Q30 22 38 28" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
  </symbol>

  <!-- Pino decorativo (paisaje hero) -->
  <symbol id="i-pino" viewBox="0 0 60 90">
    <path d="M30 8 L12 38 L20 38 L8 60 L20 60 L4 84 L56 84 L40 60 L52 60 L40 38 L48 38 Z"
          fill="#5C8A26" stroke="#3F2A18" stroke-width="1.4" stroke-linejoin="round"/>
    <rect x="26" y="80" width="8" height="10" fill="#7E4C24" stroke="#3F2A18" stroke-width="1.2"/>
  </symbol>

</svg>`;

  const div = document.createElement("div");
  div.innerHTML = sprite;
  document.body.appendChild(div.firstElementChild);
})();
