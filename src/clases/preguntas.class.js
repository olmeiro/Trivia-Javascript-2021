export class Preguntas {
  constructor() {
    this.preguntas = [];
    this.preguntasRonda = [];
    this.cantidadPreguntasRealizadas = 0;
  }

  guardarPreguntas(numeroRonda) {
    localStorage.setItem(`preguntasRonda-${numeroRonda}`);
  }

  setPreguntasRonda(array) {
    this.preguntasRonda = array;
  }

  getPreguntasRonda() {
    return this.preguntasRonda;
  }

  aumentarCantidadPreguntasRealizadas() {
    this.cantidadPreguntasRealizadas = this.cantidadPreguntasRealizadas + 1;
  }

  resetCantidadPreguntasRealizadas() {
    this.cantidadPreguntasRealizadas = 0;
  }
}
