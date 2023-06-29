console.log("hola cachon desde node");

let ciudad = "pitalito";
let ciudadUpper = ciudad.toUpperCase();
console.log("Todo a mayusculas" + ciudadUpper);
let ciudadLow = ciudad.toLowerCase();
console.log("Todo a minuscula" + ciudadLow);                                   
let ciudadOracion =ciudad[0]. toUpperCase() +  ciudad.slice(1). toLowerCase();
console.log("Tipo de oracion" + ciudadOracion);

let anyo = "2023-06-22";
let anyoStr = anyo.toString();
let anyoCard = anyoStr.slice(2, 4);
console.log("año: " + anyoCard);

let nombres = "Darickson stiven Mamian Chacon";
let cantNombres = nombres.length;
console.log("Longitud nombre: " + cantNombres);
