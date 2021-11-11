export class Juego {
  constructor(participante, puntajeacumulado) {
    this.id = new Date().getTime();
    this.participante;
    this.puntajeFinal;
    this.juegos = [];
  }

  set setParticipante(participante) {
    this.participante = participante;
  }

  get getParticipante() {
    return this.participante;
  }

  set setPuntajeFinal(puntajeFinal) {
    this.puntajeFinal = puntajeFinal;
  }

  get getPuntajeFinal() {
    return this.puntajeFinal;
  }

  datosJuegoFinal(datosJuego) {
    this.juegos.push(datosJuego);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem(`juego${this.id}`, JSON.stringify(this.juegos));
  }
}
