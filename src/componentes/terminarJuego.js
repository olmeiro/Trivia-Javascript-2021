
import { puntaje } from "./mostrarPreguntasDOM";

const spanJugador = document.getElementById('jugador');
const inputNombre = document.getElementById('nombreJugador');
const textAcumulado = document.getElementById('textAcumulado');

const btnSiguiente = document.getElementById('siguiente');

const textPremioTotal = document.querySelector('textPremioTotal');

const divTituloPregunta = document.querySelector('.question');
const divRespuestas = document.querySelector('.respuestas');

export function terminarJuego() {
  Swal.fire("Abandonas el juego. Pierdes el acumulado");
  btnSiguiente.setAttribute('disabled', true);

  divTituloPregunta.removeChild(divTituloPregunta.firstElementChild);
  divRespuestas.removeChild(divRespuestas.firstElementChild);

  const resetPuntaje = puntaje.resetAcumulado();
  textAcumulado.innerHTML = 0;
}

// boton.setAttribute('disabled', true);