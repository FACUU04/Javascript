let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let cantidad = 'vez';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Indica un numero entre 1 y 10, haber si puedes adivinar el que estoy pensando :)");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario} FELICIDADES GANASTE! en ${intentos} ${cantidad}`)
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero que estoy pensando es mas chico");
        } else {
            alert("El numero que estoy pensando es mas grande");
        }         
        alert('No acertaste el numero :(')

        intentos = intentos + 1;
        cantidad = "veces";
    }
}