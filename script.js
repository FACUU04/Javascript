alert("Bienvenid@ a mi web")
alert("¡ERROR! Completa todos los campos")

let nombre = "luna";
let edad = "25";
let numeroDeVentas = 50;
let saldoDisponible = 1000; 

let mensajeDeERROR = "¡ERROR CRITICO!";
alert(mensajeDeERROR)


let Nombre = prompt("Cual es tu nombre?")
console.log("El nombre ingresado es =" + Nombre)

alert(`Bienvenid@ ${Nombre}!`);

let Edad = prompt(`Ingresa tu edad para continuar ${Nombre}`)
console.log("La edad del usuario es:" + Edad)
if (Edad >= 18){
    alert("Puedes continuar")
}
if (Edad <=17){
    alert("Acceso denegado")
}

let Diasemana = prompt("Que dia es hoy?");
console.log("Hoy es:" + Diasemana);

if(Diasemana === 'Sabado' | Diasemana === 'sabado'| Diasemana === 'Domingo' | Diasemana === 'domingo') {
    alert("Buen fin de semana :)")
} else {
    alert("Buena semana! :)")
}

let Numero = prompt("Ingresa un numero");
console.log("El numero ingresado es:" + Numero);

if (Numero >=0){
    alert("El numero es positivo")
} else {
    alert("El numero que ingresaste es negativo")
}

let Puntuacion = 85;

if (Puntuacion >=100){
    alert("FELICIDADES, GANASTE!!!")
} else {
    alert("ARG, estuviste cerca, intenta otra vez para ganar")
}

let Saldo = 350;
console.log("El saldo actual es de $:" + Saldo);

let Mensaje = `Tu saldo actual es de $${Saldo}` 
alert (Mensaje);