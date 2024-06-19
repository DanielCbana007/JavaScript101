/*

    TODO: Se recomienda instalar las extensiones: Better Comments y Error Lens

    ? ¿Qué son los tipos de datos en JavaScript?

    * En programación, los tipos de datos son la base para clasificar y organizar la información que se utiliza en un programa. 
    * Cada tipo de dato define las características y el comportamiento de los valores que almacena. En JavaScript, existen dos categorías 
    * principales de tipos de datos:

    ? 1. Tipos de datos primitivos:

    * Los tipos de datos primitivos son los más básicos y fundamentales en JavaScript. Son valores simples que no se pueden descomponer 
    * en partes más pequeñas. Existen 7 tipos de datos primitivos en JavaScript:

    * Número (number): Representa valores numéricos, tanto enteros como decimales. Ejemplos: 10, -3.14, 0.001.

    * Cadena de texto (string): Representa secuencias de caracteres encerrados entre comillas simples o dobles. Ejemplos: "Hola mundo", 
    * 'JavaScript', ''.

    * Valor booleano (boolean): Representa valores lógicos que pueden ser true (verdadero) o false (falso). Ejemplos: true, false.

    * Null (null): Representa la ausencia de un valor. Se utiliza para indicar que una variable no contiene ningún dato. Ejemplo: null.

    * Undefined (undefined): Representa una variable que no ha sido inicializada o que ha sido eliminada intencionalmente. Ejemplo: 
    * let variable; console.log(variable); // Imprime: undefined.

    * Symbol (symbol): Representa valores únicos e inmutables que se utilizan para identificar objetos o propiedades de manera privada. 
    * Se introdujo en ES6. Ejemplo: const simbolo = Symbol('identificador');.

    * Valor BigInt (bigint): Representa números enteros de gran magnitud que superan el límite de los números de tipo number. 
    * Se introdujo en ES2020. Ejemplo: const bigInt = 9007199254740991n;.
*/

//? Tipos de datos primitivos

const NUMERO = 1;//--> number

const TEXTO = "Hola un gusto";//--> string

const vALORES_LOGICOS = true;//--> boolean

const NULO = null;//--> null

let indefinido;//--> Undefined

const SYMBOL = Symbol();//--> symbol

const BIGINT = 9007199254740991n;//--> bigint

/*
    ? 2. Objetos:

    * Los objetos son estructuras de datos más complejas que almacenan colecciones de valores y propiedades. Se utilizan para 
    * representar entidades en el mundo real o para organizar datos de manera estructurada. Un objeto se compone de propiedades, que 
    * son pares de clave-valor, y métodos, que son funciones asociadas al objeto.
*/

const PERSONA = {
    nombre: 'Pepito',
    edad: 18
}

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dociembre'];

const MAP = new Map();

const SET = Set;

function name(params) {
    const VALOR1 = params;
}


/*
    ! Informacion importante

    ? 1. null:

    * Representa la ausencia de un valor: Se utiliza para indicar que una variable no contiene ningún dato.

    * No es un objeto: A diferencia de otros tipos de datos, null no es un objeto y no tiene propiedades ni métodos.
    
    * Es igual a undefined en algunas comparaciones: Cuando se compara con undefined utilizando el operador de igualdad estricta 
    * (===), null es igual a undefined. Sin embargo, no son iguales cuando se utilizan operadores de comparación no estrictos (==).

    ? 2. function:

    * Representa una función: Un valor function es una instancia de un objeto de función, que encapsula el código de una función 
    * y su estado.

    * Es un tipo de dato primitivo: Aunque los objetos de función se comportan como objetos, el valor function en sí mismo se considera 
    * un tipo de dato primitivo.

    * Se puede usar como argumento de funciones: Las funciones pueden recibir otras funciones como argumentos.
*/

//? ejemplo 1 (null)
console.log(null === undefined); // Imprime: true
console.log(null == undefined); // Imprime: true

const variable = null;
if (variable === null) {
  console.log("La variable es null"); // Imprime: La variable es null
}

if (variable == undefined) {
  console.log("La variable es undefined"); // Imprime: La variable es undefined
}


//? ejemplo 2 (null)
function saludar(nombre) {
    if (nombre === null) {
        console.log("No hay nombre proporcionado");
    } else {
        console.log("Hola", nombre);
    }
}

