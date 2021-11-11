export class Jugador {
  constructor(nombre, puntajeAcumulado, puntajeFinal) {
    this.nombre = nombre;
    this.puntajeAcumulado = puntajeAcumulado;
    this.puntajeFinal = puntajeFinal;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getNombre() {
    return this.nombre;
  }

  set setPuntajeAcumulado(PuntajeAcumulado) {
    this.PuntajeAcumulado = PuntajeAcumulado;
  }

  get getPuntajeAcumulado() {
    return this.PuntajeAcumulado;
  }

  set setPuntajeFinal(PuntajeFinal) {
    this.PuntajeFinal = PuntajeFinal;
  }

  get getPuntajeFinal() {
    return this.PuntajeFinal;
  }
}
