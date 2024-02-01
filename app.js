// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingrese un número entre 1 y 10';

let numeroSecreto = 0; //Se ponen en cero pq la funcion condicionesIniciales() les dan valores
let intentos = 0;
let listaNumerosSorteados = [];
let intentosMaximos = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++
        limpiarCaja()
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*intentosMaximos)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si se sortearon todos los numeros
    if (listaNumerosSorteados.length == intentosMaximos) {
        asignarTextoElemento('p','Se sortearon todos los numeros')
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    }

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Ingrese un numero del 1 al ${intentosMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


condicionesIniciales();
console.log(numeroSecreto);