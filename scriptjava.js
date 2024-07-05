let nombre = ("Facu");
let valor1 = 16;
let valor2 = 19;
let resultadocuenta = valor1 + valor2;
let resultadocuenta2 = valor1 - valor2;



console.log(`${nombre}`)
console.log("Bienvenido al programa :)")
console.log(`El resultado de ${valor1} + ${valor2} es ${resultadocuenta}`);
console.log(`La diferencia entre ${valor1} y ${valor2} es ${resultadocuenta2}`);

alert(`${nombre}`);

let programacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(programacion)

let edad = prompt("Porfavor, Ingrese su edad:");
edad = parseInt(edad);
if (edad >= 18){
    console.log("El usuario es mayor de edad")
} else {
    console.log("El usuario es menor de edad")
}

let numero = prompt("Ingrese un numero")
numero = parseFloat(numero);
if (numero >0){
    console.log("El numero ingresado es positivo")
}  else if (numero <0) {
    console.log("El numero ingresado en negativo")
} else {
    console.log("El numero ingresado es cero")
}

let cuenta = 1;
while (cuenta <=10) {
    console.log(cuenta);
    cuenta++
}

let nota = 6
if (nota >=7 ){
    console.log("Aprobado")
} else {
    console.log("Desaprobado")
}

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatorio entero generado entre 1 y 100:", numeroAleatorio);

let numeroAleatorio1 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entero generado entre 1 y 10:", numeroAleatorio1);

let numeroAleatorio2 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entero generado entre 1 y 1000:", numeroAleatorio2);

