import { cardRespuestas, tituloPregunta } from "./cardPregunta";

import { juego, jugador, puntaje, preguntas, ronda } from "../index";

const btnSiguiente = document.getElementById("siguiente");

export function mostrarPreguntaDOM(
  question,
  correct_answer,
  incorrect_answers,
  categoriaAleatoria,
  aleatorio
) {
  tituloPregunta(question);
  cardRespuestas(correct_answer, incorrect_answers);

  const btnRespuesta = document.querySelectorAll(".btn-answer");

  btnRespuesta.forEach((boton) => {
    const dataAnswer = boton.getAttribute("data-answer");

    if (dataAnswer === "correct_answer") {
      boton.onclick = respuestaCorrecta;
    } else {
      boton.onclick = respuestaIncorrecta;
    }
  });
}

function respuestaCorrecta(e) {
  puntaje.aumentarAcumulado();
  const puntajeAcumulado = puntaje.getAcumulado;
  const cantPreguntas = preguntas.aumentarCantidadPreguntasRealizadas();

  jugador.setPuntajeAcumulado = puntajeAcumulado;
  juego.setPuntajeFinal = puntajeAcumulado;

  const idJugador = juego.id;
  const nombreJugador = juego.getParticipante;
  const puntosFinal = juego.getPuntajeFinal;

  const datosFinal = {
    idJugador,
    nombreJugador,
    puntosFinal,
  };

  juego.datosJuegoFinal(datosFinal);
  textAcumulado.textContent = puntajeAcumulado;

  if (puntaje.getAcumulado === 5) {
    ronda.aumentarRonda();
    Swal.fire(
      "pasamos a la siguiente ronda, Ganas 1 limón, por favor elije una nueva categoria y click en Siguiente pregunta."
    );
  } else if (puntaje.getAcumulado === 10) {
    ronda.aumentarRonda();
    Swal.fire(
      "pasamos a la siguiente ronda, Ganas 2 limones, por favor elije una nueva categoria y click en Siguiente pregunta."
    );
  } else if (puntaje.getAcumulado === 15) {
    ronda.aumentarRonda();
    Swal.fire(
      "pasamos a la siguiente ronda, Ganas 3 limones, por favor elije una nueva categoria y click en Siguiente pregunta."
    );
  } else if (puntaje.getAcumulado === 20) {
    ronda.aumentarRonda();
    Swal.fire(
      "pasamos a la siguiente ronda, Ganas 4 limones, por favor elije una nueva categoria y click en Siguiente pregunta."
    );
  } else if (puntaje.getAcumulado === 25) {
    ronda.aumentarRonda();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Eres un ganador, ahora tienes 5 limones.",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire("Respuesta correcta. Ganas un punto");
  }
  e.target.setAttribute("disabled", true);
}

function respuestaIncorrecta() {
  puntaje.resetAcumulado();
  preguntas.resetCantidadPreguntasRealizadas();
  const puntajeAcumulado = puntaje.getAcumulado;
  textAcumulado.textContent = puntajeAcumulado;

  jugador.setPuntajeAcumulado = puntajeAcumulado;
  juego.setPuntajeFinal = puntajeAcumulado;

  const idJugador = juego.id;
  const nombreJugador = juego.getParticipante;
  const puntosFinal = juego.getPuntajeFinal;

  const datosFinal = {
    idJugador,
    nombreJugador,
    puntosFinal,
  };

  juego.datosJuegoFinal(datosFinal);

  btnSiguiente.setAttribute("disabled", true);

  Swal.fire({
    icon: "Respuesta incorrecta",
    title: "Oops...",
    text: "Pierdes el acumulado!",
  });
}
