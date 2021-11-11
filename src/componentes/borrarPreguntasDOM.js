const divTituloPregunta = document.querySelector(".question");
const divRespuestas = document.querySelector(".respuestas");

export function borrarPreguntaDOM() {
  if (
    divTituloPregunta.childElementCount > 0 &&
    divRespuestas.childElementCount > 0
  ) {
    divTituloPregunta.removeChild(divTituloPregunta.firstElementChild);
    divRespuestas.removeChild(divRespuestas.firstElementChild);
  }
  return;
}
