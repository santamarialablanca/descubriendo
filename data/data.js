/**
 * Datos del proyecto Descubriendo · 3 años
 * Edita SOLO este archivo para añadir o modificar contenido.
 * El sitio se renderiza automáticamente a partir de aquí.
 *
 * Convenciones:
 *  - Cada mes tiene: programacion, materiales, semanas[1..4]
 *  - Cada semana tiene: programacion, materiales, grupoColoquial (3 fases),
 *    rincones, rutinaPensamiento
 *  - Las cadenas pueden incluir saltos de línea con \n
 *  - Para enlaces externos usa: { texto: "...", url: "..." }
 */

window.SITE = {
  meta: {
    titulo: "Descubriendo",
    subtitulo: "Proyecto EBI · Educación Infantil 3 años",
    autor: "CSMB",
  },

  trimestres: [
    {
      id: "t1",
      nombre: "1.º Trimestre",
      color: "#A8623F",
      colorSuave: "#F5E6DD",
      meses: ["octubre", "noviembre", "diciembre"],
    },
    {
      id: "t2",
      nombre: "2.º Trimestre",
      color: "#446480",
      colorSuave: "#DDE7F0",
      meses: ["enero", "febrero", "marzo"],
    },
    {
      id: "t3",
      nombre: "3.º Trimestre",
      color: "#6B8556",
      colorSuave: "#E5EDDC",
      meses: ["abril", "mayo"],
    },
  ],

  meses: {
    // ──────────────────────────────────────────────────────────────────
    // OCTUBRE  contenido COMPLETO
    // ──────────────────────────────────────────────────────────────────
    octubre: {
      slug: "octubre",
      nombre: "Octubre",
      trimestre: "t1",
      titulo: "El colegio, las profesiones, río y mar",
      descripcion:
        "Mes de bienvenida y adaptación: nombre propio, rutinas, dependencias del colegio, profesiones y un primer contacto con río y mar.",

      programacion: {
        objetivos: [
          "Reconocer su nombre y diferenciarlo de los demás.",
          "Practicar las rutinas de aula y asimilar las normas del patio.",
          "Integrar las normas de alimentación, aseo y desplazamientos en el aula y en el colegio.",
          "Conocer las dependencias del colegio y las personas que trabajan en él.",
          "Comparar las características de río y mar.",
          "Conocer el fenómeno de la evaporación del agua.",
        ],
        contenidos: [
          "Nombre y nombre de compañeros.",
          "Trabajo de aula (rotar, jefes de equipo, material) y uso del patio (normas).",
          "Hábitos de alimentación, aseo y desplazamientos (normas de convivencia).",
          "El colegio y el personal que lo forman.",
          "El río y el mar: diferencias y similitudes.",
        ],
        criterios: [
          "Discrimina su nombre.",
          "Participa activamente de las rutinas del aula.",
          "Respeta las normas del patio.",
          "Reconoce alguna diferencia entre río y mar.",
          "Se adapta a las nuevas normas del colegio.",
          "Reconoce algunas personas que trabajan en el colegio y su función.",
          "Identifica las dependencias del colegio más cercanas: clase, patio, aula de psicomotricidad, enfermería",
        ],
      },

      materiales: {
        laminas: [
          "Lámina A2  Descubriendo 3 años · 1.º trimestre · 6",
          "Lámina A2  Descubriendo 3 años · 1.º trimestre · 1",
          "Lámina A2  Descubriendo 3 años · 1.º trimestre · 2",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "Nuestro nombre",
            items: [
              "Objeto 3D: una pelota.",
              "Bits con los nombres de los niños.",
              "Pinturas.",
              "Folios.",
              "Ordenador y altavoz.",
            ],
          },
          {
            numero: 2,
            titulo: "Aseo",
            items: [
              "Objeto 3D: jabón de manos.",
              "Palangana.",
              "Vasos de plástico o cartón.",
              "Colorante.",
              "Papel continuo.",
            ],
          },
          {
            numero: 3,
            titulo: "El río",
            items: [
              "Objeto 3D: piedras de río.",
              "Panel de un solo círculo del diagrama de Venn.",
              "Imágenes de animales, plantas y actividades del río.",
            ],
          },
          {
            numero: 4,
            titulo: "El mar",
            items: [
              "Objeto 3D: concha del mar.",
              "Panel de un solo círculo del diagrama de Venn.",
              "Tarjetas del mar.",
            ],
          },
        ],
        rincones: [
          { semana: 1, items: ["Cocinitas.", "Construcciones.", "Cuentos de clase.", "Plastilina."] },
          {
            semana: 2,
            items: [
              "Ensartables.",
              "Mantel individual plastificado.",
              "Comiditas de clase.",
              "Material profesor 1 (set de mesa): 7 manteles plastificados, tenedores, cucharas, platos, servilletas, vasos de plástico.",
              "Material profesor 2: puzzle de profesiones.",
            ],
          },
          {
            semana: 3,
            items: [
              "Cocinitas.",
              "7 puzzles de profesiones divididos por partes (cabeza, tronco, piernas).",
              "Tiras de cartulina para troquel del gorro de cocinero.",
            ],
          },
          {
            semana: 4,
            items: [
              "Peces ensartables.",
              "Material profesor 3: memory de animales marinos.",
              "Papel de seda.",
              "Pintura de dedos azul.",
            ],
          },
        ],
        rutinasPensamiento: [
          {
            numero: 1,
            titulo: "Nuestro nombre",
            items: [
              "4 cartulinas, cada una con un círculo del color de las mesas.",
              "Fotos de todos los niños.",
              "Nombres de todos los niños.",
            ],
          },
          {
            numero: 2,
            titulo: "El aseo",
            items: ["Presentación digital de disparates."],
          },
          {
            numero: 3,
            titulo: "Profesiones del cole",
            items: ["Presentación digital de disparates."],
          },
          {
            numero: 4,
            titulo: "Río y mar",
            items: ["Diagrama de Venn.", "Tarjetas del río y del mar."],
          },
        ],
        tarjetas: [
          "Pastilla de jabón, esponja, champú, peine.",
          "Jeringuilla, estetoscopio, tiritas, esparadrapo, betadine, termómetro, otoscopio.",
          "Pez, tiburón, rana, arena, piedras, agua dulce, agua salada, olas, hipopótamo, coral, cangrejo de mar, cangrejo de río, cocodrilo, barco.",
        ],
      },

      semanas: [
        // ?? Semana 1 ─────────────────────────────────
        {
          numero: 1,
          titulo: "Las profesiones de mi colegio",
          programacion: {
            objetivos: [
              "Conocer las profesiones más cercanas del colegio.",
              "Reconocer su nombre y el de algunos compañeros.",
              "Iniciarse en el juego simbólico relacionado con las profesiones.",
            ],
          },
          materiales: {
            grupoColoquial: [
              "Objeto 3D: borrador, gorro de cocinero, bata de profe, utensilio de madera para cocinar (un objeto por cada profesión).",
              "Utensilios de cocina, de enfermero y de profesor.",
            ],
            rincones: ["Ceras.", "Cocinitas.", "Pintura de dedos.", "Plastilina."],
            rutinaPensamiento: ["Disparates: las profesiones."],
          },
          grupoColoquial: {
            titulo: "Las profesiones de mi colegio",
            faseMotivacion:
              "3 objetos 3D: borrador, gorro de cocinero, bata de profe, utensilio de madera para cocinar (cocinero, profesora y enfermera).\n\nDejaremos los objetos 3D en el centro del aula tapados. Los niños tendrán que adivinar qué son siguiendo las pistas de la profe: se puede cocinar con él, sirve para\n\nCuando den con el objeto hablaremos sobre la profesión que lo utiliza y que están en nuestro cole.\n\nLes pondremos un vídeo sobre las profesiones y la canción «Las profesiones» de Teresa Rabal.",
            faseAnalisis: {
              espaciales: [
                "¿Dónde podemos encontrar cocineros? En restaurantes, colegios, empresas, cafeterías",
                "¿Dónde podemos encontrar enfermeros? En los hospitales, centros de salud, ambulancias, en mi colegio",
                "¿Y profesores? En los colegios, universidades",
                "¿Cómo son los cocineros? Les gusta mucho la comida, cocinar cosas ricas y nuevas, experimentar con sabores",
                "¿Cómo son los enfermeros? Personas a las que no les da miedo la sangre ni las agujas, valientes, delicados, cuidadosos.",
                "¿Cómo son los profesores? Les encanta enseñar, tienen mucha paciencia, son divertidos y buenos.",
              ],
              temporales: [
                "¿Cuándo nos atiende un enfermero? Cuando vamos al hospital a que nos curen, nos vacunen, a sacarnos sangre",
                "¿Cuándo vemos a los profesores? Cuando vamos al cole.",
                "¿Cuándo vemos a un cocinero? Cuando vamos a un restaurante, en el comedor del cole",
              ],
              causales: [
                "¿Qué pasaría si no existiesen esas profesiones? Que la gente y los niños no aprenderían, no habría restaurantes y no podríamos comer fuera de casa, no podrían vacunarnos ni curarnos.",
              ],
              utilidad: [
                "¿Qué hace un enfermero? Cura a las personas y ayuda a los médicos.",
                "¿Qué hace un profesor? Enseña a niños y adultos, les educa y les cuida.",
                "¿Qué hace un cocinero? Cocina y gracias a ellos podemos comer en restaurantes y en el cole.",
              ],
              social: ["¿Por qué creéis que son importantes estas profesiones?"],
              origen: ["¿Desde cuándo existen estas profesiones? Desde hace mucho tiempo."],
            },
            faseExpresion:
              "Los niños, con materiales y utensilios que tenemos en clase o que traigamos de casa, jugarán a ser enfermeros, profesores o cocineros (juego simbólico).",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Juego simbólico: cocinitas." },
            { tipo: "EXPRESA", descripcion: "Ficha 1: colorear las profesiones." },
            { tipo: "PRACTICA", descripcion: "Ficha 2: gorro de cocinero." },
            {
              tipo: "EXPRESA",
              descripcion:
                "Decorar una tira de cartulina con gomets (para usar luego con el gorro de cocinero).",
            },
          ],
          rutinaPensamiento: {
            titulo: "Disparates · Las profesiones del cole",
            descripcion:
              "Se proyecta la presentación digital «Disparates · Las profesiones del cole». Los alumnos identifican qué imágenes corresponden a profesiones del colegio y cuáles no.",
          },
        },

        // ?? Semana 2 ─────────────────────────────────
        {
          numero: 2,
          titulo: "Mi colegio",
          programacion: {
            objetivos: [
              "Conocer las dependencias del colegio.",
              "Reconocer al personal del colegio y su función.",
              "Asimilar normas básicas de desplazamientos por los pasillos.",
            ],
          },
          materiales: {
            grupoColoquial: [
              "Objeto 3D: ceras.",
              "Ordenador y proyector.",
              "Ceras.",
              "Gomets.",
              "Tiras de cartulina.",
            ],
            rincones: [
              "Ceras y cartulinas para la corona de cocinero.",
              "Cocinitas (juego simbólico «somos cocineros»).",
              "Plastilina.",
              "Cuentos.",
            ],
            rutinaPensamiento: ["Presentación digital sobre las profesiones."],
          },
          grupoColoquial: {
            titulo: "Mi colegio",
            faseMotivacion:
              "Objeto: bandeja de pinturas (algo relacionado con el colegio).\n\nCanción: «Voy al cole».\n\nLos niños estarán sentados en círculo y, mientras escuchan la canción, utilizarán las ceras para pintar en el papel continuo previamente colocado en el centro de la clase. La profesora puede repartir una cera a cada niño para hacerlo de forma ordenada.",
            faseAnalisis: {
              espaciales: [
                "¿Dónde podemos encontrar pinturas? En mi casa, en mi clase del cole.",
                "¿Cómo pueden ser las pinturas? Grandes, pequeñas, de colores, de madera",
                "¿Dónde estamos ahora? En nuestro cole.",
              ],
              temporales: [
                "¿Cuándo vamos al colegio? Cuando somos mayores de 3.",
                "¿Quién nos lleva al cole? Mamá, papá",
                "¿Quién está en el cole? Las profes, los niños, las cocineras",
                "¿Quién trabaja en el cole? Enfermera, conserje, cocineros, director, profes",
              ],
              causales: ["Si tenemos un problema, ¿quién nos puede ayudar? Las profes."],
              utilidad: [
                "¿Qué pasaría si no existiese el cole? No podríamos aprender muchas cosas que las profes nos enseñan ni jugar con nuestros amigos.",
              ],
              origen: [
                "¿Por qué se crearon los colegios? Para que todos los niños aprendiesen lo que se enseña en el colegio.",
              ],
            },
            faseExpresion:
              "Dar un paseo por el colegio para descubrir las distintas partes: patio, comedor, clases Aprovechamos para enseñarles cómo vamos en fila por las líneas azules de los pasillos.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Ensartables." },
            { tipo: "EXPRESA", descripcion: "Cuentos." },
            { tipo: "PRACTICA", descripcion: "Ficha 3: colorear la mochila con pintura de dedos." },
            { tipo: "EXPRESA", descripcion: "Ficha 5: coloreo a los exploradores Sete y Kala." },
          ],
          rutinaPensamiento: {
            titulo: "Disparates · Las profesiones del cole",
            descripcion:
              "Repetimos la rutina de la semana pasada para interiorizar lo trabajado.",
          },
        },

        // ?? Semana 3 ─────────────────────────────────
        {
          numero: 3,
          titulo: "¿Cómo somos? · Las partes de la cara",
          programacion: {
            objetivos: [
              "Identificar las partes de la cara y sus funciones.",
              "Reconocer diferencias entre personas (color de pelo, ojos, piel).",
              "Iniciarse en la representación de la figura humana.",
            ],
          },
          materiales: {
            grupoColoquial: [
              "Objeto 3D: muñeco/bebé.",
              "Material fotocopiable.",
              "Ordenador y proyector.",
              "Pajitas/palitos.",
            ],
            rincones: ["Cuentos.", "Punzones.", "Plastilina.", "Ceras."],
            rutinaPensamiento: ["Alegríatristeza · Clasificación."],
          },
          grupoColoquial: {
            titulo: "¿Cómo somos?",
            faseMotivacion:
              "Escucharemos la canción «Partes de la cara» y a continuación pondremos el juego interactivo Video Potato «Partes de la cara».\n\nLuego recitaremos la poesía:\n\n«En mi cara redondita\ntengo ojos y nariz,\ntambién tengo una boca\npara comer y reír.\nCon los ojos veo todo,\ncon la nariz hago achís\ny con la boca\ncomo palomitas de maíz.»",
            faseAnalisis: {
              espaciales: [
                "¿Dónde está la cara? En nuestra cabeza, encima del cuello.",
                "¿Cómo pueden ser los ojos? ¿Y el pelo? Los ojos redondos, de distintos colores; el pelo de distinta forma, color, más largo o más corto",
              ],
              temporales: [
                "¿Cuándo tenemos los ojos abiertos? ¿Y cerrados? Abiertos cuando estamos despiertos, cerrados cuando dormimos.",
                "¿Cuándo utilizamos la boca? Para hablar, comer",
              ],
              utilidad: [
                "¿Para qué sirven los ojos, la boca, las orejas? Para ver, oír, hablar, comer",
                "¿Qué pasaría si no tuviéramos ojos, boca, orejas? No podríamos ver, oír, cantar, silbar, reír",
              ],
              origen: [
                "¿De dónde son estas personas? (apoyo visual con imágenes de diferentes lugares del mundo).",
              ],
              social: [
                "¿Todos tenemos el mismo color de piel? No.",
                "¿Por qué son diferentes? Porque son de otros lugares.",
                "¿Qué piensas de estas diferencias? Que tenemos que ser amigos de todos y querer a todos igual.",
              ],
            },
            faseExpresion:
              "Poner una canción para representar la alegría con movimientos alegres y luego una más lenta para evocar la tristeza, con gestos pausados.\n\nDespués jugar al espejo emocional: poner caras de alegría, tristeza, enfado los niños tendrán que reproducirlas. Más tarde pueden salir de uno en uno, poner una cara y los demás adivinar la emoción.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Cuentos: buscar expresiones." },
            { tipo: "PRACTICA", descripcion: "Ficha 4: colocar las pegatinas de las partes de la cara." },
            {
              tipo: "EXPRESA",
              descripcion:
                "La profe dibuja un círculo en la mesa y con plastilina pondrán las partes de la cara.",
            },
            { tipo: "EXPRESA", descripcion: "Cocinitas." },
          ],
          rutinaPensamiento: {
            titulo: "Las partes y el todo · Las partes de la cara",
            descripcion:
              "Con Mr. Potato delante y las partes puestas (o el juego online correspondiente), trabajamos las partes de la cara.\n\nPreguntamos qué partes conocemos y para qué sirven. Una vez hablado de todas, preguntamos qué pasaría si nos faltara una parte: vamos preguntando por cada una para que entiendan su función.",
          },
        },

        // ?? Semana 4 ─────────────────────────────────
        {
          numero: 4,
          titulo: "Alegría y tristeza",
          programacion: {
            objetivos: [
              "Identificar las emociones de alegría y tristeza en sí mismo y en los demás.",
              "Asociar situaciones cotidianas a cada emoción.",
              "Expresar emociones con el cuerpo y la cara.",
            ],
          },
          materiales: {
            grupoColoquial: [
              "Objeto 3D: emoji triste y emoji contento.",
              "Emoji sonriente y triste.",
              "Papel continuo.",
              "Pintura de dedos.",
            ],
            rincones: ["Punzones y almohadillas.", "Papel de seda.", "Pintura de dedos."],
            rutinaPensamiento: ["Alegría y tristeza."],
          },
          grupoColoquial: {
            titulo: "Alegríatristeza",
            faseMotivacion:
              "Objeto 3D: emoji sonriente y triste.\n\nTodos sentados, les decimos que alguien ha venido a vernos: «¿Quién será?» Les enseñamos el emoji y les preguntamos cómo está (contento/alegre). Luego les preguntamos a cada uno cómo se sienten.\n\nCantamos la canción del «Tren de la alegría». La profe es la maquinista y se irán subiendo los niños que estén alegres. Tienen que poner una sonrisa en su cara para poder subir:\n\n«Súbete al tren de la alegría, súbete al tren de la ilusión,\nsúbete al tren de la fantasía, súbete al tren de esta canción,\ncon su chiki con su chaka con su chiki chiki chiki chaka.» (BIS)",
            faseAnalisis: {
              espaciales: [
                "¿Dónde está la alegría? Cuando estás con tu familia, juegas con tus amigos, vamos al patio, te vas de viaje, es tu cumpleaños",
              ],
              temporales: ["¿Cuándo te pones contento?"],
              causales: ["¿Por qué sentimos alegría?", "¿Qué te produce alegría?"],
              utilidad: ["¿Qué pasaría si no existiera la alegría? Estaríamos siempre tristes."],
              origen: ["¿En qué sitios te pones más contento? En el parque, en la playa"],
              social: [
                "¿Qué personas te ayudan a estar contento? Papás, profes, amigos",
                "¿Cómo podemos hacer que una persona esté contenta? Portándonos bien, mimándola, jugando con amigos",
              ],
            },
            faseExpresion:
              "En papel continuo cada niño pondrá su mano con pintura de dedos y la profe le dibujará una sonrisa.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Rasgar papel para favorecer la motricidad fina." },
            { tipo: "JUEGA", descripcion: "Buscar personajes alegres en cuentos de la clase." },
            { tipo: "PRACTICA", descripcion: "Plastilina en la cara pintada en la mesa." },
            { tipo: "EXPRESA", descripcion: "Ficha 6: pico la cara de cómo me siento hoy." },
          ],
          rutinaPensamiento: {
            titulo: "Clasificación · AlegríaTristeza",
            descripcion:
              "Se trabaja la rutina «Clasificación» con tarjetas de situaciones y caras. Los niños van clasificando cada tarjeta según corresponda a alegría o tristeza.",
          },
        },
      ],
    },

    // ──────────────────────────────────────────────────────────────────
    // NOVIEMBRE  esqueleto (rellenar)
    // ──────────────────────────────────────────────────────────────────
    noviembre: {
      slug: "noviembre",
      nombre: "Noviembre",
      trimestre: "t1",
      titulo: "El otoño · La cara · Van Gogh · La familia",
      descripcion:
        "Mes del otoño y la familia: descubrimos los árboles caducos y perennes, conocemos al pintor Van Gogh, exploramos las partes de la cara y la emoción de la alegría, y trabajamos el núcleo familiar.",

      programacion: {
        objetivos: [
          "Analizar la cara y sus partes.",
          "Comprender que existen diferentes características entre las personas en la cara.",
          "Reconocer la expresión facial de la alegría.",
          "Comprender el núcleo familiar y sus relaciones.",
          "Analizar diferencias entre distintos árboles: tipo de hoja.",
        ],
        contenidos: [
          "Pintor: Van Gogh.",
          "Taller científico: ciclo del agua.",
          "Tipos de árboles: diferencias hoja caduca y perenne.",
          "Atributos físicos persona/figura humana: cabeza-cara.",
          "Emoción: alegría.",
          "Cuentos motrices.",
          "Entorno: familia.",
        ],
        criterios: [
          "Enumera las partes de la cara.",
          "Localiza las partes de la cara en sí mismo y en los demás.",
          "Reconoce algunas de las funciones de las principales partes de la cara.",
          "Descubre en la cara de varias personas diferencias de pelo, ojos, piel.",
          "Relaciona situaciones alegres con la expresión facial correspondiente.",
          "Descubre árboles en función de los atributos trabajados.",
        ],
      },

      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · Los árboles y sus hojas",
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · El otoño",
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · Van Gogh",
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · La familia",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "Tipos de hojas",
            items: [
              "Objeto 3D: árbol.",
              "Papel continuo.",
              "Pinturas.",
              "Hojas de los árboles.",
            ],
          },
          {
            numero: 2,
            titulo: "El otoño",
            items: [
              "Objeto 3D: árbol de madera, cartulina, cartón…",
              "Papel continuo.",
              "Pinturas.",
              "Hojas de los árboles.",
            ],
          },
          {
            numero: 3,
            titulo: "Van Gogh",
            items: [
              "Objeto 3D: pincel o paleta de pintor.",
              "Ordenador, proyector y altavoz.",
              "Ficha del girasol.",
              "Pipas.",
              "Papel continuo.",
              "Pintura de dedos.",
            ],
          },
          {
            numero: 4,
            titulo: "Alegría–Tristeza",
            items: [
              "Objeto 3D: emoji sonriente y triste.",
              "Papel continuo.",
              "Pintura de dedos.",
            ],
          },
        ],
        rincones: [
          { semana: 1, items: ["Ficha 7: dibujo del otoño (para la carpeta).", "Hacer trocitos con hojas de otoño.", "Juego libre."] },
          { semana: 2, items: ["Ficha 9: pintar en la pizarra un árbol y dibujar hojas de otoño.", "Ficha 10: hacer con plastilina hojas de otoño."] },
          { semana: 3, items: ["Material profesor 5: puzzle de cuadros de Van Gogh (Los girasoles).", "Material profesor 6: puzzle de cuadros de Van Gogh (La habitación).", "Ficha 8: pegar pipas.", "Papel continuo: calcar con el proyector «La habitación»."] },
          { semana: 4, items: ["Ficha 11: hacer «mi familia» con plastilina.", "Ficha 12: buscar en cuentos familias."] },
        ],
        rutinasPensamiento: [
          { numero: 1, titulo: "Mi ropa de otoño", items: ["Panel de disparates.", "Tarjetas con dibujos de prendas de niño y niña que usamos en otoño.", "Tarjetas de otras prendas que usamos en otras estaciones."] },
          { numero: 2, titulo: "Mi ropa de otoño", items: ["Panel de disparates.", "Tarjetas con dibujos de prendas de niño y niña que usamos en otoño.", "Tarjetas de otras prendas que usamos en otras estaciones."] },
          { numero: 3, titulo: "Van Gogh · Compara y contrasta", items: ["Imágenes de cuadros de Van Gogh para comparar."] },
          { numero: 4, titulo: "Alegría–Tristeza", items: ["Diapositivas de acciones."] },
        ],
        tarjetas: [
          "Sandalias, camiseta manga corta, pantalón corto, bañador, gafas de sol, gorra, calcetines, vestido de tirantes, camiseta manga larga, jersey, deportivas, chaqueta, pantalón largo, gabardina.",
          "Lavabo, sofá, nevera, cama, secador de pelo, lavadora, espejo, lámpara, tv.",
          "Niño jugando al balón sonriendo, niño en columpio sonriente, niña saltando a la comba sonriente, niña escuchando un cuento sonriendo, niño que se ha caído triste, niña que le están regañando triste, niña enferma triste, niños jugando al corro de la patata.",
        ],
      },

      semanas: [
        {
          numero: 1,
          titulo: "El otoño · Tipos de hojas",
          programacion: { objetivos: ["Conocer los árboles del entorno y sus hojas.", "Diferenciar árboles caducos y perennes.", "Iniciarse en el trabajo cooperativo en gran grupo."] },
          materiales: {
            grupoColoquial: ["Objeto 3D: hojas de árboles.", "Papel continuo.", "Pinturas.", "Hojas de los árboles."],
            rincones: ["Ositos grandes y pequeños.", "Material profesor 4: puzzle del otoño.", "Hojas de otoño.", "Ficha para pegar las hojas en el árbol."],
            rutinaPensamiento: ["Spider del otoño."],
          },
          grupoColoquial: {
            titulo: "El otoño",
            faseMotivacion: "Objeto 3D: hojas de árbol de otoño.\n\nTapado el objeto bajo un pañuelo, les decimos que les vamos a dar pistas para adivinar de qué se trata. Diremos las siguientes adivinanzas:\n\n«En el árbol estoy,\nprimero verde soy,\npero amarilla seré,\ny al suelo caeré.»\n\n«En verano somos verdes,\ny en otoño marroncillas,\nel viento nos mece\nde noche y de día.»",
            faseAnalisis: {
              espaciales: ["¿Dónde podemos ver árboles? En el campo, monte, montañas, parques, en el patio del cole, en la urbanización…", "¿Cómo pueden ser los árboles? Altos, bajos, más pequeños, más grandes, con hojas, sin hojas, con flores, frutos…"],
              temporales: ["¿Cuándo se caen las hojas de los árboles? En otoño.", "¿Se les caen a todos los árboles? Solo a algunos."],
              causales: ["¿Por qué se caen las hojas? Porque hay menos horas de sol y las hojas no reciben la luz suficiente, se ponen amarillas y se caen.", "¿Por qué es importante cuidar los árboles? Porque viven animales en ellos, de su tronco obtenemos el papel y la madera, y gracias a ellos podemos respirar (nos dan oxígeno)."],
              utilidad: ["¿Para qué sirven los árboles? Para dar cobijo a los animales y para darnos oxígeno."],
              origen: ["¿De dónde nacen los árboles? De semillas.", "¿Qué partes tienen los árboles? Raíz, tronco y copa.", "¿Cuáles son sus colores? El tronco es marrón, y su copa suele ser verde o marrón."],
              social: ["¿Cómo cuidamos los árboles? Regándolos, podándolos, no arrancando sus hojas, tratándolos con respeto y cariño."],
            },
            faseExpresion: "Recogemos hojas de otoño para luego pegarlas en un árbol (algunas en las ramas y otras cayéndose) que dibujaremos previamente en papel continuo.\n\n¡Servirán también para los rincones de esta semana y la que viene! Trocear algunas hojas y guardarlas para la ficha del día siguiente.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Hacer trocitos de hojas de otoño (para utilizar en la Ficha 9)." },
            { tipo: "JUEGA", descripcion: "Realizar la silueta de un árbol con palitos depresores." },
            { tipo: "PRACTICA", descripcion: "Ficha 7: decorar el árbol con huellitas de color amarillo (pintura de dedos)." },
            { tipo: "EXPRESA", descripcion: "Ficha 9: pegar trocitos de hoja dentro de la silueta de la hoja." },
          ],
          rutinaPensamiento: { titulo: "Spider · El otoño", descripcion: "1. Mostramos cada imagen una a una para asegurarnos de que todos sepan qué es.\n2. Con cada imagen preguntamos qué es; con sus respuestas iremos sacando las categorías (TIEMPO, NATURALEZA-ENTORNO, COMIDAS, ROPA).\n3. Seguiremos sacando imágenes y preguntando a qué categoría va cada una. Cuando hayan identificado la categoría, las pegamos en el spider en la pata correspondiente.\n\n¡¡Haz tuya la rutina!! La profesora rellena mal alguna categoría y los alumnos identifican el error. Las tarjetas pueden estar boca abajo y los niños no eligen, sino que es sorpresa. También pueden imitar con gestos la tarjeta para que los compañeros adivinen." },
        },
        {
          numero: 2,
          titulo: "El otoño · Animales y colores",
          programacion: { objetivos: ["Identificar características del otoño en animales y plantas.", "Reconocer colores propios del otoño (marrón, naranja, amarillo, rojo).", "Iniciarse en la motricidad fina con técnicas de estampación."] },
          materiales: {
            grupoColoquial: ["Objeto 3D: el otoño (adivinanzas, cuentos y canciones de otoño).", "Fotocopia del erizo.", "Pintura marrón."],
            rincones: ["Hojas de otoño.", "Papel continuo (a ser posible blanco o amarillo).", "Esponjas.", "Pintura marrón.", "Cuentos."],
            rutinaPensamiento: ["Compara y contrasta · Otoño: «¿Cuál es diferente?»"],
          },
          grupoColoquial: {
            titulo: "El otoño",
            faseMotivacion: "Objeto 3D: esta vez haremos adivinanzas sobre el otoño.\n\nPodemos poner el cuento del otoño y la canción del otoño, y proyectar un vídeo sobre el otoño.",
            faseAnalisis: {
              espaciales: ["¿Podemos ver el otoño? En los animales que salen y los que se esconden o viajan a sitios calentitos, en los insectos, en los colores que ahora tienen las hojas, en los árboles, en el patio, en la ropa, en la lluvia y el frío."],
              temporales: ["¿Cuándo llega el otoño? Después del verano, cuando estamos empezando el cole.", "¿Dura mucho tiempo? Hasta que llega el invierno en diciembre.", "¿Qué hacen los animales? Algunos se esconden por el frío, otros guardan comida, otros duermen, otros viajan lejos para estar más calentitos."],
              causales: ["¿Por qué se caen las hojas de los árboles? Porque hay menos horas de sol y las hojas no reciben la luz suficiente, se ponen amarillas y se caen.", "¿Por qué es importante cuidar los árboles y los animales? Porque hay que tratar con respeto a todos los seres vivos."],
              utilidad: ["¿Para qué sirve el otoño? Para que los árboles crezcan más fuertes y puedan dar frutos. El cambio de estaciones es importante (lluvias que llenan lagos, ríos…)."],
              origen: ["¿Cuáles son los colores del otoño? Marrón, naranja, amarillo, rojo…"],
              social: ["¿Cómo cuidamos los árboles y los animales del otoño? Regando los árboles, no arrancando hojas, tratando con respeto a los animales, dándoles comida."],
            },
            faseExpresion: "Repartir un erizo a cada niño para que lo coloreen de marrón. Poner la canción del otoño mientras trabajan.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "En papel continuo, poner hojas de otoño enteras con un poco de pegamento. Después, con esponja y pintura marrón, dejar la silueta." },
            { tipo: "EXPRESA", descripcion: "Poner trocitos de hojas en los pinchos del erizo que hicimos en GC." },
            { tipo: "PRACTICA", descripcion: "Buscar en cuentos elementos del otoño." },
            { tipo: "EXPRESA", descripcion: "Ficha 10: decorar el paisaje de otoño con las pegatinas (botas de agua, paraguas y nube)." },
          ],
          rutinaPensamiento: { titulo: "Compara y contrasta · El otoño", descripcion: "Recordar a los niños lo aprendido sobre el otoño. Mostrar parejas de imágenes y preguntar «¿Cuál es diferente?»: identificar qué pertenece al otoño y qué no." },
        },
        {
          numero: 3,
          titulo: "Van Gogh",
          programacion: { objetivos: ["Acercarse a la figura del pintor Van Gogh y a sus cuadros más conocidos.", "Trabajar el color amarillo y las mezclas con pintura de dedos.", "Iniciarse en la apreciación artística."] },
          materiales: {
            grupoColoquial: ["Objeto 3D: pincel o paleta de pintor.", "Ordenador, proyector y altavoz.", "Ficha del girasol.", "Bolitas de papel de seda amarillo/naranja."],
            rincones: ["Material profesor 5: puzzle de cuadros de Van Gogh (Los girasoles).", "Material profesor 6: puzzle de cuadros de Van Gogh (La habitación).", "Papel continuo: calcar con el proyector «La habitación»."],
            rutinaPensamiento: ["Sin rutina de pensamiento esta semana."],
          },
          grupoColoquial: {
            titulo: "Van Gogh",
            faseMotivacion: "Objeto 3D: pincel o paleta de pintor.\n\nDejamos la paleta o pincel en el suelo, como si hubiera aparecido de repente. Les preguntamos: «Chicos, ¿qué es esto?». Hablamos de la paleta o pincel, objetos que usan los pintores, y les decimos que hay un pintor muy famoso que se llamaba Van Gogh.\n\nPoesía:\n«Escucha, te voy a hablar\nde un artista singular,\nsin oreja se quedó\ndespués de una discusión.\nPinta girasoles, retratos y flores,\na París Van Gogh viajó,\npues quería ser pintor;\nen Arlés casa compró\ny amarillo es su color.»\n\nLes pondremos un vídeo sobre la biografía de Van Gogh para niños.",
            faseAnalisis: {
              espaciales: ["¿Dónde nació Van Gogh? En Holanda.", "¿Dónde están sus cuadros? En los museos (MoMA, Orsay, National Gallery de Londres)."],
              temporales: ["¿Sus cuadros son nuevos o antiguos? Son antiguos.", "¿Era un niño o una persona mayor? Fue un niño que luego se hizo mayor."],
              causales: ["¿Por qué pintaba Van Gogh? Porque disfrutaba mucho pintando."],
              utilidad: ["¿Para qué sirve un cuadro? Sirve para decorar, para que quede bonito.", "¿Qué necesitas para pintar un cuadro? Pincel, lienzo, acuarelas, caballete, imaginación, ganas, una idea de lo que quieres pintar…"],
              origen: ["¿Por qué empezó a pintar Van Gogh? Porque desde pequeño le gustaba mucho pintar."],
              social: ["Si vamos a un museo a ver cuadros, ¿cómo nos comportamos? En silencio, sin tocar los cuadros, sin correr, respetando a los demás visitantes."],
            },
            faseExpresion: "Todos a la vez realizarán la Ficha 8 en la que tendrán que pegar pipas en el centro del girasol.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Material profesor 5: puzzle de cuadros de Van Gogh (Los girasoles)." },
            { tipo: "EXPRESA", descripcion: "«Somos pintores»: por equipos, pintar en papel continuo con pintura de dedos y pinceles." },
            { tipo: "PRACTICA", descripcion: "Pegar pipas de girasol en el girasol (Ficha 8)." },
            { tipo: "EXPRESA", descripcion: "Collage «La noche estrellada» (para decorar el pasillo). Opciones: gomets, papeles, pintura, trozos de tela…" },
          ],
          rutinaPensamiento: { titulo: "Sin rutina de pensamiento", descripcion: "Esta semana se dedica el tiempo de rutina de pensamiento a la creación del collage de «La noche estrellada»." },
        },
        {
          numero: 4,
          titulo: "La familia",
          programacion: { objetivos: ["Identificar el núcleo familiar y los miembros que lo componen.", "Reconocer las dependencias de la casa y su función.", "Trabajar la representación de la figura humana en familia."] },
          materiales: {
            grupoColoquial: ["Objeto 3D: lámpara, manta, utensilio de cocina…", "Ordenador y proyector."],
            rincones: ["Fotocopias de tipos de casas.", "Pinturas.", "Muñecos."],
            rutinaPensamiento: ["Disparates · Los elementos de una casa."],
          },
          grupoColoquial: {
            titulo: "La familia",
            faseMotivacion: "Objeto 3D: lámpara, manta o utensilio de cocina…\n\nDespués de que los niños hayan adivinado a través de pistas (sirve para alumbrar, está en casa, en varias habitaciones…) el objeto del que se trata, les pondremos las canciones «Yo tengo una casita» y «Mi casa».\n\nDespués proyectaremos diferentes tipos de casas y veremos las diferencias entre unas y otras.",
            faseAnalisis: {
              espaciales: ["¿Qué espacios principales tiene una casa? Cocina, baño, dormitorio, salón…", "¿En qué parte de la casa comemos? En la cocina, comedor.", "¿En qué parte de la casa nos duchamos? En el cuarto de baño.", "¿En qué parte vemos la tele? En el salón.", "¿En qué parte dormimos? En nuestro cuarto."],
              temporales: ["¿Cuándo estamos en casa? Para dormir, cuando volvemos del cole, los fines de semana…", "¿Cuándo usamos la cocina? Para comer, cocinar, desayunar, merendar…", "¿Cuándo usamos el baño? Para asearnos, ir al WC, lavarnos los dientes…"],
              causales: ["¿Por qué vivimos en una casa? Para protegernos de los cambios de tiempo, tener un sitio donde dormir y comer…", "¿Por qué es importante cuidar nuestra casa? Para tener siempre un sitio agradable y bonito para vivir.", "¿Por qué es importante mantener nuestra casa limpia? Por estar a gusto y limpios en casa."],
              utilidad: ["¿Para qué sirve una servilleta? Para limpiarnos la boca al comer.", "¿Para qué sirve una cacerola? Para cocinar.", "¿Para qué sirve una cama? Para dormir.", "¿Para qué sirve una bañera? Para lavarnos."],
              origen: ["¿Desde cuándo existen las casas? Desde siempre, aunque han ido cambiando. Al principio eran cuevas, casas de barro…"],
              social: ["¿Quién puede venir a nuestra casa? Familiares, amigos…", "Cuando viene alguien, ¿cómo me tengo que portar? Muy bien, ser educado, cariñoso y obedecer."],
            },
            faseExpresion: "Colorear los distintos tipos de casas. Preguntar a los niños y, en función del tipo de vivienda, escoger casa o edificio (varias opciones para elegir).",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Con los muñecos de la clase, jugar a las familias." },
            { tipo: "PRACTICA", descripcion: "Ficha 11: dibujo a mi familia." },
            { tipo: "EXPRESA", descripcion: "Con los bloques lógicos, hacer una casita." },
            { tipo: "EXPRESA", descripcion: "Ficha 12: «Esta es mi familia»." },
          ],
          rutinaPensamiento: { titulo: "Disparates · Los elementos de una casa", descripcion: "Utilizaremos la presentación digital de disparates de «Elementos de una casa».\n\n¡¡Haz tuya la rutina!! Adivina-adivinanza: en gran grupo, un niño elige un objeto de casa y, sin que lo vean los demás, explica mediante gestos qué objeto es. Los demás tendrán que adivinarlo." },
        },
      ],
    },

    // ──────────────────────────────────────────────────────────────────
    // DICIEMBRE  esqueleto (rellenar)
    // ──────────────────────────────────────────────────────────────────
    diciembre: {
      slug: "diciembre",
      nombre: "Diciembre",
      trimestre: "t1",
      titulo: "Animales · El enfado · Plácido Domingo · Navidad",
      descripcion:
        "Mes de los animales y la Navidad: clasificamos animales de casa y granja, descubrimos la emoción del enfado, conocemos al cantante madrileño Plácido Domingo y celebramos la Navidad con villancicos y belén.",

      programacion: {
        objetivos: [
          "Clasificar los animales domésticos: casa/granja.",
          "Conocer los cuidados de los animales.",
          "Aumentar su autonomía a la hora de comer y de su aseo.",
          "Descubrir el enfado en sí mismo y en los demás.",
          "Dramatizar corporalmente un cuento.",
        ],
        contenidos: [
          "Animales domésticos y sus cuidados: casa/granja.",
          "Hábitos saludables: alimentos / aseo.",
          "Emoción: enfado.",
          "Fiestas y personajes de Madrid: Plácido Domingo.",
          "Teatro: dramatización de un villancico.",
        ],
        criterios: [
          "Distingue entre animales casa/granja.",
          "Identifica el enfado en sí mismo y en los demás.",
          "Es capaz de comer solo.",
          "Participa y se desenvuelve en la dramatización de un cuento.",
        ],
      },

      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · Animales domésticos y de granja",
          "Lámina A2 — Descubriendo 3 años · 1.º trimestre · Enfado–Alegría",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "Animales domésticos",
            items: [
              "Objeto 3D: animales de juguete.",
              "Cuento: «El topo que quería saber quién se había hecho aquello en su cabeza».",
              "Materiales para hacer el Belén de la clase: paja, musgo, lana…",
            ],
          },
          {
            numero: 2,
            titulo: "El enfado",
            items: [
              "Objeto 3D: emoticono de enfado.",
              "Una caja.",
              "Ordenador y proyector.",
              "Ficha de la cara enfadada.",
              "Pintura roja.",
            ],
          },
          {
            numero: 3,
            titulo: "Plácido Domingo",
            items: [
              "Objeto 3D: micrófono.",
              "Ordenador y altavoz.",
              "Papel pinocho negro.",
              "Pintura blanca de cara.",
            ],
          },
          {
            numero: 4,
            titulo: "La Navidad",
            items: [
              "Objeto 3D: adorno de Navidad (bola, estrella, espumillón…).",
              "Papel continuo.",
              "Pintura de dedos verde.",
              "Pinceles, rodillos, esponjas…",
            ],
          },
        ],
        rincones: [
          { semana: 1, items: ["Animales de granja y domésticos.", "Punzones.", "Goma elástica para las caretas.", "Pinturas.", "Pintura de dedos amarilla."] },
          { semana: 2, items: ["Cuentos de la clase.", "Papel de seda rojo para rasgar.", "Pegamentos.", "Decoración Navidad: fotocopias de bolas, estrellas, campanas, regalos, árbol…"] },
          { semana: 3, items: ["Decoración Navidad: fotocopias de bolas, estrellas, campanas, regalos, árbol…", "Recortes carta a los Reyes Magos.", "Pintura de dedos roja y amarilla.", "Música de Plácido Domingo."] },
          { semana: 4, items: ["Materiales para el Belén de clase.", "Cartulinas para postal de Navidad.", "Plastilina.", "Cuentos de Navidad."] },
        ],
        rutinasPensamiento: [
          { numero: 1, titulo: "Spider · Animales domésticos y salvajes", items: ["Imágenes de animales.", "Panel spider con 5 categorías: ¿Dónde viven?, ¿Qué comen?, ¿Qué cuidados necesitan?, ¿Para qué sirven?, ¿Cómo nacen?"] },
          { numero: 2, titulo: "Disparates · Árbol de Navidad", items: ["Panel de disparates.", "Tarjetas con dibujos de adornos de Navidad.", "Árbol de Navidad."] },
          { numero: 3, titulo: "Disparates · Árbol de Navidad (repaso)", items: ["Mismo material que la rutina anterior."] },
          { numero: 4, titulo: "Diagrama de Venn · Enfado–Alegría", items: ["Diagrama de Venn.", "Tarjetas con dibujos de acciones alegres y enfadadas."] },
        ],
        tarjetas: [
          "Adornos del árbol: bola, espumillón, estrella, cascabel, luces, angelito, piña de purpurina.",
          "Niño enfadado apartado del resto, niña enfadada en un rincón de la clase, niño enfadado en la puerta de una tienda, niña enfadada tirada en el suelo (pataleta).",
        ],
      },

      semanas: [
        {
          numero: 1,
          titulo: "Animales domésticos",
          programacion: {
            objetivos: [
              "Clasificar los animales según vivan en casa o en la granja.",
              "Conocer los productos y cuidados de los animales.",
              "Iniciarse en la motricidad fina con técnica de estampación.",
            ],
          },
          materiales: {
            grupoColoquial: ["Objeto 3D: animales de juguete.", "Cuento «El topo que quería saber quién se había hecho aquello en su cabeza»."],
            rincones: ["Animales de granja y domésticos.", "Punzones.", "Goma elástica para las caretas.", "Pinturas.", "Pintura de dedos amarilla."],
            rutinaPensamiento: ["Panel spider con tarjetas de animales."],
          },
          grupoColoquial: {
            titulo: "Animales domésticos",
            faseMotivacion: "Objeto 3D: animales de juguete.\n\nMetemos un perro en una mochila; un niño tendrá que meter la mano dentro y adivinar, solo por el tacto, qué animal es.\n\nLuego contamos el cuento: «El topo que quería saber quién se había hecho aquello en su cabeza».",
            faseAnalisis: {
              espaciales: ["¿Dónde podemos encontrar animales? En la calle, en el zoo, en una granja…", "¿Qué animales domésticos grandes conoces? ¿Y pequeños?"],
              temporales: ["¿Cómo se llaman cuando son pequeños? Cachorro, cordero, ternero, becerro…"],
              causales: ["¿Te gustan los animales? ¿Cuál es tu animal doméstico favorito?", "¿Te da miedo algún animal doméstico?"],
              utilidad: ["Imitar algunos sonidos de animales domésticos.", "¿Qué nos dan los animales domésticos? Alimentos, lana…", "¿Qué pueden hacer para llamar nuestra atención? Moverse, saltar…"],
              origen: ["¿Quién hace los sonidos: beeee, muuuuu, miauuuu? Vaca, gato, oveja…", "Si te encuentras una pluma, ¿de qué animal podría ser? De un pájaro."],
              social: ["¿Cómo debemos comportarnos con los animales? Para que estén bien cuidados, ¿qué debemos hacer? Alimentarlos, tratarles bien…"],
            },
            faseExpresion: "Todos a la vez, colorear la careta de cerdito en la Ficha 15. Se la llevarán el viernes.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Ficha 13: estampar la mano en amarillo para hacer un pollito dentro del corral." },
            { tipo: "JUEGA", descripcion: "Jugar y clasificar en la mesa: agrupar los animales (domésticos y de granja) en dos círculos pintados en la mesa." },
            { tipo: "PRACTICA", descripcion: "Ficha 14: rodear los animales de la granja." },
            { tipo: "EXPRESA", descripcion: "Ficha 15: picar la careta del cerdito que previamente han coloreado en GC." },
          ],
          rutinaPensamiento: { titulo: "Spider · Animales salvajes y domésticos", descripcion: "1. Mostramos cada imagen una a una para asegurarnos de que todos sepan qué es.\n2. Con cada imagen preguntamos qué es; con sus respuestas iremos sacando las categorías: ¿DÓNDE VIVEN?, ¿QUÉ COMEN?, ¿QUÉ CUIDADOS NECESITAN?, ¿PARA QUÉ SIRVEN?, ¿CÓMO NACEN?\n3. Seguiremos sacando imágenes y preguntando a qué categoría va cada una. Cuando hayan identificado la categoría, las pegamos en el spider en la pata correspondiente.\n\n¡¡Haz tuya la rutina!! La profesora rellena mal alguna categoría y los alumnos identifican el error. Las tarjetas pueden estar boca abajo y los niños no eligen, sino que es sorpresa." },
        },
        {
          numero: 2,
          titulo: "El enfado · Decoración de Navidad",
          programacion: {
            objetivos: [
              "Reconocer la emoción del enfado en uno mismo y en los demás.",
              "Iniciarse en la decoración navideña como expresión plástica.",
              "Trabajar la motricidad fina con técnica de rasgado y pegado.",
            ],
          },
          materiales: {
            grupoColoquial: ["Objeto 3D: adorno de Navidad.", "Papel continuo.", "Ordenador y proyector.", "Pintura de dedos verde.", "Pinceles, rodillos, esponjas…"],
            rincones: ["Cuentos de la clase.", "Papel de seda rojo para rasgar.", "Pegamentos.", "Decoración Navidad: fotocopias de bolas, estrellas, campanas, regalos, árbol…"],
            rutinaPensamiento: ["Ordenador y proyector para presentación de disparates."],
          },
          grupoColoquial: {
            titulo: "La Navidad",
            faseMotivacion: "Objeto 3D: adorno de Navidad (bola, estrella, espumillón…).\n\nHablaremos en grupo de la Navidad: qué es, cuánto dura, qué es lo que pasa…\n\nLuego escucharemos villancicos populares y les contaremos un cuento de Navidad.",
            faseAnalisis: {
              espaciales: ["¿Qué es la Navidad? La Navidad es la época en la que se celebra el nacimiento del Niño Jesús.", "¿Dónde se produce la Navidad? En todos los países del mundo.", "¿Cómo celebramos la Navidad? Cantando villancicos, poniendo el árbol, estando en familia, descansando, viajando, haciendo manualidades…"],
              temporales: ["¿Cuándo es la Navidad? En invierno, en diciembre."],
              causales: ["¿Por qué celebramos la Navidad? Porque celebramos el nacimiento del Niño Jesús."],
              utilidad: ["¿Quiénes celebramos la Navidad? Los cristianos."],
              origen: ["¿Desde cuándo se celebra la Navidad? Desde hace muchos, muchos años."],
              social: ["¿Cómo celebramos la Navidad? Haciendo reuniones en familia, yendo a la iglesia, yendo a la cabalgata de los Reyes Magos…"],
            },
            faseExpresion: "Hacer un árbol de Navidad con papel continuo para decorar la puerta o el pasillo de cada clase. Todos colorearán de verde con pintura de dedos (esponjas, pinceles…) y en los rincones realizarán decoración para ponerla en el árbol.\n\nCuando terminen, rasgar papel de seda rojo y amarillo. Guardarlo para rincones.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Colorear adornos de Navidad para decorar el árbol." },
            { tipo: "EXPRESA", descripcion: "Ficha 19: pintar la portada para los trabajos de la carpeta. Opcional: recortar la estrella fugaz para pegarla en una cartulina." },
            { tipo: "PRACTICA", descripcion: "Ficha 16: decorar con papel de seda rojo y amarillo la bola de Navidad." },
            { tipo: "EXPRESA", descripcion: "Nacimiento para colorear y guardar en la carpeta. Dibujar sonrisa al Niño Jesús, María y José." },
          ],
          rutinaPensamiento: { titulo: "Disparates · El árbol de Navidad", descripcion: "Utilizaremos la presentación digital de disparates de «El árbol de Navidad».\n\n¡¡Haz tuya la rutina!! Adivina-adivinanza: en gran grupo, un niño elige algún objeto del árbol y, sin que lo vean los demás, explica mediante gestos qué objeto es. Los demás tienen que adivinarlo." },
        },
        {
          numero: 3,
          titulo: "Plácido Domingo",
          programacion: {
            objetivos: [
              "Conocer al cantante madrileño Plácido Domingo.",
              "Iniciarse en la apreciación musical.",
              "Trabajar la mezcla de colores rojo + amarillo = naranja.",
            ],
          },
          materiales: {
            grupoColoquial: ["Objeto 3D: micrófono.", "Ordenador y altavoz.", "Papel pinocho negro.", "Música de Plácido Domingo."],
            rincones: ["Decoración Navidad: fotocopias de bolas, estrellas, campanas, regalos, árbol…", "Recortes carta a los Reyes Magos.", "Pintura de dedos roja y amarilla."],
            rutinaPensamiento: ["Repetir la rutina de la semana pasada."],
          },
          grupoColoquial: {
            titulo: "Plácido Domingo",
            faseMotivacion: "Objeto 3D: micrófono.\n\nAdivinanza:\n«Parezco un chupa-chups, pero no me puedes comer,\nme usan los cantantes para que se les oiga mejor.\n¿Sabes ya quién soy?»\n\nLes diremos que no solo los cantantes usan los micrófonos: los periodistas que vemos en la tele también los usan para entrevistar a la gente.\n\nLes preguntamos si quieren hacer una entrevista con ese micro y un niño voluntario hará de Plácido Domingo.\n\nBiografía: nació el 21 de enero de 1941 en Madrid. Hijo de dos cantantes de zarzuela, por trabajo se fue a México donde pasó su infancia y adolescencia. Quiso ser muchas cosas (futbolista, torero, actor) hasta que descubrió que podía ser cantante de ópera. En 1966 debutó en el Liceo de Barcelona. En los 90, junto con José Carreras y Luciano Pavarotti, formó «Los Tres Tenores».\n\nDespués les pondremos un villancico cantado por Plácido Domingo.",
            faseAnalisis: {
              espaciales: ["¿Dónde nació?, ¿dónde canta? En Madrid."],
              temporales: ["¿Es mayor o pequeño?, ¿cuándo empezó a cantar? Es mayor, pero le gustaba cantar desde pequeño."],
              causales: ["¿Te gusta su manera de cantar?"],
              utilidad: ["¿Cómo podríamos imitar a Plácido Domingo?", "Cuando escuchamos a Plácido Domingo, ¿nos sentimos más tranquilos?"],
              origen: ["¿Tocas algún instrumento? Plácido Domingo sabe tocar varios, sobre todo el piano."],
              social: ["¿Cómo tenemos que comportarnos si fuéramos a la ópera? Genial, estar bien sentados, callados y tranquilos."],
            },
            faseExpresion: "En papel continuo dibujar lo que la pieza musical sugiere a los niños. Opcional: hacer pajarita de papel negro para que se conviertan en Plácido Domingo.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Hacer decoración de Navidad." },
            { tipo: "JUEGA", descripcion: "Ficha 18: pegar recortes en la carta a los Reyes Magos." },
            { tipo: "EXPRESA", descripcion: "Hacer bolas de Navidad con plastilina." },
            { tipo: "EXPRESA", descripcion: "Ficha 17: con pintura de dedos amarilla y roja, ponerles un pegote para que ellos realicen la mezcla en la ficha y descubran el color naranja." },
          ],
          rutinaPensamiento: { titulo: "Disparates · El árbol de Navidad (repaso)", descripcion: "Repetimos la rutina de disparates de la semana anterior para interiorizar el árbol de Navidad.\n\n¡¡Haz tuya la rutina!! Adivina-adivinanza: un niño elige un objeto del árbol y lo explica con gestos para que los demás lo adivinen." },
        },
        {
          numero: 4,
          titulo: "Navidad · Cierre del trimestre",
          programacion: {
            objetivos: [
              "Cerrar el trimestre con la celebración de la Navidad.",
              "Dramatizar un villancico en pequeño grupo.",
              "Terminar y llevar a casa los trabajos de la carpeta.",
            ],
          },
          materiales: {
            grupoColoquial: ["Materiales para el Belén de clase: paja, musgo, lana, figuras del nacimiento."],
            rincones: ["Cartulinas para postal de Navidad.", "Plastilina.", "Cuentos de Navidad."],
            rutinaPensamiento: ["Diagrama de Venn (enfado / alegría) o cierre con villancicos."],
          },
          grupoColoquial: {
            titulo: "El belén y los Reyes Magos",
            faseMotivacion: "Mostramos las figuras del Belén: Niño Jesús, María, José, los pastores, los animales, los Reyes Magos. Hablamos de cada figura: quiénes son, qué hacen, qué traen.\n\nCantamos un villancico popular: «Campana sobre campana», «Los peces en el río» o «Ay, del chiquirritín».",
            faseAnalisis: {
              espaciales: ["¿Dónde se pone el Belén? En el portal de Belén, en una casa, en un colegio…"],
              temporales: ["¿Cuándo llegan los Reyes Magos? La noche del 5 al 6 de enero."],
              causales: ["¿Por qué traen regalos los Reyes Magos? Porque le llevaron regalos al Niño Jesús cuando nació."],
              utilidad: ["¿Para qué sirven los villancicos? Para celebrar y compartir la alegría de la Navidad."],
              origen: ["¿De dónde vienen los Reyes Magos? Del oriente, siguiendo una estrella."],
              social: ["¿Cómo celebramos la Navidad en familia? Con cenas, regalos, villancicos, cuentos…"],
            },
            faseExpresion: "Entre todos terminamos de montar el Belén de clase con paja, musgo, lana y las figuras. Ponemos el árbol decorado con los adornos de las semanas anteriores y dramatizamos un villancico en pequeño grupo.",
          },
          rincones: [
            { tipo: "JUEGA", descripcion: "Jugar con el Belén y las figuras: cada niño cuenta una pequeña historia." },
            { tipo: "EXPRESA", descripcion: "Postal de Navidad: cada niño hace una postal para su familia con técnica libre." },
            { tipo: "PRACTICA", descripcion: "Repaso de fichas atrasadas y preparación de la carpeta para llevar a casa." },
            { tipo: "EXPRESA", descripcion: "Plastilina: hacer figuras del Belén con plastilina." },
          ],
          rutinaPensamiento: { titulo: "Diagrama de Venn · Enfado–Alegría", descripcion: "Trabajamos un diagrama de Venn con dos círculos: ENFADO y ALEGRÍA. Vamos clasificando tarjetas con dibujos de acciones (niños jugando contentos, pataletas, abrazos, peleas, regalos…) en el círculo correspondiente.\n\nLas acciones que pueden corresponder a ambos estados (jugar, ir al cole) las colocamos en la intersección. Hablamos de cómo una misma situación puede provocarnos emociones distintas." },
        },
      ],
    },

    // ──────────────────────────────────────────────────────────────────
    // ENERO — contenido completo (PDF «DESCUBRIENDO 3 años»)
    // ──────────────────────────────────────────────────────────────────
    enero: {
      "slug": "enero",
      "nombre": "Enero",
      "trimestre": "t2",
      "titulo": "Invierno · Día y noche · Transportes · Tiendas",
      "descripcion": "Invierno, día y noche, universo cercano (sol, luna, Tierra), transporte y seguridad vial, y la calle con sus tiendas.",
      "programacion": {
        "objetivos": [
          "Diferenciar las características del invierno y las prendas que usamos en esta estación.",
          "Diferenciar la noche del día y las rutinas que se realizan en cada una de ellas.",
          "Conocer las características básicas de la Tierra, el sol y la luna.",
          "Asimilar ciertas normas de circulación.",
          "Conocer distintos medios de transporte.",
          "Conocer diferentes tiendas y lo que se vende en cada una de ellas."
        ],
        "contenidos": [
          "Invierno: prendas de vestir.",
          "Autonomía: vestido.",
          "Universo: noche/día (sol/Tierra/luna).",
          "Medios de transporte: aéreos, marítimos y terrestres.",
          "Las tiendas: productos de cada una de ellas."
        ],
        "criterios": [
          "Diferencia el invierno.",
          "Sabe diferenciar el día de la noche y enumera las rutinas realizadas en ellas.",
          "Enumera las características de la Tierra, la luna y el sol.",
          "Conoce distintos medios de transporte.",
          "Identifica los tipos de tiendas y conoce qué se vende en ellas."
        ]
      },
      "materiales": {
        "laminas": [
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 1",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 2",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 3",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 4"
        ],
        "gruposColoquiales": [
          {
            "numero": 1,
            "titulo": "El invierno",
            "items": [
              "Objeto 3D: alguna prenda de invierno (bufanda, guantes, gorro…).",
              "Bits prendas de vestir (invierno y verano).",
              "Papel continuo.",
              "Algodón."
            ]
          },
          {
            "numero": 2,
            "titulo": "Día–noche",
            "items": [
              "Objeto 3D: bola de plastilina amarilla y churritos naranjas.",
              "Platos de cartón.",
              "Pintura de dedos.",
              "Gomets de estrellas o estrellas recortadas en folio."
            ]
          },
          {
            "numero": 3,
            "titulo": "Medios de transporte y seguridad vial",
            "items": [
              "Objeto 3D: medios de transporte de juguete.",
              "Recortes de periódicos, revistas…",
              "Papel continuo.",
              "Rotulador negro.",
              "Medio audiovisual para ver el vídeo."
            ]
          },
          {
            "numero": 4,
            "titulo": "Las tiendas",
            "items": [
              "Objeto 3D: una moneda.",
              "Recortes de alimentos y productos de las tiendas.",
              "Papel continuo.",
              "Medio audiovisual para ver el vídeo."
            ]
          }
        ],
        "rincones": [
          {
            "semana": 1,
            "items": [
              "Ficha 1: «¿Cómo me visto en invierno?»",
              "Material fotocopiable de elementos del invierno: pingüinos, copos de nieve, trineos…",
              "Ficha 2: colorear y picar la prenda que más te guste.",
              "Hacer con plastilina un muñeco de nieve."
            ]
          },
          {
            "semana": 2,
            "items": [
              "Ficha 3: repasar de naranja el sol y de azul la luna.",
              "Material fotocopiable: sol–luna.",
              "Ficha 4: pintar y decorar la noche y el día.",
              "Buscar en cuentos paisajes de día y de noche."
            ]
          },
          {
            "semana": 3,
            "items": [
              "Para decorar el pasillo: hacer distintas señales de tráfico.",
              "Ficha 5: rodear las imágenes correctas.",
              "Ficha 6: «¿Por dónde me desplazo?» Une con flechas.",
              "Con plastilina hacer señales de tráfico."
            ]
          },
          {
            "semana": 4,
            "items": [
              "Mural del pasillo: pintar la tienda.",
              "Ficha 7: colocar las tiendas.",
              "Jugar a vender y comprar.",
              "Material fotocopiable de productos de la tienda que nos toque."
            ]
          }
        ],
        "rutinasPensamiento": [
          {
            "numero": 1,
            "titulo": "Prendas de invierno",
            "items": [
              "Panel de disparates.",
              "Fichas ropa invierno.",
              "Presentación digital de disparates «La ropa de invierno».",
              "¡Haz tuya la rutina! Adivina-adivinanza: un niño elige una prenda de invierno y sin que lo vean los demás la explican con gestos para adivinarla."
            ]
          },
          {
            "numero": 2,
            "titulo": "La luna",
            "items": [
              "Llaves de pensadores.",
              "Preguntas: ¿Qué es la luna? ¿Qué forma tiene? ¿A qué se parece? MAYOR / AÑADIR / CAMBIAR…",
              "Construir una luna con folios y plastilina en 5 minutos y compartir.",
              "¡Haz tuya la rutina! Repetir preguntas en orden descolocado; un niño elige la llave y solo responde quien recibe la llave."
            ]
          },
          {
            "numero": 3,
            "titulo": "El coche",
            "items": [
              "Panel partes–todo.",
              "Fichas coche."
            ]
          }
        ]
      },
      "semanas": [
        {
          "numero": 1,
          "titulo": "El invierno",
          "esqueleto": false,
          "programacion": {
            "objetivos": [
              "Trabajar el vocabulario de prendas de invierno y verano.",
              "Representar colectivamente un muñeco de nieve para el pasillo."
            ]
          },
          "materiales": {
            "grupoColoquial": [
              "Objeto 3D: alguna prenda de invierno (bufanda, guantes, gorro…).",
              "Bits prendas de vestir (invierno y verano).",
              "Papel continuo.",
              "Algodón."
            ],
            "rincones": [
              "JUEGA: prendas de ropa invierno–verano recortadas y plastificadas; en un círculo en la mesa, solo prendas de invierno.",
              "PRACTICA: Ficha 1: vestir a un niño con distintas prendas (troquel tipo recortables).",
              "EXPRESA: Ficha 2: elegir un elemento de invierno para picar (gorro, guante, bufanda…).",
              "EXPRESA: cartulina con figura humana plastificada y velcros para pegar partes del cuerpo (7 cartulinas por equipo)."
            ],
            "rutinaPensamiento": [
              "Panel de disparates y fichas «ropa de invierno».",
              "Presentación digital RP 4.1 Disparates – Ropa de invierno."
            ]
          },
          "grupoColoquial": {
            "titulo": "El invierno",
            "faseMotivacion": "Objeto 3D: una prenda de abrigo (bufanda, gorro o guantes).\n\nLes pondremos la canción «Invierno» (vídeo). Después, en el suelo, bits de prendas de invierno y verano; los niños cogen solo las de invierno.",
            "faseAnalisis": {
              "espaciales": [
                "¿Habéis visto alguna vez un paisaje de invierno? ¿Dónde? ¿Cómo era?"
              ],
              "temporales": [
                "¿Cuándo habéis visto ese paisaje? ¿Hace mucho o poco?"
              ],
              "causales": [
                "¿Por qué nos abrigamos mucho en invierno? Porque hace frío.",
                "¿Por qué la nieve es fría? Porque cae de las nubes muy fría."
              ],
              "utilidad": [
                "¿Qué ropa nos podemos poner para abrigarnos? ¿Es gordita o fina?",
                "¿Cómo podemos entrar en calor además de abrigarnos? Calefacción, correr, quedarnos en casa…",
                "¿Qué actividades podemos hacer en una montaña nevada? Esquiar, trineo, raquetas…"
              ],
              "origen": [
                "Si alguien ha ido a esquiar, ¿qué materiales se necesitan? Esquís, botas, casco, gafas, guantes, ropa de abrigo."
              ],
              "social": [
                "¿Te gustaría ir a la montaña en trineo? ¿Cómo te sentirías?",
                "Si te caes al suelo, ¿qué pasa? Si no hay mucho daño, levantarse y ser valientes; si hay mucho, que nos curen."
              ]
            },
            "faseExpresion": "En papel continuo blanco la profesora pinta un muñeco de nieve grande; los niños pegan algodón, bufanda, gorro y zanahoria en la nariz. El muñeco decora el pasillo «El invierno»."
          },
          "rincones": [
            {
              "tipo": "JUEGA",
              "descripcion": "Prendas invierno/verano recortadas y plastificadas; clasificar solo invierno en círculo pintado en la mesa."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Ficha 1: vestir al niño con prendas troqueladas."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Ficha 2: picar un elemento de invierno (gorro, guante, bufanda…)."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Figura humana en cartulina plastificada con velcros y partes del cuerpo por equipo."
            }
          ],
          "rutinaPensamiento": {
            "titulo": "Disparates · La ropa de invierno",
            "descripcion": "Presentación digital de disparates «La ropa de invierno». ¡Haz tuya la rutina! En gran grupo, un niño elige una prenda de invierno y, sin que los demás la vean, la explica con gestos para que la adivinen."
          }
        },
        {
          "numero": 2,
          "titulo": "Día y noche",
          "esqueleto": false,
          "programacion": {
            "objetivos": [
              "Diferenciar sol y luna, día y noche.",
              "Experimentar mezcla de colores (naranja, cielo día/noche)."
            ]
          },
          "materiales": {
            "grupoColoquial": [
              "Objeto 3D: bola de plastilina amarilla y churritos naranjas.",
              "Platos de cartón.",
              "Pintura de dedos.",
              "Gomets de estrellas o estrellas recortadas en folio."
            ],
            "rincones": [
              "Plastilina, punzones, almohadillas, colores, pintura de dedos roja y amarilla, papel continuo, algodón, gomets de estrellas."
            ],
            "rutinaPensamiento": [
              "Llaves de pensamiento.",
              "Pizarra."
            ]
          },
          "grupoColoquial": {
            "titulo": "Día y noche",
            "faseMotivacion": "Objeto 3D: bola de plastilina amarilla y churritos naranjas (sol con rayos). Dinámica «Miro, toco y hablo» pasando la bola. Adivinanza: «Salgo todas las mañanas…» (el sol). Canción/vídeo «Día–Noche».",
            "faseAnalisis": {
              "espaciales": [
                "¿Dónde están las estrellas? En el cielo.",
                "El sol es una estrella, ¿dónde está? En el cielo.",
                "¿Dónde está la luna? En el cielo, el espacio…"
              ],
              "temporales": [
                "¿Cuándo sale el sol? Por la mañana.",
                "¿Cuando hace sol es de día o de noche? De día.",
                "¿Cuándo sale la luna? Por la noche.",
                "¿En qué estación hace más sol? En verano.",
                "¿Cuándo dormimos? Durante la noche."
              ],
              "causales": [
                "¿Por qué hay que protegerse del sol? Nos puede quemar; es malo para piel y ojos."
              ],
              "utilidad": [
                "¿Cómo protegerse del sol? Crema, gafas, sombra…"
              ],
              "origen": [],
              "social": [
                "¿Cómo disfrutamos días soleados? Parque, terraza, playa…",
                "¿Qué hacemos de día? Pasear, ejercicio, ir al cole…",
                "¿Qué de noche? Dormir, descansar, soñar…"
              ]
            },
            "faseExpresion": "En papel continuo, luna grande y sol grande: dos equipos pintan la luna con dedos (azul clarito, mezcla blanco y azul) y el sol en amarillo. En el pasillo, fondo oscuro para la luna y fondo blanco para el sol con nubes."
          },
          "rincones": [
            {
              "tipo": "JUEGA",
              "descripcion": "Plastilina: luna y sol."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Ficha 3: repasar líneas del sol con naranja; colorear agua de la Tierra; picar la luna."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Mezcla rojo y amarillo para descubrir el naranja."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Ficha 4: algodón o papel blanco para nubes (día) y gomets de estrellas (noche)."
            }
          ],
          "rutinaPensamiento": {
            "titulo": "Llaves de pensamiento · La luna",
            "descripcion": "Somos pensadores y usamos las «llaves»: ¿Qué es la luna? ¿Forma? ¿A qué se parece? MAYOR: ¿Si la luna fuera mucho más grande o más pequeña? AÑADIR: ¿árboles o animales en la luna? CAMBIAR: ¿color azul? ¿Qué pasó si hoy no sale la luna? Construir una luna en 5 minutos con folio y plastilina. ¡Haz tuya la rutina! Repetir en orden descolocado."
          }
        },
        {
          "numero": 3,
          "titulo": "Medios de transporte y seguridad vial",
          "esqueleto": false,
          "programacion": {
            "objetivos": [
              "Conocer transporte terrestre, marítimo y aéreo.",
              "Reforzar normas básicas de seguridad vial."
            ]
          },
          "materiales": {
            "grupoColoquial": [
              "Objeto 3D: medios de transporte de juguete.",
              "Recortes de periódicos, revistas…",
              "Papel continuo.",
              "Rotulador negro.",
              "Medio audiovisual para ver el vídeo."
            ],
            "rincones": [
              "Coches/medios transporte (grafo), Manley blanca, papel continuo, rotulador, vídeo, papel de seda (varios colores), pegamento."
            ],
            "rutinaPensamiento": [
              "Panel partes–todo y fichas coche.",
              "Presentation RP 4.2 Disparates."
            ]
          },
          "grupoColoquial": {
            "titulo": "Medios de transporte",
            "faseMotivacion": "Objeto 3D: medios de transporte de juguete escondidos. Adivinanzas (tren, coche, barco, avión). Vídeo «Los medios de transporte para niños» (terrestres, acuáticos y aéreos).",
            "faseAnalisis": {
              "espaciales": [
                "¿Dónde vemos medios de transporte? Calle, cielo…",
                "¿Cuáles van por tierra, aire y mar?",
                "¿Por dónde cruzamos andando? Paso de cebra."
              ],
              "temporales": [
                "¿Cuándo los usamos? Cuando nos movemos y no podemos ir andando.",
                "¿Cuándo habéis visto un barco? …"
              ],
              "causales": [
                "¿Por qué se mueve un coche? Motor y ruedas.",
                "¿Qué pasa si se pincha la rueda o no hay gasolina? Gasolinera o taller.",
                "¿Cinturón, por qué? Para ir seguros.",
                "¿Semáforo en rojo? Esperar a verde.",
                "¿Antes sin transporte? A pie, caballos…"
              ],
              "utilidad": [
                "¿Para qué sirven? Para desplazarnos.",
                "¿Volante, ruedas, motor? Para girar y moverse."
              ],
              "origen": [
                "¿De qué materiales están hechos? Acero, etc."
              ],
              "social": []
            },
            "faseExpresion": "Mural en papel continuo con carretera, cielo y mar dibujados; con recortes de casa (revistas, periódicos, internet pedidos la semana anterior) pegamos cada transporte en su lugar."
          },
          "rincones": [
            {
              "tipo": "JUEGA",
              "descripcion": "Vamos por la carretera: carretera con Manley en mesa; no salirse; señales opcionales."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Ficha 5: seguridad vial (cruzar con/sin adulto, cinturón…); rodear lo correcto y tachar lo incorrecto."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Ficha 6: unir cada medio con el lugar por el que se desplaza."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Señales de tráfico con papel seda rasgado; cada clase un tipo (prohibido, ceda, stop, semáforo, peatones, parking…)."
            }
          ],
          "rutinaPensamiento": {
            "titulo": "Disparates · Medios de transporte",
            "descripcion": "Clasificar imágenes como correctas o disparate; relacionar transporte con el medio (aire, agua, carretera). Presentation RP 4.2. ¡Haz tuya la rutina! Corregir parejas mal colocadas; un niño coloca dos imágenes y el grupo valora; buscar parejas correctas en el suelo; clasificar por aire, agua o carretera."
          }
        },
        {
          "numero": 4,
          "titulo": "Las tiendas",
          "esqueleto": false,
          "programacion": {
            "objetivos": [
              "Reconocer tipos de tienda y qué se compra en cada una.",
              "Practicar normas de calle y de tienda."
            ]
          },
          "materiales": {
            "grupoColoquial": [
              "Objeto 3D: una moneda.",
              "Recortes de alimentos y productos de las tiendas.",
              "Papel continuo.",
              "Medio audiovisual para ver el vídeo."
            ],
            "rincones": [
              "Papel continuo, colores."
            ],
            "rutinaPensamiento": [
              "Panel de disparates.",
              "Fichas objetos de la casa.",
              "Presentation R.P 5.1.2 LA COCINA (pasos del panel con imágenes de solución)."
            ]
          },
          "grupoColoquial": {
            "titulo": "La calle y las tiendas",
            "faseMotivacion": "Objeto 3D: una moneda (tapada). Pistas: sirve para comprar; es de metal; con dinero pagamos en las tiendas. ¿Qué tipos de tiendas conocemos? Ropa, fruta, carne, supermercado, papelería, pescadería, panadería…",
            "faseAnalisis": {
              "espaciales": [
                "¿Dónde hacemos la compra? Supermercado, carnicería, frutería, mercado…",
                "¿Dónde están las tiendas que conocéis? Cerca de casa.",
                "¿Qué hay en nuestra calle? Semáforos, señales, árboles, parques, tiendas…"
              ],
              "temporales": [
                "¿Cuándo vais a comprar con papás? Cuando no hay cole y hace falta algo.",
                "¿Abren de noche? Algunas."
              ],
              "causales": [
                "¿Qué pasaría sin tiendas? No tendríamos dónde comprar.",
                "¿Podríamos comprar comida? No."
              ],
              "utilidad": [
                "¿Para qué sirven las tiendas? Comprar lo que necesitamos para vivir.",
                "¿Pan, zapatos, calcetines, carne, pescado, fruta? Panadería, zapatería, mercería, carnicería, pescadería, frutería/verdulería."
              ],
              "origen": [
                "¿De dónde vienen productos de carnicería, frutería, pescadería, mercería? Animales, huerto, mar, lana/algodón…"
              ],
              "social": [
                "¿Cómo portarse en la calle? Ir al lado de los mayores.",
                "¿En la tienda? Sin correr, sin molestar.",
                "¿Tocar todo? No.",
                "¿Cómo pedir? Por favor y gracias."
              ]
            },
            "faseExpresion": "Mural de una calle con tiendas en papel continuo; pegar recortes que traen los niños en cada puesto (frutería, carnicería, supermercado, florería, panadería…)."
          },
          "rincones": [
            {
              "tipo": "JUEGA",
              "descripcion": "Memory profesiones–tiendas (farmacia, carnicería, frutería, pescadería, panadería…)."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Pegatinas de cocina en la casa del aula; alguna mal colocada para corregir."
            },
            {
              "tipo": "EXPRESA",
              "descripcion": "Elaborar una tienda por clase para el pasillo «nuestra calle» (mercería, kiosco, carnicería…)."
            },
            {
              "tipo": "PRACTICA",
              "descripcion": "Ordenar imágenes: antes, durante y después de cocinar en la mesa."
            }
          ],
          "rutinaPensamiento": {
            "titulo": "Disparates · Objetos de la casa (La cocina)",
            "descripcion": "Panel de disparates con fichas de objetos de la casa y utensilios. Pasos: enseñar el panel y las imágenes de solución; asociar cada acción del primer cuadrado con la imagen adecuada; repasar emparejamientos. Presentation R.P 5.1.2 LA COCINA. Variantes: corregir pegatinas incorrectas en la casa del aula."
          }
        }
      ]
    },


    // ──────────────────────────────────────────────────────────────────
    // FEBRERO — programación y materiales (PDF); semanas en borrador
    // ──────────────────────────────────────────────────────────────────
    febrero: makeSkeleton({
      slug: "febrero",
      nombre: "Febrero",
      trimestre: "t2",
      titulo: "Emociones · Higiene · Sorolla · Animales",
      descripcion:
        "Nervios y calma, hambre, sed y suciedad, el pintor Sorolla, productos de los animales y la calle con tiendas (según guía del PDF).",
      programacion: {
        objetivos: [
          "Conocer los productos que salen de los animales.",
          "Descubrir cómo estamos cuando estamos nerviosos y qué situaciones pueden provocarlo.",
          "Comprender que la calma ayuda al estado de nervios.",
          "Conocer el paisaje de la montaña.",
          "Identificar cuando sentimos hambre y sed.",
          "Comprobar que estar sucio no es agradable.",
          "Diferenciar las dependencias de la casa.",
          "Discriminar los conceptos dentro y fuera.",
          "Distinguir los tipos de tienda y qué podemos comprar en ellas.",
          "Descubrir el color verde.",
        ],
        contenidos: [
          "Pintor: Sorolla.",
          "Paisajes: montaña.",
          "Animales: productos que salen de ellos.",
          "Emociones: nervios y calma.",
          "Sensaciones: hambre, sed, suciedad.",
          "Entorno: mi casa y sus dependencias.",
          "Dentro – fuera.",
          "La calle: tipos de tiendas.",
          "Color verde.",
        ],
        criterios: [
          "Reconoce algunos productos que salen de los animales.",
          "Entiende situaciones que activan el estado de nervios.",
          "Descubre cómo ayuda la calma a suavizar los nervios.",
          "Reconoce cuando siente hambre y sed.",
          "Experimenta que no es agradable estar sucio.",
          "Distingue las dependencias de la casa.",
          "Diferencia los conceptos dentro y fuera.",
          "Identifica algunos tipos de tiendas y qué obtenemos en ellas.",
        ],
      },
      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 5",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 6",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 7",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 8",
        ],
        gruposColoquiales: [
          { numero: 1, titulo: "Emociones", items: ["Objeto 3D: un globo.", "Pintura de dedos.", "Pinceles.", "Papel continuo."] },
          {
            numero: 2,
            titulo: "Higiene / agua",
            items: [
              "Objeto 3D: botella de agua llena.",
              "Cartulina tamaño folio del color que se tenga.",
              "Folios.",
              "Ceras azules.",
              "Almohadillas y punzones.",
            ],
          },
          {
            numero: 3,
            titulo: "Sorolla",
            items: [
              "Objeto 3D: paleta de pintor, pincel o una bata.",
              "Papel continuo blanco.",
              "Telas, papel de todo tipo, pegamento, tijeras, edding negro, pinturas, rotuladores…",
              "Proyector y ordenador.",
            ],
          },
          {
            numero: 4,
            titulo: "Productos de los animales",
            items: [
              "Imágenes grandes: vaca, cerdo, gallina y oveja.",
              "Imágenes pequeñas de productos (chorizo, jamón…).",
              "Materiales de reciclaje: yogures, bricks de leche, hueveras, tarrinas…",
              "Materiales del aula: ovillo de lana, cocinitas, guantes, bufandas…",
            ],
          },
        ],
        rincones: [
          { semana: 1, items: ["Ficha 8: une cada niño con su emoción.", "Buscar emociones en cuentos.", "Puzzles.", "Collares."] },
          {
            semana: 2,
            items: [
              "Ficha 9: ayuda a cada niño a encontrar lo que necesita.",
              "Ficha 10: colorea las imágenes en las que utilizas el agua.",
              "Limpiar con toallitas algún juguete.",
              "Construcciones.",
            ],
          },
          {
            semana: 3,
            items: [
              "JUEGA: cocinitas de clase.",
              "PRACTICA: Ficha 9 (higiene / laberinto).",
              "PRACTICA: Ficha 10: rodear situaciones en las que tenemos sed.",
              "EXPRESA: recortar elementos de higiene en revistas y pegar en folio.",
            ],
          },
          {
            semana: 4,
            items: [
              "JUEGA: puzzle en equipo del cuadro «El Balandrito».",
              "JUEGA: dominó asociando animales con los productos.",
              "PRACTICA: Ficha 11: asociar cada animal con el producto.",
              "EXPRESA: pintar en papel continuo como Sorolla; repasar naranja y mezcla verde (amarillo + azul).",
            ],
          },
        ],
        rutinasPensamiento: [
          {
            numero: 1,
            titulo: "La cocina",
            items: ["Panel de disparates.", "Tarjetas con dibujos de objetos de la casa y utensilios de cocina.", "Presentation R.P 5.1.2 LA COCINA."],
          },
          { numero: 2, titulo: "La calma", items: ["Llaves de pensamiento.", "Pizarra.", "Presentation R.P 5.2 LA CALMA (clasificación)."] },
          { numero: 3, titulo: "Estoy sucio", items: ["Panel veo, pienso y me pregunto.", "Foto de un niño sucio.", "Presentation RP 5.3."] },
          {
            numero: 4,
            titulo: "¿Qué nos dan los animales?",
            items: ["Imágenes grandes y pequeñas de animales y productos.", "Materiales de reciclaje y del aula para manipular y clasificar."],
          },
        ],
      },
      semanas: [
        { numero: 1, titulo: "La calle y las tiendas" },
        { numero: 2, titulo: "La calma" },
        { numero: 3, titulo: "El agua y la higiene" },
        { numero: 4, titulo: "Sorolla y productos de los animales" },
      ],
    }),

    // ──────────────────────────────────────────────────────────────────
    // MARZO — programación y materiales (PDF); semanas en borrador
    // ──────────────────────────────────────────────────────────────────
    marzo: makeSkeleton({
      slug: "marzo",
      nombre: "Marzo",
      trimestre: "t2",
      titulo: "Sentidos · Miedo · Plantas · Comunicación",
      descripcion:
        "Los cinco sentidos, el miedo, el crecimiento de las plantas, medios de comunicación y fenómenos como la tormenta (según guía del PDF).",
      programacion: {
        objetivos: [
          "Conocer los diferentes sentidos y sus funciones.",
          "Discriminar los conceptos encima–debajo.",
          "Identificar el estado de cansancio en uno mismo y qué situaciones pueden provocarlo.",
          "Descubrir cómo estamos cuando algo nos duele.",
          "Identificar las situaciones o momentos que nos producen miedo.",
          "Reconocer la expresión facial del miedo.",
          "Distinguir algunas fases del crecimiento de la planta y sus cuidados.",
          "Diferenciar algunos fenómenos de la naturaleza.",
          "Reconocer medios de comunicación.",
        ],
        contenidos: [
          "Cuerpo: sentidos y sus funciones.",
          "Relaciones espaciales: encima – debajo.",
          "Sensaciones: dolor, cansancio.",
          "Emociones: miedo.",
          "Plantas: crecimiento y cuidados.",
          "Hábitos.",
          "Fenómenos de la naturaleza: tormenta.",
          "Medios de comunicación: teléfono, ordenador, TV, radio y prensa.",
        ],
        criterios: [
          "Conoce los sentidos y las funciones de cada uno.",
          "Distingue los conceptos espaciales encima–debajo.",
          "Identifica el estado de cansancio y qué puede provocarlo.",
          "Reconoce cuando algo le duele.",
          "Identifica y reconoce el estado de miedo en algunas situaciones y su expresión facial.",
          "Discrimina las fases de crecimiento de la planta y sus cuidados.",
          "Reconoce algunos fenómenos de la naturaleza como la tormenta.",
          "Nombra distintos medios de comunicación.",
        ],
      },
      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 9",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 10",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 11",
          "Lámina A2 — Descubriendo 3 años · 2.º trimestre · 12",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "Los sentidos",
            items: [
              "Objeto 3D: el dibujo de un paisaje.",
              "Prismáticos, cascos de música, magdalena o algo de comer…",
              "Papel continuo y rotuladores.",
              "Proyector y ordenador.",
            ],
          },
          {
            numero: 2,
            titulo: "El miedo",
            items: [
              "Insecto de goma.",
              "Edding negro.",
              "Papel continuo.",
              "Pinturas, trocitos de papel, purpurina de colores vivos.",
              "Bits o imágenes de situaciones que dan miedo y que no lo dan.",
            ],
          },
          {
            numero: 3,
            titulo: "Las plantas",
            items: ["Una maceta con una planta.", "4 envases de yogur.", "Distintos tipos de legumbre.", "Ordenador y proyector."],
          },
          {
            numero: 4,
            titulo: "Medios de comunicación",
            items: ["Teléfono móvil.", "Cartulina grande para hacer el sobre.", "Folios y ceras de colores."],
          },
        ],
        rincones: [
          { semana: 1, items: ["Harina.", "Sal / azúcar / limón.", "Cosas con olor agradable o desagradable."] },
          { semana: 2, items: ["Cuentos de clase.", "Tarjetas de secuencias."] },
          { semana: 3, items: ["Puzzle de secuencia del crecimiento de la planta.", "Vaso de yogur y legumbres."] },
          { semana: 4, items: ["Construcciones de clase.", "Troquel teléfono antiguo.", "Papel continuo.", "Recortes de casa."] },
        ],
        rutinasPensamiento: [
          { numero: 1, titulo: "Los sentidos", items: ["Objetos del G.C. «Los sentidos» o tarjetas.", "Lámina A3 del cuerpo con órganos (opcional)."] },
          { numero: 2, titulo: "El dolor", items: ["Diagrama de Venn.", "Tarjetas."] },
          { numero: 3, titulo: "La tormenta", items: ["Presentación y conversación guiada sobre la tormenta (actitud positiva hacia el aprendizaje)."] },
          { numero: 4, titulo: "La carta", items: ["Panel partes–todo.", "Tarjetas: sobre, sello, folio, dirección, remitente."] },
        ],
      },
      semanas: [
        { numero: 1, titulo: "Los sentidos" },
        { numero: 2, titulo: "El miedo" },
        { numero: 3, titulo: "Las plantas" },
        { numero: 4, titulo: "Medios de comunicación" },
      ],
    }),

    // ──────────────────────────────────────────────────────────────────
    // ABRIL — programación y materiales (PDF); semanas en borrador
    // ──────────────────────────────────────────────────────────────────
    abril: makeSkeleton({
      slug: "abril",
      nombre: "Abril",
      trimestre: "t3",
      titulo: "Arcoíris · Profesiones · Primavera · Prehistoria",
      descripcion:
        "Prehistoria, autonomía en el vestido, Alexander Bell y el teléfono, arcoíris, seguridad vial en el coche, profesiones que ayudan, colores rosa y morado y la primavera.",
      programacion: {
        objetivos: [
          "Conocer la Prehistoria.",
          "Fomentar la autonomía a la hora de vestirse y desvestirse solos.",
          "Conocer al inventor Bell como creador del teléfono.",
          "Reconocer el arcoíris como fenómeno de la naturaleza.",
          "Reconocer las distintas normas de circulación.",
          "Identificar algunas profesiones que ayudan: policía / bombero / médico.",
          "Descubrir el color rosa y morado.",
        ],
        contenidos: [
          "La prehistoria.",
          "Autonomía: vestido.",
          "Fenómenos de la naturaleza: arcoíris.",
          "Las normas de circulación: seguridad vial en el coche.",
          "Profesiones: policía / bombero / médico.",
          "Taller científico: teléfono.",
          "Color: rosa y morado.",
          "Primavera (objetivos y criterios del PDF).",
        ],
        criterios: [
          "Descubre algunas características de la Prehistoria.",
          "Adquiere cada vez mayor autonomía en el vestido.",
          "Reconoce el arcoíris como fenómeno de la naturaleza.",
          "Conoce ciertas normas básicas de circulación y seguridad vial.",
          "Identifica un mecánico, un policía, una comisaría y un taller.",
        ],
      },
      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 1",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 2",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 3",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 4",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "El arcoíris",
            items: [
              "Cuento del arcoíris.",
              "Lápices o rotus de los colores del arcoíris.",
              "Rotulador permanente negro.",
              "Papel cocina o servilletas, gaveta/bandeja, agua.",
            ],
          },
          {
            numero: 2,
            titulo: "Profesiones que nos ayudan",
            items: ["Silbato.", "Ficha / troquel gorro de policía.", "Ceras de colores.", "Tiras de cartulina (2 por niño)."],
          },
          {
            numero: 3,
            titulo: "La primavera",
            items: [
              "Objeto 3D: una flor.",
              "Proyector y ordenador.",
              "Bits de imágenes de flores.",
              "Palo de polo (depresores), moldes de magdalenas.",
              "Rotuladores, cartulina verde, purpurina…",
            ],
          },
          {
            numero: 4,
            titulo: "La prehistoria",
            items: ["Objeto 3D: una piedra.", "Ordenador y proyector.", "Papel continuo.", "Pintura de dedos negra, marrón y roja."],
          },
        ],
        rincones: [
          { semana: 1, items: ["Cocinitas de clase."] },
          { semana: 2, items: ["Coches de clase."] },
          {
            semana: 3,
            items: [
              "Imprimibles con elementos de la primavera.",
              "Platos de plástico y mezclas de color con pintura de dedos.",
              "Plancha arcoíris y pompones.",
              "Tarjetas de secuencias de primavera.",
              "Patatas para estampar, lana.",
            ],
          },
          { semana: 4, items: ["Coches de clase.", "Plastilina."] },
        ],
        rutinasPensamiento: [
          { numero: 1, titulo: "El arcoíris y otros fenómenos atmosféricos", items: ["Llaves de pensadores."] },
          { numero: 2, titulo: "Las profesiones del cole", items: ["Disparates."] },
          { numero: 3, titulo: "La primavera", items: ["Actividades de observación y clasificación (ver presentación del PDF)."] },
          { numero: 4, titulo: "La prehistoria", items: ["Panel de disparates.", "Tarjetas de la prehistoria."] },
        ],
      },
      semanas: [
        { numero: 1, titulo: "El arcoíris" },
        { numero: 2, titulo: "Profesiones que nos ayudan" },
        { numero: 3, titulo: "La primavera" },
        { numero: 4, titulo: "La prehistoria" },
      ],
    }),

    // ──────────────────────────────────────────────────────────────────
    // MAYO — programación y materiales (PDF); semanas en borrador
    // ──────────────────────────────────────────────────────────────────
    mayo: makeSkeleton({
      slug: "mayo",
      nombre: "Mayo",
      trimestre: "t3",
      titulo: "Prehistoria · Berthe Morisot · Verano",
      descripcion:
        "Berthe Morisot, hábitos saludables de cara al verano, los cuatro elementos de la naturaleza y la vida en la Prehistoria (según guía del PDF).",
      programacion: {
        objetivos: [
          "Presentar a la pintora Berthe Morisot.",
          "Adquirir hábitos saludables de cara al verano: hidratación, protección y medidas contra los efectos del sol y posibles peligros del verano.",
          "Identificar los cuatro elementos de la naturaleza: tierra, agua, viento y fuego.",
          "Observar y conocer las características de la vida en la prehistoria.",
        ],
        contenidos: [
          "Pintora: Berthe Morisot.",
          "Hábitos saludables de cara al verano.",
          "Los 4 elementos: tierra, agua, viento y fuego.",
          "Prehistoria: cómo vivían los hombres en la Prehistoria.",
        ],
        criterios: [
          "Conoce los elementos tierra, agua, viento y fuego.",
          "Observa y conoce características de la vida en la prehistoria.",
          "Reconoce algunos hábitos saludables de cara al verano.",
        ],
      },
      materiales: {
        laminas: [
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 5",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 6",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 7",
          "Lámina A2 — Descubriendo 3 años · 3.º trimestre · 8",
        ],
        gruposColoquiales: [
          {
            numero: 1,
            titulo: "La prehistoria (semana 1)",
            items: [
              "Escena de la prehistoria: una hoguera.",
              "Personas vestidas con pieles.",
              "Cavernas con pinturas rupestres.",
              "Animales: mamuts.",
            ],
          },
          {
            numero: 2,
            titulo: "La prehistoria (semana 2)",
            items: [
              "Escena de la prehistoria: una hoguera.",
              "Personas vestidas con pieles.",
              "Cavernas con pinturas rupestres.",
              "Animales: mamuts.",
            ],
          },
          {
            numero: 3,
            titulo: "Berthe Morisot y hábitats",
            items: [
              "Materiales del PDF para pintura al aire libre y observación de obras (proyector, papel continuo, pinturas…).",
              "Animales de clase, recortes, mural agua–tierra–aire, pegatinas.",
            ],
          },
          {
            numero: 4,
            titulo: "Verano y hábitos saludables",
            items: ["Mural verano.", "Plastilina, pinturas, cola.", "Tarjetas de protección solar e hidratación (elaboración propia a partir del PDF)."],
          },
        ],
        rincones: [
          {
            semana: 1,
            items: [
              "Piedra.",
              "Ordenador y proyector.",
              "Papel continuo.",
              "Pintura de dedos negra, marrón y roja.",
              "Plastilina gris, arcilla.",
              "Goma para careta troquel.",
            ],
          },
          {
            semana: 2,
            items: ["Lana para dos actividades.", "Conchas, colmillos, huesos de cartulina.", "Pintura de dedos.", "Ceras blancas.", "Pinturas."],
          },
          {
            semana: 3,
            items: ["Animales de clase.", "Recortes de animales.", "Mural dividido en tres partes: agua, tierra, aire.", "Pegatinas.", "Pinturas."],
          },
          { semana: 4, items: ["Mural verano.", "Plastilina.", "Pinturas.", "Cola."] },
        ],
        rutinasPensamiento: [
          { numero: 1, titulo: "R.P. 1 (Mayo)", items: ["Consultar en el PDF la rutina 1 del mes de mayo (presentación asociada)."] },
          { numero: 2, titulo: "R.P. 2 (Mayo)", items: ["Consultar en el PDF la rutina 2 del mes de mayo."] },
          { numero: 3, titulo: "R.P. 3 (Mayo)", items: ["Consultar en el PDF la rutina 3 del mes de mayo."] },
          { numero: 4, titulo: "R.P. 4 (Mayo)", items: ["Consultar en el PDF la rutina 4 del mes de mayo."] },
        ],
      },
      semanas: [
        { numero: 1, titulo: "La prehistoria 1" },
        { numero: 2, titulo: "La prehistoria 2" },
        { numero: 3, titulo: "Berthe Morisot · Hábitats" },
        { numero: 4, titulo: "Hábitos saludables · Verano" },
      ],
    }),
  },
};

