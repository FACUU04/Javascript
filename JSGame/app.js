// Configuraciones de dificultad
const dificultades = {
    facil: { max: 10, intentos: 3 },
    medio: { max: 50, intentos: 5 },
    dificil: { max: 100, intentos: 7 },
    demencial: { max: 150, intentos: 10 }
};

let dificultadSeleccionada = 'facil'; // Dificultad por defecto
let intentosMaximos = dificultades[dificultadSeleccionada].intentos;
let numeroSecreto = 0;
let intentos = 0;

// Mostrar la ventana de selección de dificultad
function mostrarModal() {
    document.getElementById('modalDificultad').classList.remove('hidden');
}

// Ocultar la ventana de selección de dificultad
function ocultarModal() {
    document.getElementById('modalDificultad').classList.add('hidden');
}

// Seleccionar la dificultad y empezar el juego
function seleccionarDificultad(dificultad) {
    dificultadSeleccionada = dificultad;
    numeroMaximo = dificultades[dificultad].max;
    intentosMaximos = dificultades[dificultad].intentos;

    // Ocultar el modal y mostrar las condiciones iniciales
    ocultarModal();
    condicionesIniciales();
}

// Generar el número secreto
function generarNumeroSecreto() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroSecreto)
}

// Actualizar texto en los elementos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Verificar el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `🎉 ¡Acertaste! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        intentos++;
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor.');
        } else {
            asignarTextoElemento('p', 'El número es mayor.');
        }

        if (intentos === intentosMaximos) {
            asignarTextoElemento('p', `❌ ¡Game Over! El número era ${numeroSecreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }

    limpiarCaja();
}

// Limpiar el campo de entrada
function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

// Configurar condiciones iniciales del juego
function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;

    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}. Tienes ${intentosMaximos} intentos.`);
    console.log(`Número secreto: ${numeroSecreto}`); // Debug
}

// Reiniciar el juego y volver a mostrar la ventana de selección
function reiniciarJuego() {
    limpiarCaja();
    mostrarModal();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Mostrar el modal al cargar la página
window.onload = mostrarModal;