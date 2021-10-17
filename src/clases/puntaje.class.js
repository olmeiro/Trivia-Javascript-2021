

export class Puntaje {
    constructor(){
        this.acumulado= 0;
        this.maximo = 25;
    }

    get getMaximo(){
        return this.maximo;
    }

    get getAcumulado(){
        return this.acumulado;
    }

    aumentarAcumulado(){
        return this.acumulado = this.acumulado + 1;
    }
}