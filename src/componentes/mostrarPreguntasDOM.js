import { cardRespuestas, tituloPregunta } from "./cardPregunta";
import { Puntaje } from '../clases/puntaje.class';

const puntaje = new Puntaje();

export function mostrarPreguntaDOM(question, correct_answer, incorrect_answers ){

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

function respuestaCorrecta() {
    
    puntaje.aumentarAcumulado();
    const puntajeAcumulado = puntaje.getAcumulado;
    textAcumulado.textContent = puntajeAcumulado;

    Swal.fire('Respuesta correcta. Ganas un punto');
    
}

function respuestaIncorrecta(){
    Swal.fire({
        icon: 'Respuesta incorrecta',
        title: 'Oops...',
        text: 'Pierdes el acumulado!',
      });
}
