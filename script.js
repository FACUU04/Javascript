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

let Edad = prompt("Ingrese su edad para continuar")
console.log("La edad del usuario es:" + Edad)
if (Edad >= 18){
    alert("Puedes continuar")
}
if (Edad <=17){
    alert("Acceso denegado")
}
