console.log("Hello world!");

// FUNCTIONS
// Permiten reutilizar bloques de código las veces necesarias.
// La declaracion y asignacion de una función se hace una sola vez.

// 1. Declaración
//          Parametros
function suma(x, y) {
  return x + y;
}

// 2. Invocación
//              Argumentos
const suma1 = suma(4, 5);
console.log(suma1);

const suma2 = suma(1436, 5876);
console.log(suma2);

/**
 * CREAR UNA FUNCIÓN QUE DEPENDIENDO EL IDIOMA QUE PIDAMOS SALIDE DE UNA MAREA DISTINA
 *
 * LOS IDIOMAS DISPONIBLES SON INGLÉS, ESPAÑOL, ALEMAN Y CHINO
 */

function hello(lenguage) {
  let phrase = "";
  switch (lenguage) {
    case "spanish":
      phrase = "Hola, ¿Còmo estas?";
      break;
    case "english":
      phrase = "Hi. How are you?";
      break;
    case "german":
      phrase = "Hallo, Wie geht's die?";
      break;
    case "chinease":
      phrase = "Ni hao. Ni hue shuo hang yu ma?";
      break;
    default:
      phrase = "Please insert a valid lenguage";
      break;
  }
  return "Greetings in " + lenguage + ": " + phrase;
}
console.log(hello("english"));

/**
 * TIPOS DE FUNCIONES
 */
// A. FUNCIÓN DE DECLARACIÓN
function saltar(){
  console.log("saltando")
}
saltar()
// B. FUNCIÓN DE EXPRESIÓN
const correr = function () {
  console.log("Corriendo")
}
correr()
// B1. VERSIÓN MODERNA - ES6+
caminar = () => {
    console.log("caminar")
}
caminar()