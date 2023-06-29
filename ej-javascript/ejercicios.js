// Activando el modo script
// "use strict"


// Ejercicio N. 1
// El siguiente codigo se ejecuta una vez cargue en el html
alert("Bienvenidos al mundo de javascript...:)");


// Ejercicio N. 2. use strict no permite utilizar variables
// que no hayan sido declaradas...
let nombreAprendiz = "Jaider Andres";
alert(nombreAprendiz);

// Ejercicio N. 3.
// crear 2 variables tipo string (nombres y apellidos)...
// y las mostramos en consola...
let nombresAprendiz = "Alejandro ";
let apellidosAprendiz = "olave";
console.log("Ejercicio N. 3");
console.log(nombreAprendiz + apellidosAprendiz);

// ejercicio N.4
let num1int = 5;
let num2int =3;
let num3str = "4";
let num4str = "3";

console.log();
console.log("Ejercicio N. 4");
console.log("Entero + Entero (4+3)");
console.log(num1int + num2int);
console.log("string + string (\"4\"+\"3\")");
console.log(num3str+num4str);
console.log("Entero + string (5+\"4\")");
console.log(num1int+num3str);

// Ejercicio N. 5
// de string a entero
console.log("conversion explicita de variables");
console.log("conversion de spring a entero");
let num3int = parseInt(num3str);
let resultadoInt = num1int + num2int;
console.log(resultadoInt);
// De entero a string
console.log("conversion explicita de entero a spring");
let num1str = num1int.toString();
let resultadoStr = num3str + num1str;
console.log(resultadoStr);
// De entero y spring a decimal
console.log("conversion de entero a decimal");
let num1float = parseFloat(num1int);
let num3float = parseFloat(num3str);
let num5float = 5.3;
console.log("valores :" + num1float + "+" + num3float + "+" + num5float);
console.log("resultado :" + (num1float + num3float + num5float));
// De decimal a entero
let num6int = Math.ceil(num5float);
console.log("conversion de decimal (5.3) a Entero con ajuste hacia el techo: " + num6int);
let nombre1 = "Thalia"
// // Limitacion para declaracion de variables
// // 1. No iniciar variables con numeros
// let nombre = "Vicente";
// // los nombres de variables no llevan espacios
// let nombre Aprendiz = "Margarita";
// // la declaracion de la variable no lleva comillas ni caracteres especiales de tipo -, /
// let "apellidos" = "sanchez";
// let nombres-apellidos = "Fernandos Rojas";
// let primer/nombre = "saul";
// // No podemos declarar variables con nombres restringidos
// let for = 5;
// let switch = "Deporte";
// let while = 12.5;

// 
// Ejercicio N. 6
console.log("Operadores Aritmeticos");
let numArit1 = 9;
let numArit2 = 6;
console.log("Suma: ");
console.log("Suma numArit1 (9) + numArit2 (6): " + (numArit1 + numArit2));
console.log("Resta: ");
console.log("numArit2 (6) - numArit2 (9): " + (numArit2 - numArit1));
console.log("Multiplicacion: ");
console.log("numArit1 (9) * numArit2 (6): " + (numArit1 * numArit2));
console.log("Division: ");
let resulDiv = numArit1 / numArit2;
console.log("Residuo:" + (numArit1 % numArit2));

console.log("numArit1 (9) / numArit2 (6): " + (numArit1 / numArit2));
console.log("Redondear Segun el promedio");
console.log(Math.round(resulDiv));
console.log("Redondear hacia abajo");
console.log(Math.floor(resulDiv));
console.log("Redondear hacia arriba");
console.log(Math.ceil(resulDiv));



