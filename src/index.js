import "./styles.css";

import { Juego, Jugador, Puntaje } from './clases/index';

import { getPreguntas } from "./componentes/getPreguntas";
import { categoriaAleatoria } from "./componentes/categoriaAleatoria";
import { mostrarPreguntaDOM } from "./componentes/mostrarPreguntasDOM";
import { borrarPreguntaDOM } from "./componentes/borrarPreguntasDOM";
import { terminarJuego } from "./componentes/terminarJuego";


const spanJugador = document.getElementById('jugador');
const inputNombre = document.getElementById('nombreJugador');
const textAcumulado = document.getElementById('textAcumulado');
const textPremioTotal = document.getElementById('textPremioTotal');

const btnEmpezar = document.getElementById('inicio');
const btnSiguiente = document.getElementById('siguiente');
const btnRetiro = document.getElementById('retiro');

btnEmpezar.addEventListener('click', iniciarJuego);
btnRetiro.addEventListener('click', terminarJuego);
btnSiguiente.setAttribute('disabled', true);

let rondaActual = 1;

btnSiguiente.addEventListener('click', () => {
    extraerSiguientePregunta();
})

//Instancias:
export const jugador = new Jugador();
export const puntaje = new Puntaje();
export const juego = new Juego();

function iniciarJuego (){

    spanJugador.innerHTML = inputNombre.value;
    textAcumulado.innerHTML = 0;
    textPremioTotal.innerHTML = 0;
    btnSiguiente.textContent = 'Siguiente pregunta';
    btnSiguiente.removeAttribute('disabled');

    const {cantidad, categoria, dificultad} = categoriaAleatoria();
    getPreguntas(cantidad, categoria, dificultad, rondaActual);

    jugador.setNombre = inputNombre.value;
    juego.setParticipante = jugador.nombre;

    extraerSiguientePregunta();
}

function extraerSiguientePregunta (rondaActual=1) {
    borrarPreguntaDOM();

    try {
        const dataPreguntas = JSON.parse(localStorage.getItem(`${rondaActual}`));
        console.log(dataPreguntas);
    
        const aleatorio = Math.floor(Math.random()*dataPreguntas.results.length);
        const preguntaAleatoria = dataPreguntas.results[aleatorio];
        
        const categoriaAleatoria = dataPreguntas.results[aleatorio].category;
        
        // apagarBtnCategoria(categoriaAleatoria);//descomentar cuando tenga lista la parte de las rondas
    
        const question = preguntaAleatoria.question;
        const correct_answer = preguntaAleatoria.correct_answer;
        const incorrect_answers = preguntaAleatoria.incorrect_answers;
    
        mostrarPreguntaDOM(question, correct_answer, incorrect_answers, categoriaAleatoria);
    } catch (error) {
        console.log(error);
        Swal.fire('Problemas con el servidor, empiece nuevo juego.');
    }

  
}