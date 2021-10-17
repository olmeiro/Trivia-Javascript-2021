import moduleName from '../componentes/inicioJuego';

export class Juego {

    constructor(participante){
        
        this.participante = participante;
        this.fecha = new Date();
        
    }

    set setParticipante(participante){
        this.participante = participante;
    }

    get getParticipante(){
        return this.participante;
    }

    inicioJuego(){

    }


}