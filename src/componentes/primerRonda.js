import { Ronda } from '../clases/ronda.class';

import { getPreguntas } from './getPreguntas';
import { tituloPregunta, cardRespuestas } from './cardPregunta';
import { respuestaCorrecta, respuestaIncorrecta } from './verificarRespuesta';

import { siguientePregunta } from './siguientePregunta';
import { terminarJuego } from './terminarJuego';

const btnSiguiente = document.getElementById('siguiente');
const btnRetiro = document.getElementById('retiro');

const btnsCategorias = document.querySelectorAll('.btn-category');

const cantidadPreguntas = 5;
let preguntasRealizadas = 0;
let preguntasCorrectas = 0;

export const ronda = async(numeroRonda) => {

    if(numeroRonda === 1){
        const {cantidad, categoria, dificultad} = categoriaAleatoria();
        apagarBtnCategoria(categoria);
        const preguntas = await getPreguntas(cantidad, categoria, dificultad,`ronda${numeroRonda}`);
        const preguntasPrimerRonda = JSON.parse(localStorage.getItem(`primerRonda`));
        console.log(preguntasPrimerRonda)

        // const aleatorio = Math.floor(Math.random()*preguntasPrimerRonda.results.length);
        let numPregunta = 0;
        const preguntaAleatoria = preguntasPrimerRonda.results[numPregunta];

        const question = preguntaAleatoria.question;
        const correct_answer = preguntaAleatoria.correct_answer;
        const incorrect_answers = preguntaAleatoria.incorrect_answers;

        tituloPregunta(question);
        cardRespuestas( correct_answer, incorrect_answers);

        const btnRespuesta = document.querySelectorAll('.btn-answer');
        console.log("btnRespuesta",btnRespuesta);

        btnRespuesta.forEach( boton => {
            const dataAnswer = boton.getAttribute('data-answer');
            
            if(dataAnswer === 'correct_answer'){
                boton.onclick = respuestaCorrecta;
            }else{
                boton.onclick = respuestaIncorrecta;
            }
        });   
        
        preguntasRealizadas++;
        console.log("preguntasRealizadas: ",preguntasRealizadas)
        btnSiguiente.addEventListener('click', ()=>{
            siguientePregunta(preguntasRealizadas, preguntasRealizadas)
        });
        btnRetiro.onclick = terminarJuego;
    }else{
        siguienteRonda(cantidad=5,categoria, dificultad,numronda);
    }
}  


function categoriaAleatoria (){

    const listaCategorias = [];

    btnsCategorias.forEach( elem => {
        listaCategorias.push(parseInt(elem.dataset.numero));
    });
    
    const categoriaSistema = listaCategorias[Math.floor(Math.random()*listaCategorias.length)];

    const cantidad = 5;
    const categoria = categoriaSistema;
    const dificultad = 'easy';
    
    return {cantidad, categoria, dificultad};
}

function apagarBtnCategoria(categoria){
    btnsCategorias.forEach( elem => {
            
        const numCategoria = parseInt(elem.dataset.numero);
        
        if(categoria === numCategoria){
            elem.setAttribute('disabled', true);
        }
    });
}
