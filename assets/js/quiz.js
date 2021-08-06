// Quien quiere ser millonario
// Inicializar Variables
let btnStart = document.getElementById("btnStart");
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let btnC = document.getElementById("btnC");
let btnD = document.getElementById("btnD");
let pregunta = document.getElementById("pregunta");
let puntos = 0;
let negativos = 0;
let contador = 0;

let habilitar = 0;
let habilitarBotones = 0;
let numeroActual = 0;

let preguntas = [
  "¿Que significa html? ",
  "¿Qué etiqueta utilizamos para definir el cuerpo del documento?",
  "¿Qué etiqueta utilizamos para insertar una línea horizontal?",
  "¿Cuál es la forma correcta de insertar un comentario?",
  "¿Elija la forma correcta de ingresar una imagen. ? ",
  " Hay un terremoto, necesitas guardar la informacion ",
  " Bonus: 1 + 1 ",
  "¿ Elija la etiqueta que nos dá el título más grande ? ",
  "¿CSS controla el aspecto gráfico de una página web mediante ___________ indicando al navegador como se deben visualizar los elementos de un documento HTML ",
  " Para mantener el CSS separado del HTML ( es decir en otro archivo), se utiliza el elemento________ en la cabecera.",
  "Determina sobre que elementos HTML aplica el estilo ",
  "¿ Que es bootstrap? ",
  "¿ Cuantos H1 es recomendable poner por pagina?",
  "¿ Cuantos Body pueden haber por pagina? ?",
  "¿Ques es Scrum ?",
  "¿Que hace un Scrum master?",
];

let respuestas = [
  [
    "A. Hyper Text Mask Language",
    "B. Hard Text Markup Language",
    "C.  Hyper Text Markup Language ",
    "D. Hiper Type Markup Language",
  ],
  ["A. background", "B. body", "C. html cuerpo ", "D. heard"],
  ["A. br ", "B. hr", "C. line", "D. wbr"],
  ["A. !--...-- ", "B. ¡--...--! ", "C.  comment", "D.  meta"],
  [
    "A. img src ",
    "B. imgage src",
    "C. background src ",
    "D. insert image src ",
  ],
  [
    "A. git (fetch pull commit)",
    "B. git (add log commit)",
    "C. git (push commit pull)",
    "D. git (add commit push)",
  ],
  ["A. 2 ", "B. Esta no es", "C. Tampoco esta", "D. Es la A"],
  ["A. Title ", "B. H1 ", "C. H7 ", "D. head "],
  [
    "A. Una página dinámica ",
    "B. Un programa PHP ",
    "C. El código HTML",
    "D. Las hojas de estilo ",
  ],
  ["A. cite", "B. style", "C. link ", "D. file d"],
  ["A. Propiedad", "B. Selector", "C. Variable", "D. Constante"],
  [
    "A. Biblioteca de herramientas ",
    "B. Pagina web ",
    "C. commando de HTML ",
    "D. Una organizacion ",
  ],
  ["A. 4 ", "B. 2 ", "C. 3 ", "D. 1 "],
  ["A. Solo 1 ", "B.  Los que se necesiten ", "C. Maximo 3 ", "D. Ninguno "],
  [
    "A. Funciones de CSS ",
    "B. Software de equipo ",
    "C. Metodogia agil ",
    "D. Mascara de html ",
  ],
  [
    "A. Hace cumplir todo el ciclo SCRUM, ",
    "B. Se Encarga de las reuniones ",
    "C. Apoya a los otros miembros ",
    "D. Todas las anteriores ",
  ],
];

let Correctas = [3, 2, 1, 1, 1, 4, 1, 2, 4, 3, 2, 1, 4, 1, 3, 4];

// Funciones

const generateRandom = (min, max) => {
  return Math.round(Math.random() * (1 + max - min) + min);
};

const nuevaPregunta = () => {
  let numero = generateRandom(0, 15);
  habilitarBotones = 1;
  numeroActual = numero;
  pregunta.innerHTML = contador + 1 + ". " + preguntas[numeroActual];

  btnA.innerHTML = respuestas[numeroActual][0];
  btnB.innerHTML = respuestas[numeroActual][1];
  btnC.innerHTML = respuestas[numeroActual][2];
  btnD.innerHTML = respuestas[numeroActual][3];
};

const activar = (opcion) => {
  console.log(Correctas[numeroActual] + "opcion" + (opcion + 1));
  if (Correctas[numeroActual] == opcion + 1) {
    puntos += 1;
    contador += 1;
    nuevaPregunta();
  } else {
    contador += 1;
    negativos += 1;
    nuevaPregunta();
  }
  if (contador == 3) {
    pregunta.innerHTML = " ¿Quieres volver a jugar? ";
    btnA.innerHTML = " si, Oprime click para comenzar";
    btnB.innerHTML = " si, Oprime click para comenzar ";
    btnC.innerHTML = " si, Oprime click para comenzar ";
    btnD.innerHTML = " si, Oprime click para comenzar ";
    alert(
      " PUNTAJE : " +
        puntos +
        "/3" +
        "\n Respuestas correctas : " +
        puntos +
        " Respuestas incorrectas : " +
        negativos
    );
    contador = 0;
    puntos = 0;
    negativos = 0;
    habilitarBotones = 0;
  }
};

// Eventos

btnA.onclick = function () {
  if (habilitarBotones == 1) {
    activar(0);
  }
};
btnB.onclick = function () {
  if (habilitarBotones == 1) {
    activar(1);
  }
};
btnC.onclick = function () {
  if (habilitarBotones == 1) {
    activar(2);
  }
};
btnD.onclick = function () {
  if (habilitarBotones == 1) {
    activar(3);
  }
};
btnStart.onclick = function () {
  habilitar = 1;
  alert("La prueba comienza ahora!");
  nuevaPregunta();
};
