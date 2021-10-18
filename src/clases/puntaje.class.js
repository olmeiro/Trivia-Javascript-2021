

export class Puntaje {
    constructor(){
        this.acumulado= 0;
        this.maximo = 25;
    }

    set setAcumulado(num) {
        this.acumulado = num;
    }

    get getAcumulado(){
        return this.acumulado;
    }

    get getMaximo(){
        return this.maximo;
    }

    aumentarAcumulado(){
        return this.acumulado = this.acumulado + 1;
    }

    resetAcumulado (){
        return this.acumulado = 0;
    }
}