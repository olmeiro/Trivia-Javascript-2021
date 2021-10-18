import { cardRespuestas, tituloPregunta } from "./cardPregunta";

import { juego, jugador, puntaje } from '../index';

const btnSiguiente = document.getElementById('siguiente');

export function mostrarPreguntaDOM(question, correct_answer, incorrect_answers, categoriaAleatoria ){

    tituloPregunta(question);
    cardRespuestas(correct_answer, incorrect_answers);

    const btnRespuesta = document.querySelectorAll('.btn-answer');

    btnRespuesta.forEach( boton => {
        const dataAnswer = boton.getAttribute('data-answer');
        
        if(dataAnswer === 'correct_answer'){
            boton.onclick = respuestaCorrecta;
        }else{
            boton.onclick = respuestaIncorrecta;
        }
    }); 
}

function respuestaCorrecta(e) {
    
    puntaje.aumentarAcumulado();
    const puntajeAcumulado = puntaje.getAcumulado;

    jugador.setPuntajeAcumulado = puntajeAcumulado;
    juego.setPuntajeFinal = puntajeAcumulado;

    console.log("participanteId: ", juego.id);
    console.log("participanteJuego: ", juego.getParticipante);
    console.log("participantePuntajeAcumulado", juego.getPuntajeFinal);

    const idJugador = juego.id;
    const nombreJugador = juego.getParticipante;
    const puntosFinal = juego.getPuntajeFinal;

    const datosFinal = {
        idJugador,
        nombreJugador,
        puntosFinal
    }

    juego.datosJuegoFinal(datosFinal);

    textAcumulado.textContent = puntajeAcumulado;
    
    Swal.fire('Respuesta correcta. Ganas un punto');
    e.target.setAttribute('disabled', true);
    
}

function respuestaIncorrecta(){
    puntaje.resetAcumulado();
    const puntajeAcumulado = puntaje.getAcumulado;
    textAcumulado.textContent = puntajeAcumulado;

    jugador.setPuntajeAcumulado = puntajeAcumulado;
    juego.setPuntajeFinal = puntajeAcumulado;
    console.log("participanteId: ", juego.id);
    console.log("participanteJuego: ", juego.getParticipante);
    console.log("participantePuntajeAcumulado: ", juego.getPuntajeFinal);

    const idJugador = juego.id;
    const nombreJugador = juego.getParticipante;
    const puntosFinal = juego.getPuntajeFinal;

    const datosFinal = {
        idJugador,
        nombreJugador,
        puntosFinal
    }

    juego.datosJuegoFinal(datosFinal);
    
    btnSiguiente.setAttribute('disabled', true);
    console.log(puntaje.getAcumulado);
    Swal.fire({
        icon: 'Respuesta incorrecta',
        title: 'Oops...',
        text: 'Pierdes el acumulado!',
      });
}
