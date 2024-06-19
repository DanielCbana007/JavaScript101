/*

    TODO: Se recomienda instalar las extensiones: Better Comments y Error Lens

    ? Asignación de valores a variables en JavaScript

    * En JavaScript, la asignación de valores a variables es fundamental para almacenar y manipular información en un programa. 
    * El proceso implica crear una variable y asociarle un valor utilizando el operador de asignación (=).
*/

//? Sintaxis básica

nombre_variable = valor;

//? Ejemplos

// Asignar un número a una variable
let edad = 30;

// Asignar una cadena de texto a una variable
const nombre = "Juan";

// Asignar un valor booleano a una variable
let esEstudiante = true;

// Asignar una variable a otra variable
let variable1 = 10;
let variable2 = variable1;

// Asignar el resultado de una operación a una variable
let suma = 5 + 3;
let resultado = suma;

/*
    ? Buenas prácticas:

    * Utilizar nombres de variables descriptivos: Es importante elegir nombres de variables que sean claros y representen el contenido 
    * que almacenan.

    * Declarar variables antes de usarlas: Se recomienda declarar las variables al inicio del bloque de código donde se utilizarán.

    * Evitar reasignar valores a variables constantes: Las variables const no deben ser reasignadas después de su inicialización.

    * Utilizar el tipo de variable adecuado: Elegir el tipo de variable correcto (var, let o const) según el alcance y la mutabilidad 
    * del dato que se va a almacenar.


    ? Asignación por referencia:

    * En JavaScript, la asignación de valores se realiza por referencia, lo que significa que cuando se asigna una variable a otra, 
    * ambas variables hacen referencia al mismo espacio en memoria. Modificar el valor de una variable afecta al valor de la otra 
    * variable a la que está referenciada.
*/

let variable3 = 10;
let variable4 = variable3;

console.log(variable3); // Imprime: 10
console.log(variable4); // Imprime: 10

variable3 = 20;

console.log(variable3); // Imprime: 20
console.log(variable4); // Imprime: 20

/*
    ? Asignación por desestructuración:

    * La asignación por desestructuración permite extraer valores de objetos o arrays y asignarlos a variables individuales. 
    * Es una forma concisa y eficiente de acceder a datos estructurados.
 */

const persona = {
    nombrePersona: "Pedro",
    edadPersona: 35,
    profesionPersona: "Desarrollador"
};

const { nombrePersona, edadPersona } = persona;

console.log(nombrePersona); // Imprime: Pedro
console.log(edadPersona); // Imprime: 35