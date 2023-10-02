const edadesWithoutId = [
  "2 meses",
  "4 meses",
  "6 meses",
  "9 meses",
  "12 meses",
  "15 meses",
  "18 meses",
  "2 años",
  "30 meses",
  "3 años",
  "4 años",
  "5 años",
];
export const edades = edadesWithoutId.map((e, i) => ({
  id: i,
  description: e,
}));

const areasWithoutId = [
  "Social y Emocional",
  "Lenguaje y Comunicación",
  "Cognitivo",
  "Físico y Motor",
];
export const areas = areasWithoutId.map((e, i) => ({ id: i, description: e }));

const competenciasWithoutId = [
  {
    areaId: 0,
    edadId: 0,
    description: "Se calma cuando se le habla o lo alzan",
  },
  {
    areaId: 0,
    edadId: 0,
    description: "Lo mira a la cara",
  },
  {
    areaId: 0,
    edadId: 0,
    description: "Parece estar feliz cuando usted se le acerca",
  },
  {
    areaId: 0,
    edadId: 0,
    description: "Sonríae cuando usted le habla o le sonríe",
  },
  {
    areaId: 1,
    edadId: 0,
    description: "Hace sonidos como 'agú', 'aahh'",
  },
  {
    areaId: 1,
    edadId: 0,
    description: "Reacciona a los sonidos fuertes",
  },
  {
    areaId: 2,
    edadId: 0,
    description: "Lo observa mientras usted se mueve",
  },
  {
    areaId: 2,
    edadId: 0,
    description: "Fija la vista en un juguete por varios segundos",
  },
  {
    areaId: 3,
    edadId: 0,
    description: "Mantiene la cabeza alzada cuando está boca abajo",
  },
  {
    areaId: 3,
    edadId: 0,
    description: "Mueve ambos brazos y piernas",
  },
  {
    areaId: 3,
    edadId: 0,
    description: "Abre las manos brevemente",
  },
  {
    areaId: 0,
    edadId: 1,
    description: "Sonríe solito para llamar su atención",
  },
  {
    areaId: 0,
    edadId: 1,
    description:
      "Suelta una risita (todavía no una completa) cuando usted trata de hacerlo reír",
  },
  {
    areaId: 0,
    edadId: 1,
    description:
      "Lo mira, se mueve o hace sonidos para llamar o mantener su atención",
  },
  {
    areaId: 1,
    edadId: 1,
    description: "Gorjea ('agú', 'aahh')",
  },
  {
    areaId: 1,
    edadId: 1,
    description: "Responde con sonidos cuando usted le habla",
  },
  {
    areaId: 1,
    edadId: 1,
    description: "Voltea la cabeza hacia el sonido de su voz",
  },
  {
    areaId: 2,
    edadId: 1,
    description:
      "Si tiene hambre, abre la boca cuando ve el pecho o el biberón",
  },
  {
    areaId: 2,
    edadId: 1,
    description: "Mira sus propias manos con interés",
  },
  {
    areaId: 3,
    edadId: 1,
    description:
      "Mantiene la cabeza firme, sin apoyo, cuando usted lo tiene en brazos",
  },
  {
    areaId: 3,
    edadId: 1,
    description: "Sujeta un juguete cuando usted se lo pone en la mano",
  },
  {
    areaId: 3,
    edadId: 1,
    description: "Usa su brazo para manotear a los juguetes",
  },
  {
    areaId: 3,
    edadId: 1,
    description: "Se lleva las manos a la boca",
  },
  {
    areaId: 3,
    edadId: 1,
    description:
      "Cuando está boca abajo, se levanta hasta apoyarse en los codos y antebrazos",
  },
  {
    areaId: 0,
    edadId: 2,
    description: "Reconoce a las personas conocidas",
  },
  {
    areaId: 0,
    edadId: 2,
    description: "Le gusta mirarse en el espejo",
  },
  {
    areaId: 0,
    edadId: 2,
    description: "Se ríe",
  },
  {
    areaId: 1,
    edadId: 2,
    description: "Se turna con usted para hacer sonidos",
  },
  {
    areaId: 1,
    edadId: 2,
    description:
      "Hace burbujas y sonidos con la boquita (saca la lengua y sopla)",
  },
  {
    areaId: 1,
    edadId: 2,
    description: "Hace sonidos de placer (grititos de alegría)",
  },
  {
    areaId: 2,
    edadId: 2,
    description: "Se pone cosas en la boca para explorarlas",
  },
  {
    areaId: 2,
    edadId: 2,
    description: "Estira el brazo para agarrar el juguete que quiere",
  },
  {
    areaId: 2,
    edadId: 2,
    description: "Cierra los labios para mostrar que no quiere más comida",
  },
  {
    areaId: 3,
    edadId: 2,
    description: "Cuando está boca abajo, puede voltearse y quedar boca arriba",
  },
  {
    areaId: 3,
    edadId: 2,
    description:
      "Cuando está boca abajo, se levanta hasta sostenerse con los brazos derechos",
  },
  {
    areaId: 3,
    edadId: 2,
    description: "Usa las manos para apoyarse cuando está sentado",
  },
  {
    areaId: 0,
    edadId: 3,
    description:
      "Es tímido, inseguro o se muestra asustado de alrededor de extraños",
  },
  {
    areaId: 0,
    edadId: 3,
    description:
      "Muestra varias expresiones faciales (contento, triste, enojado y sorprendido)",
  },
  {
    areaId: 0,
    edadId: 3,
    description: "Lo mira cuando usted lo llama por su nombre",
  },
  {
    areaId: 0,
    edadId: 3,
    description:
      "Reacciona cuando usted se va (lo busca con la mirada, estira los brazos hacia usted o llora)",
  },
  {
    areaId: 0,
    edadId: 3,
    description:
      "Sonríe o se ríe cuando usted juega a '¿Dónde está el bebé? Aquí está'",
  },
  {
    areaId: 1,
    edadId: 3,
    description: "Hace sonidos diferentes como 'mamamama' y 'babababa'",
  },
  {
    areaId: 1,
    edadId: 3,
    description: "Levanta los brazos para que lo alcen",
  },
  {
    areaId: 2,
    edadId: 3,
    description:
      "Busca objetos cuando estos caen donde no se pueden ver (como su cuchara o juguete)",
  },
  {
    areaId: 2,
    edadId: 3,
    description: "Golpea un objeto contra otro",
  },
  {
    areaId: 3,
    edadId: 3,
    description: "Se sienta sin ayuda de nadie",
  },
  {
    areaId: 3,
    edadId: 3,
    description: "Se sienta sin apoyo",
  },
  {
    areaId: 3,
    edadId: 3,
    description: "Usa los dedos para acercar la comida hacia él",
  },
  {
    areaId: 3,
    edadId: 3,
    description: "Pasa objetos de una mano a la otra",
  },
  {
    areaId: 0,
    edadId: 4,
    description: "Juega con usted, como a dar palmaditas con las manos",
  },
  {
    areaId: 1,
    edadId: 4,
    description: "Dice 'adios' con la mano",
  },
  {
    areaId: 1,
    edadId: 4,
    description:
      "Llama a sus padres 'mamá' o 'papá' o con algún otro nombre especial",
  },
  {
    areaId: 1,
    edadId: 4,
    description:
      "Entiende la palabra 'no' (hace una pausa breve o se detiene cuando usted la dice)",
  },
  {
    areaId: 2,
    edadId: 4,
    description:
      "Pone algo en un recipiente, como un bloque de juguete dentro de una taza",
  },
  {
    areaId: 2,
    edadId: 4,
    description:
      "Busca las cosas cuando ve que usted las esconde (como un juguete debajo de una manta)",
  },
  {
    areaId: 3,
    edadId: 4,
    description: "Jala algo para ponerse de pie",
  },
  {
    areaId: 3,
    edadId: 4,
    description: "Camina apoyandosé en los muebles",
  },
  {
    areaId: 3,
    edadId: 4,
    description: "Bebe de una taza sin tapa, mientras usted la sujeta",
  },
  {
    areaId: 3,
    edadId: 4,
    description:
      "Levanta las cosas entre el dedo índice y el pulgar, como trozos pequeños de comida",
  },
  {
    areaId: 0,
    edadId: 5,
    description:
      "Copia a otros niños mientras juega, como sacar juguetes de un contenedor cuando otro niño lo hace",
  },
  {
    areaId: 0,
    edadId: 5,
    description: "Le muestra a usted un objeto que le gusta",
  },
  {
    areaId: 0,
    edadId: 5,
    description: "Aplaude cuando se emociona",
  },
  {
    areaId: 0,
    edadId: 5,
    description: "Abraza una muñeca u otro juguete de peluche",
  },
  {
    areaId: 0,
    edadId: 5,
    description: "Le muestra afecto (lo abraza, acaricia o besa)",
  },
  {
    areaId: 1,
    edadId: 5,
    description:
      "Trata de decir una o dos palabras, además 'mamá' o 'papá' como 'ota' (por pelota) o 'ito' (por perrito)",
  },
  {
    areaId: 1,
    edadId: 5,
    description: "Mira un objeto conocido cuando usted lo nombra",
  },
  {
    areaId: 1,
    edadId: 5,
    description:
      "Sigue las instrucciones que se le da con un gesto(acción). Por ejemplo le pasa un jueguete cuando usted le estira la mano y le dice: 'Dame el juguete'",
  },
  {
    areaId: 1,
    edadId: 5,
    description: "Señala con la mano para pedir algo o para obtener ayuda",
  },
  {
    areaId: 2,
    edadId: 5,
    description:
      "Trata de usar las cosas de la manera correcta, como un teléfono, una taza o un libro",
  },
  {
    areaId: 2,
    edadId: 5,
    description:
      "Coloca, uno sobre otro, al menos 2 objetos pequeños como dos bloques",
  },
  {
    areaId: 3,
    edadId: 5,
    description: "Da unios pasos solo",
  },
  {
    areaId: 3,
    edadId: 5,
    description: "Usa los dedos para llevarse a la boca algunos alimentos",
  },
  {
    areaId: 0,
    edadId: 6,
    description:
      "Se aleja de usted, pero lo busca para asegurarse de que está cerca",
  },
  {
    areaId: 0,
    edadId: 6,
    description: "Señala para mostrarle algo que le llama la atención",
  },
  {
    areaId: 0,
    edadId: 6,
    description: "Extiende las manos para que se las lave",
  },
  {
    areaId: 0,
    edadId: 6,
    description: "Mira algunas páginas de un libro con usted",
  },
  {
    areaId: 0,
    edadId: 6,
    description:
      "Ayuda cuando lo viste, pasando los brazos por las mangas o levantando los pies",
  },
  {
    areaId: 1,
    edadId: 6,
    description: "Intenta decir tres palabras o más además de mamás o papá",
  },
  {
    areaId: 1,
    edadId: 6,
    description:
      "Sigue instrucciones de 1 paso sin hacerle gestos; por ejemplo, le entrega un juguete cuando le dice 'dámelo'",
  },
  {
    areaId: 2,
    edadId: 6,
    description: "Imita las tareas que hace usted, como barrer, con la escoba",
  },
  {
    areaId: 2,
    edadId: 6,
    description:
      "Juega con juguetes de manera sencilla, por ejemplo, empuja un carrito de juguete",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Camina sinb agarrarse de alguien o a algo",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Hace garabatos",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Bebe de una taza sin tapa y aveces puede derrarmar la bebida",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Se alimenta usando los dedos",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Intenta usar la cuchara",
  },
  {
    areaId: 3,
    edadId: 6,
    description: "Se sube y baja de un sofá o silla sin ayuda",
  },
  {
    areaId: 0,
    edadId: 7,
    description:
      "Se da cuenta cuando otra persona está lastimada o triste; por ejemplo, se detiene o pone cara triste cuando alguien está llorando",
  },
  {
    areaId: 0,
    edadId: 7,
    description:
      "Lo mira a la cara para ver cómo reacionará en una situación nueva",
  },
  {
    areaId: 1,
    edadId: 7,
    description:
      "Señala las cosas que aparecen en los libros cuando le pregunta: '¿Dónde está el osito?'",
  },
  {
    areaId: 1,
    edadId: 7,
    description:
      "Señala al menos 2 partes del cuerpo cuando le pide que le muestre",
  },
  {
    areaId: 2,
    edadId: 7,
    description:
      "Sostiene algo en un a mano mientras usa la otra; por ejemplo sostiene un recipiente mientras le quita la tapa",
  },
  {
    areaId: 2,
    edadId: 7,
    description: "Intenta usar las manijas o botones de los juguetes",
  },
  {
    areaId: 2,
    edadId: 7,
    description:
      "Juega con más de un juguete a la vez; por ejemplo, pone comida de juguete en un plato de juguete",
  },
  {
    areaId: 3,
    edadId: 7,
    description: "Patea una pelota",
  },
  {
    areaId: 3,
    edadId: 7,
    description: "Corre",
  },
  {
    areaId: 3,
    edadId: 7,
    description: "Sube varios escalones caminando (sin gatear) con o sin ayuda",
  },
  {
    areaId: 3,
    edadId: 7,
    description: "Come con cuchara",
  },
  {
    areaId: 0,
    edadId: 8,
    description: "Juega al lado de otros niños y a veces con ellos",
  },
  {
    areaId: 0,
    edadId: 8,
    description: "Le muestra lo que puede hacer diciendo '!mírame!'",
  },
  {
    areaId: 0,
    edadId: 8,
    description:
      "Sigue rutinas simples cuando se le pide; por ejemplo, ayuda a recoger los juguetes cuando le dice 'es hora de recoger los juguetes'",
  },
  {
    areaId: 1,
    edadId: 8,
    description: "Dice aproximandamente 50 palabras",
  },
  {
    areaId: 1,
    edadId: 8,
    description:
      "Dice dos o más palabras juntas siendo una de ellas una acción, como 'perrito corre'",
  },
  {
    areaId: 1,
    edadId: 8,
    description:
      "Nombra las cosas que ve en un libro cuando usted las señala y le pregunta '¿Qué es esto?'",
  },
  {
    areaId: 1,
    edadId: 8,
    description: "Dice palabras como 'yo', 'mi' o 'nosotros'",
  },
  {
    areaId: 2,
    edadId: 8,
    description:
      "Juega imaginariamente con las cosas; por ejemplo, alimenta una muñeca con un bloque de madera como si fuera comida",
  },
  {
    areaId: 2,
    edadId: 8,
    description:
      "Muestra habilidades sencillas para resolver problemas; por ejemplo, se para sobre un banquito para alcanzar algo",
  },
  {
    areaId: 2,
    edadId: 8,
    description:
      "Sigue instrucciones de dos pasos, como 'deja el juguete ahí y cierra la puerta'",
  },
  {
    areaId: 2,
    edadId: 8,
    description:
      "Demuestra que sabe por lo menos un color; por ejemplo, señala un crayón rojo si usted le pregunta: “¿Cuál es rojo? Demuestra que sabe por lo menos un color; por ejemplo, señala un crayón rojo si usted le pregunta: “¿Cuál es rojo?”",
  },
  {
    areaId: 3,
    edadId: 8,
    description:
      "Usa las manos para girar cosas; por ejemplo, gira la manija o perilla de las puertas o desenrosca tapas",
  },
  {
    areaId: 3,
    edadId: 8,
    description:
      "Se quita algunas prendas de vestir por sí solo como pantalones holgados o una chaqueta desabotonada",
  },
  {
    areaId: 3,
    edadId: 8,
    description: "Salta levantando los dos pies",
  },
  {
    areaId: 3,
    edadId: 8,
    description:
      "Pasa las páginas de un libro, de una página a la otra, cuando usted le lee",
  },
  {
    areaId: 0,
    edadId: 9,
    description:
      "Se tranquiliza dentro de 10 minutos después de que lo deja; por ejemplo, en la guardería",
  },
  {
    areaId: 0,
    edadId: 9,
    description: "Nota a los otros niños y se une a ellos para jugar",
  },
  {
    areaId: 1,
    edadId: 9,
    description:
      "Conversa con usted usando por lo menos dos frases de intercambio",
  },
  {
    areaId: 1,
    edadId: 9,
    description:
      "Hace preguntas con “quién”, “qué”, “dónde” o “por qué”; por ejemplo, “¿dónde está mami o papi?”",
  },
  {
    areaId: 1,
    edadId: 9,
    description:
      "Dice la acción que está ocurriendo en una imagen o en un libro cuando se lo preguntan; por ejemplo, “corriendo”, “comiendo” o “jugando”",
  },
  {
    areaId: 1,
    edadId: 9,
    description: "Dice su nombre cuando se lo preguntan",
  },
  {
    areaId: 1,
    edadId: 9,
    description:
      "Habla lo suficientemente bien como para que otros lo entiendan, la mayor parte del tiempo",
  },
  {
    areaId: 2,
    edadId: 9,
    description: "Dibuja un círculo cuando le muestra cómo hacerlo",
  },
  {
    areaId: 2,
    edadId: 9,
    description:
      "Evita tocar los objetos calientes, como la estufa, cuando usted se lo advierte",
  },
  {
    areaId: 3,
    edadId: 9,
    description:
      "Inserta objetos en un hilo, como cuentas grandes, cereal o macarrones",
  },
  {
    areaId: 3,
    edadId: 9,
    description:
      "Se pone alguna ropa solito, como pantalones flojos o una chaqueta",
  },
  {
    areaId: 3,
    edadId: 9,
    description: "Usa el tenedor",
  },
  {
    areaId: 0,
    edadId: 10,
    description:
      "Imagina ser otra persona o cosa cuando está jugando (maestro, superhéroe, perro)",
  },
  {
    areaId: 0,
    edadId: 10,
    description:
      "Pide ir a jugar con otros niños si no hay ninguno alrededor; por ejemplo, “¿puedo jugar con Alex?”",
  },
  {
    areaId: 0,
    edadId: 10,
    description:
      "Consuela a otros que están lastimados o tristes; por ejemplo, abraza a un amigo que está llorando",
  },
  {
    areaId: 0,
    edadId: 10,
    description:
      "Evita peligros; por ejemplo, no salta desde lugares altos en el patio de recreo",
  },
  {
    areaId: 0,
    edadId: 10,
    description: "Le gusta ser un “ayudante”",
  },
  {
    areaId: 0,
    edadId: 10,
    description:
      "Cambia de comportamiento según donde se encuentre (lugares religiosos, biblioteca, patio de recreo o juegos)",
  },
  {
    areaId: 1,
    edadId: 10,
    description: "Forma oraciones con 4 o más palabras",
  },
  {
    areaId: 1,
    edadId: 10,
    description:
      "Dice algunas de las palabras de una canción, cuento, o rima infantil",
  },
  {
    areaId: 1,
    edadId: 10,
    description:
      "Habla de al menos una cosa que haya sucedido durante su día; por ejemplo, “jugué al fútbol”",
  },
  {
    areaId: 1,
    edadId: 10,
    description:
      "Responde preguntas sencillas como “¿Para qué es el abrigo?” o “¿Para qué es el crayón?”",
  },
  {
    areaId: 2,
    edadId: 10,
    description: "Dice algunos colores de objetos",
  },
  {
    areaId: 2,
    edadId: 10,
    description: "Dice lo que sigue en un cuento que conoce bien",
  },
  {
    areaId: 2,
    edadId: 10,
    description: "Dibuja personas con 3 o más partes del cuerpo",
  },
  {
    areaId: 3,
    edadId: 10,
    description:
      "Agarra una pelota grande cuando se la arrojan, la mayor parte del tiempoAgarra una pelota grande cuando se la arrojan, la mayor parte del tiempo",
  },
  {
    areaId: 3,
    edadId: 10,
    description:
      "Se sirve comida o agua con la supervisión de un adulto o Desabotona algunos botones",
  },
  {
    areaId: 3,
    edadId: 10,
    description:
      "Sostiene un crayón o lápiz entre los dedos y el pulgar (no con la mano empuñada)",
  },
  {
    areaId: 0,
    edadId: 11,
    description:
      "Sigue las reglas o se turna cuando juega algún juego con otros niños",
  },
  {
    areaId: 0,
    edadId: 11,
    description: "Canta, baila o actúa para usted",
  },
  {
    areaId: 0,
    edadId: 11,
    description:
      "Hace tareas de la casa simples, como juntar las medias iguales o levantar la mesa después de comer",
  },
  {
    areaId: 1,
    edadId: 11,
    description:
      "Cuenta historias que ha escuchado o que ha inventado incluyendo al menos 2 eventos; por ejemplo, un gato que no puede bajar de un árbol y un bombero que lo salva ",
  },
  {
    areaId: 1,
    edadId: 11,
    description:
      "Contesta preguntas sencillas sobre un cuento después de oírlo",
  },
  {
    areaId: 1,
    edadId: 11,
    description: "Mantiene una conversación con más de 3 intercambios",
  },
  {
    areaId: 1,
    edadId: 11,
    description: "Usa o reconoce rimas simples (gato-pato, casa-taza)",
  },
  {
    areaId: 2,
    edadId: 11,
    description:
      "Dice algunos números entre el 1 y el 5 cuando usted se los señala",
  },
  {
    areaId: 2,
    edadId: 11,
    description:
      "Usa palabras sobre el tiempo, como “ayer”, “mañana”, “la mañana” o “la noche”",
  },
  {
    areaId: 2,
    edadId: 11,
    description:
      "Presta atención por 5 a 10 minutos durante una actividad; por ejemplo, cuando le cuenta una historia o hace manualidades (el tiempo delante de la pantalla no cuenta)",
  },
  {
    areaId: 2,
    edadId: 11,
    description: "Escribe algunas de las letras de su nombre",
  },
  {
    areaId: 2,
    edadId: 11,
    description: "Dice algunas letras cuando usted se las señala",
  },
  {
    areaId: 2,
    edadId: 11,
    description: "Cuenta hasta 10",
  },
  {
    areaId: 3,
    edadId: 11,
    description: "Se abotona algunos botones",
  },
  {
    areaId: 3,
    edadId: 11,
    description: "Salta en un pie",
  },
];
export const competencias = competenciasWithoutId.map((e, i) => ({
  id: i,
  ...e,
}));

export const ALWAYS = "Siempre";
export const NEVER = "Nunca";
export const SOMETIMES = "A veces";
export const answersResponses = [NEVER, SOMETIMES, ALWAYS].map((a, idx) => ({
  id: idx,
  description: a,
}));

export const getCompetenciasByAreaAndEdad = (areaId, edadId) =>
  competencias.filter((i) => i.areaId === areaId && i.edadId === edadId);
