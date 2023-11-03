//introducción a js
//scripts ECMaScritps isomórfico
//trabaja bajo secuencias

//letiables
/*$name
_name
name
//no debe contener espacios

let numero = 1;

let nombre = 'Taylor';

let miVariable = true;

let miVariableArr = [1, 'bob'];

let suma = a+b

pi = 3.1416
const pi 

*/


//console.log(`el número ${a} es muy bonito`); //tiene que ser con comillas invertidas.


//ejercicio 1

let a  = 5;
let b = 10;

console.log(`la suma es ${a+b}`)


/*operadores
    aritmeticos + - * / mod %
    comparación == igual o  identico === != !==
    < > <= >=
    logicos && || !
*/

/*
let num1 = parseInt(prompt('digite el primer numero'));
let num2 = parseInt(prompt('digite el segundo número'))



console.log(`la suma es ${num1+num2}`)

*/
//funcion que haga la suma de dos numeros
// una especie de calculadora

function suma(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
      let resultado = a + b;
      console.log("La suma de " + a + " y " + b + " es: " + resultado);
    } else {
      console.log("Por favor, ingrese números válidos.");
    }
  }
  
function resta(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
      let resultado = a - b;
      console.log("La resta de " + a + " y " + b + " es: " + resultado);
    } else {
      console.log("Por favor, ingrese números válidos.");
    }
  }

function multip(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
      let resultado = a * b;
      console.log("La multiplicación de " + a + " y " + b + " es: " + resultado);
    } else {
      console.log("Por favor, ingrese números válidos.");
    }
  }

function divi(a, b) {
    if (!isNaN(a) && !isNaN(b) && b!== 0) {
      let resultado = a / b;
      console.log("La división de " + a + " y " + b + " es: " + resultado);
    } else {
      console.log("Por favor, ingrese números válidos.");
    }
  }



let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
suma(num1, num2);
resta(num1, num2);
multip(num1, num2);
divi(num1, num2);
