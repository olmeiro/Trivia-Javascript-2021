import { cardRespuestas, tituloPregunta } from "./cardPregunta";
import { Puntaje } from '../clases/puntaje.class';
// import { apagarBtnCategoria } from "./apagarBtnCategoria";

export const puntaje = new Puntaje();

export function mostrarPreguntaDOM(question, correct_answer, incorrect_answers, categoriaAleatoria ){

    tituloPregunta(question);
    cardRespuestas(correct_answer, incorrect_answers);

    const btnRespuesta = document.querySelectorAll('.btn-answer');

    btnRespuesta.forEach( boton => {
        const dataAnswer = boton.getAttribute('data-answer');
        
        if(dataAnswer === 'correct_answer'){
            boton.onclick = respuestaCorrecta;
           
            console.log("son iguales y ahora con disabled");
        }else{
            boton.onclick = respuestaIncorrecta;
        }
    }); 
    // apagarBtnCategoria(categoriaAleatoria);
}

function respuestaCorrecta(e) {
    console.log(e);
    
    puntaje.aumentarAcumulado();
    const puntajeAcumulado = puntaje.getAcumulado;

    textAcumulado.textContent = puntajeAcumulado;

    Swal.fire('Respuesta correcta. Ganas un punto');
    e.target.setAttribute('disabled', true);
    
}

function respuestaIncorrecta(){
    Swal.fire({
        icon: 'Respuesta incorrecta',
        title: 'Oops...',
        text: 'Pierdes el acumulado!',
      });
}
