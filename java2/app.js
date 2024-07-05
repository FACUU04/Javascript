let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio'

function consola() {
console.log ("El boton fue clickado");
}

function Brasil() {
  let nombre = prompt("Dime el nombre de una ciudad de Brasil");
  console.log(`Estuve en ${nombre} y me acorde de ti`);  
}

function JS() {
    alert("Yo AMO JS")
}


function cuenta() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let suma = numero1 + numero2;
    alert("La suma es: " + suma);
}