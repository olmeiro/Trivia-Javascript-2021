import "./styles.css";
import { tituloPregunta, cardRespuestas } from './componentes/cardPregunta';

import { Puntaje } from './clases/puntaje.class';

const puntaje = new Puntaje();

const spanJugador = document.getElementById('jugador');
const inputNombre = document.getElementById('nombreJugador');
const textAcumulado = document.getElementById('textAcumulado');
const textPremioTotal = document.getElementById('textPremioTotal');

const btnEmpezar = document.getElementById('inicio');
const btnSiguiente = document.getElementById('siguiente');
const btnRetiro = document.getElementById('retiro');

const btnsCategorias = document.querySelectorAll('.btn-category');

const divTituloPregunta = document.querySelector('.question');
const divRespuestas = document.querySelector('.respuestas');

btnEmpezar.addEventListener('click', iniciarJuego);
btnRetiro.addEventListener('click', terminarJuego);

let rondaActual = 1;

btnSiguiente.addEventListener('click', () => {
    extraerSiguientePregunta();
})

function iniciarJuego (){

    spanJugador.innerHTML = inputNombre.value;
    textAcumulado.innerHTML = 0;
    textPremioTotal.innerHTML = 0;
    btnSiguiente.textContent = 'Siguiente pregunta';

    const {cantidad, categoria, dificultad} = categoriaAleatoria();
    console.log("rondaActualInicio: ", rondaActual);
    
    getPreguntas(cantidad, categoria, dificultad, rondaActual);

    extraerSiguientePregunta();
}

async function getPreguntas (amount, category, difficulty, ronda)  {
    console.log("rondaenGetPreguntas: ", ronda);
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(`${ronda}`,JSON.stringify(data)); 
    })
}

function extraerSiguientePregunta (rondaActual=1) {
    borrarPreguntaDOM();

    const dataPreguntas = JSON.parse(localStorage.getItem(`${rondaActual}`));

    const aleatorio = Math.floor(Math.random()*dataPreguntas.results.length);
    const preguntaAleatoria = dataPreguntas.results[aleatorio];

    const question = preguntaAleatoria.question;
    const correct_answer = preguntaAleatoria.correct_answer;
    const incorrect_answers = preguntaAleatoria.incorrect_answers;


    mostrarPreguntaDOM(question, correct_answer, incorrect_answers);
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

function mostrarPreguntaDOM(question, correct_answer, incorrect_answers ){

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

function borrarPreguntaDOM(){
    if(divTituloPregunta.childElementCount > 0 && divRespuestas.childElementCount > 0){
        divTituloPregunta.removeChild(divTituloPregunta.firstElementChild);
        divRespuestas.removeChild(divRespuestas.firstElementChild);
    }
    return
}

function respuestaCorrecta() {
    
    puntaje.aumentarAcumulado();
    const puntajeAcumulado = puntaje.getAcumulado;
    textAcumulado.textContent = puntajeAcumulado;

    if(puntajeAcumulado % 5 == 0){rondaActual++;}

    Swal.fire('Respuesta correcta. Ganas un punto');

    
}

function respuestaIncorrecta(){
    Swal.fire({
        icon: 'Respuesta incorrecta',
        title: 'Oops...',
        text: 'Pierdes el acumulado!',
      });
}


function terminarJuego() {
    alert("el juego ha terminado");
}