saludar(null); // Imprime: No hay nombre proporcionado
saludar("Juan"); // Imprime: Hola Juan


//? ejemplo 1 (function)
function ejecutarFuncion(funcion) {
if (typeof funcion === "function") {
    funcion();
} else {
    console.error("El argumento no es una función");
}
}

ejecutarFuncion(function() {
    console.log("Función anónima ejecutada");
});

const saludar = function(nombre) {
    console.log("Hola", nombre);
};

ejecutarFuncion(saludar); // Imprime: Hola Juan


//? ejemplo 2 (function)

function crearSaludo(nombre) {
    return function() {
        console.log("Hola", nombre);
    };
}

const saludoJuan = crearSaludo("Juan");
saludoJuan(); // Imprime: Hola Juan


/*
    ? 3. NaN (Not a Number):

    * Representa un resultado no numérico: Se utiliza para indicar que una operación matemática no pudo producir un valor numérico válido.

    * Se genera en diversas situaciones:
        * Conversión fallida de una cadena de texto a un número (por ejemplo, parseInt("hola")).
        * División por cero (5 / 0).
        * Operaciones matemáticas con NaN (por ejemplo, NaN + 1).
        * 
    * No es igual a ningún otro valor: Ni siquiera a sí mismo. Comparar NaN con NaN siempre devuelve false.
    * 
    ? 4. Infinity:

    * Representa un valor numérico infinito: Se utiliza para indicar que un número es demasiado grande o pequeño para representarlo en 
    *la computadora.

    * Se genera en dos formas:
        * División por cero cuando el operando es negativo (-5 / 0).
        * Usar métodos como Number.MAX_VALUE + 1 o Number.MIN_VALUE - 1.

    * Es un valor positivo y negativo: Existen Infinity positivo (Number.POSITIVE_INFINITY) e Infinity negativo (Number.NEGATIVE_INFINITY).

    * Se puede verificar con la función isFinite(): La función isFinite() comprueba si un valor es un número finito (no NaN ni Infinity).
*/

//? ejemplo 1 (NaN)

console.log(isNaN(NaN)); // Imprime: true
console.log(NaN === NaN); // Imprime: false
console.log(5 / 0); // Imprime: NaN
console.log(parseInt("hola")); // Imprime: NaN


//? ejemplo 2 (NaN)

const valor = parseInt("100px");

if (isNaN(valor)) {
  console.error("El valor no es un número válido");
} else {
  console.log("El valor es un número:", valor);
}

//? ejemplo 1 (Infinity)

console.log(isFinite(Infinity)); // Imprime: false
console.log(isFinite(-Infinity)); // Imprime: false
console.log(isFinite(5)); // Imprime: true

console.log(-5 / 0); // Imprime: -Infinity
console.log(Number.MAX_VALUE + 1); // Imprime: Infinity


//? ejemplo 2 (Infinity)

console.log(NaN + 1); // Imprime: NaN
console.log(Infinity + 1); // Imprime: Infinity
console.log(Infinity - Infinity); // Imprime: NaN
console.log(Infinity * 0); // Imprime: NaN
console.log(Infinity / Infinity); // Imprime: NaN

/*
    ? El operador typeof en JavaScript
    
    * El operador typeof en JavaScript se utiliza para determinar el tipo de dato de un valor. Se aplica a un valor como argumento 
    * y devuelve una cadena que indica el tipo de dato. Es una herramienta fundamental para comprender y trabajar con diferentes 
    * tipos de datos en un programa.
*/

//? sintaxis

typeof valor;

//? ejemplos de uso 

const numero = 10;
const cadena = "Hola";
const booleano = true;
const vari = undefined;
const objeto = {};
const funcion = function() {};
const simbolo = Symbol('identificador');
const bigInt = 9007199254740991n;

console.log(typeof numero); // Imprime: "number"
console.log(typeof cadena); // Imprime: "string"
console.log(typeof booleano); // Imprime: "boolean"
console.log(typeof vari); // Imprime: "undefined"
console.log(typeof objeto); // Imprime: "object"
console.log(typeof funcion); // Imprime: "function"
console.log(typeof simbolo); // Imprime: "symbol"
console.log(typeof bigInt); // Imprime: "bigint"