/**
 * Genera un esqueleto de mes (semanas con borrador) o mezcla programación/materiales
 * del PDF si pasas `programacion`, `materiales` y `descripcion`.
 */
function makeSkeleton({
  slug,
  nombre,
  trimestre,
  titulo,
  semanas,
  descripcion: descripcionMes,
  programacion: programacionMes,
  materiales: materialesMes,
}) {
  const placeholder = "Pendiente de rellenar";
  const mesRelleno = !!(programacionMes && materialesMes);
  return {
    slug,
    nombre,
    trimestre,
    titulo,
    descripcion: descripcionMes || placeholder,
    esqueleto: !mesRelleno,
    programacion: programacionMes || {
      objetivos: [placeholder],
      contenidos: [placeholder],
      criterios: [placeholder],
    },
    materiales: {
      laminas: (materialesMes && materialesMes.laminas) || [placeholder],
      gruposColoquiales:
        (materialesMes && materialesMes.gruposColoquiales) ||
        semanas.map((s) => ({
          numero: s.numero,
          titulo: s.titulo,
          items: [placeholder],
        })),
      rincones:
        (materialesMes && materialesMes.rincones) ||
        semanas.map((s) => ({ semana: s.numero, items: [placeholder] })),
      rutinasPensamiento:
        (materialesMes && materialesMes.rutinasPensamiento) ||
        semanas.map((s) => ({
          numero: s.numero,
          titulo: placeholder,
          items: [placeholder],
        })),
    },
    semanas: semanas.map((s) => ({
      numero: s.numero,
      titulo: s.titulo,
      esqueleto: true,
      programacion: { objetivos: [placeholder] },
      materiales: {
        grupoColoquial: [placeholder],
        rincones: [placeholder],
        rutinaPensamiento: [placeholder],
      },
      grupoColoquial: {
        titulo: s.titulo,
        faseMotivacion: placeholder,
        faseAnalisis: {
          espaciales: [placeholder],
          temporales: [placeholder],
          causales: [placeholder],
          utilidad: [placeholder],
          origen: [placeholder],
          social: [placeholder],
        },
        faseExpresion: placeholder,
      },
      rincones: [
        { tipo: "JUEGA", descripcion: placeholder },
        { tipo: "PRACTICA", descripcion: placeholder },
        { tipo: "EXPRESA", descripcion: placeholder },
      ],
      rutinaPensamiento: { titulo: placeholder, descripcion: placeholder },
    })),
  };
}
