export class Ronda {
  constructor() {
    this.numeroRonda = 1;
    this.maxRondas = 5;
  }

  aumentarRonda(ronda) {
    this.numeroRonda = this.numeroRonda + 1;
  }

  get getNumeroRonda() {
    return this.numeroRonda;
  }

  get getMaxRondas() {
    return this.maxRondas;
  }
}
