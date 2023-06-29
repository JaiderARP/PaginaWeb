// console.log("==Fecha y hora GMT");
// let timeGMT = new Date();
// console.log(timeGMT);

// console.log("==Fecha y hora en string==")
// let timeGMTstr = timeGMT.toString();
// console.log(timeGMTstr);

// console.log("==Obtener el dia de la semana==");
// let timeGMTDay = timeGMT.getDay();
// console.log(timeGMTDay);
// let diaSemana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
// console.log("Hoy es :" + diaSemana[timeGMTDay]);

// console.log("==Obtener el mes del año==");
// let timeGMTMes = timeGMT.getMonth();
// console.log(timeGMTMes);
// let Mes = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log("el mes es :" + Mes[timeGMTMes]);

// console.log("==Fecha y hora desfragmentada==");
let currentTime = new Date();
// console.log("Dia de la semana:" + currentTime.getDay());
// console.log("mes del año:" + currentTime.getMonth());
// console.log("Dia del mes:" + currentTime.getDate());
// console.log("Año: " + currentTime.getFullYear());
// console.log("Hora: " + currentTime.getHours());
// console.log("Minutos : " + currentTime.getMinutes());
// console.log("Segundos : " + currentTime.getSeconds());
// console.log("Milisegundos: " + currentTime.getMilliseconds());

console.log("==Milisegundos transcurridos desde 01/01/1970==");
console.log(currentTime.getTime());

console.log("==estableciendo diferencia en fecha==");
let newYear2024 = new Date("January 1, 2024");
let fechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let fechaActualms = fechaActual.getTime();

let milisecDiff = newYear2024ms - fechaActualms;
let Diasdiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("Dias faltantes para año nuevo: " + Math.floor(Diasdiff));


// console.log("Segundos faltantes:" + fechaDifvot / 1000);
// console.log("Minutos faltantes:" + fechaDifvot / (1000 * 60));
// console.log("Horas faltantes:" + fechaDifvot / (1000 * 60 * 60));
// console.log("Dias faltantes:" + fechaDifvot / (1000 * 60 * 60 * 24));
calcularTiempoVotaciones();

function calcularTiempoVotaciones () {
    console.log("Ingresar fecha y hora");
    let fechaHora = new Date("July 2, 2023 08:00:00");
    let fechaHorams = fechaHora.getTime();
    let fechaDifvot = fechaHorams - fechaActualms;
    let diasrestantes = Math.floor(fechaDifvot / (1000 * 60 * 60 * 24));
    let horasRestantes = Math.floor(fechaDifvot / (1000 * 60 * 60));
    let horasRestantesSinDecimales = Math.floor(horasRestantes % 24);
    let mintosRestantes = fechaDifvot / (1000 * 60);
    let mintosRestantesSinDecimales = Math.floor(mintosRestantes % 60);
    console.log("El tiempo restante para las votaciones es: " + diasrestantes + "Dias, " + horasRestantesSinDecimales + "Horas y " + mintosRestantesSinDecimales + " Minutos");
}












