import { cardRespuestas, tituloPregunta } from "./cardPregunta";

import { terminarJuego } from './terminarJuego';

const divTituloPregunta = document.querySelector('.question');
const divRespuestas = document.querySelector('.respuestas');

const btnSiguiente = document.getElementById('siguiente');
const btnRetiro = document.getElementById('retiro');


export function siguientePregunta(numeroPregunta, preguntaRealizadas){
    console.log(numeroPregunta);
    divTituloPregunta.remove();
    divRespuestas.remove();

    let preguntasRealizadas = preguntaRealizadas
    let sigPregunta = numeroPregunta++;

    if(sigPregunta < 5){

        const preguntasPrimerRonda = JSON.parse(localStorage.getItem(`primerRonda`));
        console.log("preguntas:" , preguntasPrimerRonda);
        const preguntaAleatoria = preguntasPrimerRonda.results[sigPregunta];

        const question = preguntaAleatoria.question;
        const correct_answer = preguntaAleatoria.correct_answer;
        const incorrect_answers = preguntaAleatoria.incorrect_answers;

        tituloPregunta(question);
        cardRespuestas( correct_answer, incorrect_answers);

        // const btnRespuesta = document.querySelectorAll('.btn-answer');
        // console.log("btnRespuesta",btnRespuesta);

        // btnRespuesta.forEach( boton => {
        //     const dataAnswer = boton.getAttribute('data-answer');
            
        //     if(dataAnswer === 'correct_answer'){
        //         boton.onclick = respuestaCorrecta;
        //     }else{
        //         boton.onclick = respuestaIncorrecta;
        //     }
        // });   
        
        preguntasRealizadas++;
        console.log("preguntasRealizadas: ",preguntasRealizadas)
        btnSiguiente.addEventListener('click', ()=>{
            siguientePregunta(preguntasRealizadas)
        });
        btnRetiro.onclick = terminarJuego;

    }

}