import { Jugador }  from '../clases/jugador.class';
import { Preguntas } from '../clases/preguntas.class';
import { Puntaje } from '../clases/puntaje.class';
import { Ronda } from '../clases/ronda.class';

import { ronda } from './primerRonda';
import { siguientePregunta } from './siguientePregunta';
import { terminarJuego } from './terminarJuego';

const spanJugador = document.getElementById('jugador');
const inputNombre = document.getElementById('nombreJugador');
const textAcumulado = document.getElementById('textAcumulado');
const textPremioTotal = document.getElementById('textPremioTotal');
 
const btnSiguiente = document.getElementById('siguiente');
const btnRetiro = document.getElementById('retiro');

const jugador = new Jugador( inputNombre.value);
const preguntas = new Preguntas();
const puntaje = new Puntaje();
const rondaObj = new Ronda();

export function start(){
    
    spanJugador.innerHTML = inputNombre.value;
    textAcumulado.innerHTML = 0;
    textPremioTotal.innerHTML = 0;

    let numeroRonda = 1;
    ronda(numeroRonda);
}