/*

  TODO: Se recomienda instalar las extensiones: Better Comments y Error Lens

  ? ¿Qué son las variables?

  * En JavaScript, las variables son como contenedores con nombre que almacenan información. Son esenciales para la programación, 
    * ya que permiten manipular y reutilizar datos a lo largo del código.

  ? ¿Para qué se utilizan las variables?

  * Las variables se utilizan para:

    * Almacenar datos de diferentes tipos: Números, cadenas de texto, valores booleanos, etc.
    * Organizar y reutilizar información: Evitan repetir datos en el código, haciéndolo más legible y eficiente.
    * Realizar cálculos y operaciones: Manipular los valores almacenados en las variables.
    * Controlar el flujo del programa: Tomar decisiones y ejecutar diferentes secciones de código según las condiciones.

*/

// Declaración de variables en JavaScript

// Declarando una variable con la palabra clave `var`
var nombre = "Juan";

// Declarando una variable con la palabra clave `let`
let edadUser = 30;

// Declarando una variable con la palabra clave `const`
const PI = 3.1415;

// Se puede hacer de esta manera también solo con `let` y `var`

var suma;
suma = 3 + 4;
suma = 3 + 5;
suma = 3 + 6;

let resta;
resta = 3 - 4;
resta = 3 - 5;
resta = 3 - 6;

//* Esto se debe a que las palabras reservadas `let` y `var` son variables que pueden cambiar constantemente.

/*
  ! No se puede usar esta forma de declaración con la palabra reservada `const`, debido a que esta palabra reservada indica que
  ! el valor dentro de esta variable no va a cambiar nunca
*/

const APELLIDO = "Trejos";
APELLIDO = "Blanco";

console.log(APELLIDO); //!--> Imprime: TypeError: Assignment to constant variable. at <anonymous>:num:num

/*
  ? ¿Tipos de variables en JavaScript?

  * Existen tres tipos principales de variables en JavaScript:

    * Variables globales: Declaradas fuera de cualquier función, son accesibles desde cualquier parte del programa.
    * Variables locales: Declaradas dentro de una función, solo son accesibles dentro de esa función.
    * Variables de bloque: Declaradas con la palabra clave `let` o `const`, solo son accesibles dentro del bloque de código donde se declararon.

  * Alcance de las variables:

    * El alcance de una variable define en qué partes del programa está disponible.

    * Alcance global: Las variables globales están disponibles en todo el programa.
    * Alcance de función: Las variables locales solo están disponibles dentro de la función donde se declararon.
    * Alcance de bloque: Las variables de bloque solo están disponibles dentro del bloque de código donde se declararon 
    * (por ejemplo, dentro de un `if` o un `for`).
*/

// Variable global
var mensaje = "Hola";

function saludar() {
  // Variable local
  let nombre = "Pedro";
  console.log(mensaje + ", " + nombre); // Acceso a variable global y local
}

saludar(); // Imprime: Hola, Pedro
console.log(nombre); //! Imprime: ReferenceError: `nombre` is not defined at <anonymous>:num:num

if (true) {
  // Variable de bloque `edad`
  let edad = 30;
  console.log("Edad dentro del bloque:", edad); // Imprime: 30
}

console.log("Edad fuera del bloque:", edad); //! Imprime: ReferenceError: `edad` is not defined at <anonymous>:num:num

