import "./styles.css";

import { Juego, Jugador, Puntaje, Preguntas, Ronda } from "./clases/index";

import { getPreguntas } from "./componentes/getPreguntas";
import { categoriaAleatoria } from "./componentes/categoriaAleatoria";
import { mostrarPreguntaDOM } from "./componentes/mostrarPreguntasDOM";
import { borrarPreguntaDOM } from "./componentes/borrarPreguntasDOM";
import { terminarJuego } from "./componentes/terminarJuego";

import {
  getNombreCategoria,
  traducirCategoria,
} from "./componentes/getNombreCategoria";
import { elegirNuevaCategoria } from "./componentes/siguienteCategoria";
import {
  apagarBtnCategoria,
  apagarBtnCategoriaNombre,
} from "./componentes/apagarBtnCategoria";

const spanJugador = document.getElementById("jugador");
const inputNombre = document.getElementById("nombreJugador");
const textAcumulado = document.getElementById("textAcumulado");
const textPremioTotal = document.getElementById("textPremioTotal");

const btnEmpezar = document.getElementById("inicio");
const btnSiguiente = document.getElementById("siguiente");
const btnRetiro = document.getElementById("retiro");

const btnCelebridades = document.getElementById("btn-check-celebrities");
const btnHistoria = document.getElementById("btn-check-historia");
const btnDeporte = document.getElementById("btn-check-deporte");
const btnAnimales = document.getElementById("btn-check-animales");
const btnGeo = document.getElementById("btn-check-geo");

btnCelebridades.addEventListener("click", elegirNuevaCategoria);
btnHistoria.addEventListener("click", elegirNuevaCategoria);
btnDeporte.addEventListener("click", elegirNuevaCategoria);
btnAnimales.addEventListener("click", elegirNuevaCategoria);
btnGeo.addEventListener("click", elegirNuevaCategoria);

const btnsCategorias = document.querySelectorAll(".btn-category");

btnEmpezar.addEventListener("click", iniciarJuego);
btnRetiro.addEventListener("click", terminarJuego);
btnSiguiente.setAttribute("disabled", true);

//Instancias:
export const jugador = new Jugador();
export const puntaje = new Puntaje();
export const juego = new Juego();
export const preguntas = new Preguntas();
export const ronda = new Ronda();

let dataPreguntas;
const rondaActual = ronda.getNumeroRonda;

btnSiguiente.addEventListener("click", () => {
  extraerSiguientePregunta(ronda.getNumeroRonda);
});

let h1Categoria;
let categoriaEnJuego;

async function iniciarJuego() {
  btnsCategorias.forEach((elem) => {
    elem.removeAttribute("disabled");
  });

  puntaje.resetAcumulado();
  spanJugador.innerHTML = inputNombre.value;
  textAcumulado.innerHTML = 0;
  //textPremioTotal.innerHTML = 0;
  btnSiguiente.textContent = "Siguiente pregunta";
  btnSiguiente.removeAttribute("disabled");

  const { cantidad, categoria, dificultad } = categoriaAleatoria();
  const getPreguntasLocalStorage = await getPreguntas(
    cantidad,
    categoria,
    dificultad,
    rondaActual
  );
  const ronda = 1;
  localStorage.setItem(
    `ronda-${ronda}`,
    JSON.stringify(getPreguntasLocalStorage.results)
  );

  const datosPreguntas = JSON.parse(localStorage.getItem("ronda-1"));
  preguntas.setPreguntasRonda(getPreguntasLocalStorage.results);
  const dataPreguntas = preguntas.getPreguntasRonda();

  jugador.setNombre = inputNombre.value;
  juego.setParticipante = jugador.nombre;

  //Poner categoria
  categoriaEnJuego = document.querySelector(".categoriaEnJuego");
  const h1Categoria = document.createElement("h1");
  const nombre = getNombreCategoria(categoria);
  h1Categoria.textContent = nombre;
  categoriaEnJuego.replaceChild(
    h1Categoria,
    categoriaEnJuego.firstElementChild
  );
  apagarBtnCategoria(categoria);

  extraerSiguientePregunta(rondaActual);
}

function extraerSiguientePregunta(rondaActual) {
  borrarPreguntaDOM();

  let aleatorio;

  let dataPreguntasArray = preguntas.getPreguntasRonda();

  if (rondaActual === 1) {
    try {
      dataPreguntas = preguntas.getPreguntasRonda();

      aleatorio = Math.floor(Math.random() * dataPreguntas.length);
      const preguntaAleatoria = dataPreguntas[aleatorio];

      dataPreguntas.splice(aleatorio, 1);

      const question = preguntaAleatoria.question;
      const correct_answer = preguntaAleatoria.correct_answer;
      const incorrect_answers = preguntaAleatoria.incorrect_answers;

      const categoriaElegida = preguntaAleatoria.category;
      //Poner categoria
      categoriaEnJuego = document.querySelector(".categoriaEnJuego");
      h1Categoria = document.createElement("h1");
      h1Categoria.textContent = traducirCategoria(categoriaElegida);
      categoriaEnJuego.replaceChild(
        h1Categoria,
        categoriaEnJuego.firstElementChild
      );

      mostrarPreguntaDOM(
        question,
        correct_answer,
        incorrect_answers,
        categoriaAleatoria,
        aleatorio
      );
    } catch (error) {
      console.log(error);
    }
  } else if (rondaActual === 2) {
    try {
      dataPreguntas = preguntas.getPreguntasRonda();

      aleatorio = Math.floor(Math.random() * dataPreguntas.length);
      const preguntaAleatoria = dataPreguntas[aleatorio];

      dataPreguntas.splice(aleatorio, 1);
      const question = preguntaAleatoria.question;
      const correct_answer = preguntaAleatoria.correct_answer;
      const incorrect_answers = preguntaAleatoria.incorrect_answers;

      const categoriaElegida = preguntaAleatoria.category;
      //Poner categoria
      categoriaEnJuego = document.querySelector(".categoriaEnJuego");
      h1Categoria = document.createElement("h1");
      h1Categoria.textContent = traducirCategoria(categoriaElegida);
      categoriaEnJuego.replaceChild(
        h1Categoria,
        categoriaEnJuego.firstElementChild
      );
      apagarBtnCategoriaNombre(categoriaElegida);

      mostrarPreguntaDOM(
        question,
        correct_answer,
        incorrect_answers,
        categoriaAleatoria,
        aleatorio
      );
    } catch (error) {
      console.log(error);
    }
  } else if (rondaActual === 3) {
    try {
      dataPreguntas = preguntas.getPreguntasRonda();

      aleatorio = Math.floor(Math.random() * dataPreguntas.length);
      const preguntaAleatoria = dataPreguntas[aleatorio];

      dataPreguntas.splice(aleatorio, 1);
      const question = preguntaAleatoria.question;
      const correct_answer = preguntaAleatoria.correct_answer;
      const incorrect_answers = preguntaAleatoria.incorrect_answers;

      const categoriaElegida = preguntaAleatoria.category;
      //Poner categoria
      categoriaEnJuego = document.querySelector(".categoriaEnJuego");
      h1Categoria = document.createElement("h1");
      h1Categoria.textContent = traducirCategoria(categoriaElegida);
      categoriaEnJuego.replaceChild(
        h1Categoria,
        categoriaEnJuego.firstElementChild
      );
      apagarBtnCategoriaNombre(categoriaElegida);

      mostrarPreguntaDOM(
        question,
        correct_answer,
        incorrect_answers,
        categoriaAleatoria,
        aleatorio
      );
    } catch (error) {
      console.log(error);
    }
  } else if (rondaActual === 4) {
    try {
      dataPreguntas = preguntas.getPreguntasRonda();

      aleatorio = Math.floor(Math.random() * dataPreguntas.length);
      const preguntaAleatoria = dataPreguntas[aleatorio];

      dataPreguntas.splice(aleatorio, 1);
      const question = preguntaAleatoria.question;
      const correct_answer = preguntaAleatoria.correct_answer;
      const incorrect_answers = preguntaAleatoria.incorrect_answers;

      const categoriaElegida = preguntaAleatoria.category;
      //Poner categoria
      categoriaEnJuego = document.querySelector(".categoriaEnJuego");
      h1Categoria = document.createElement("h1");
      h1Categoria.textContent = traducirCategoria(categoriaElegida);
      categoriaEnJuego.replaceChild(
        h1Categoria,
        categoriaEnJuego.firstElementChild
      );
      apagarBtnCategoriaNombre(categoriaElegida);

      mostrarPreguntaDOM(
        question,
        correct_answer,
        incorrect_answers,
        categoriaAleatoria,
        aleatorio
      );
    } catch (error) {
      console.log(error);
    }
  } else if (rondaActual === 5) {
    try {
      dataPreguntas = preguntas.getPreguntasRonda();

      aleatorio = Math.floor(Math.random() * dataPreguntas.length);
      const preguntaAleatoria = dataPreguntas[aleatorio];

      dataPreguntas.splice(aleatorio, 1);
      const question = preguntaAleatoria.question;
      const correct_answer = preguntaAleatoria.correct_answer;
      const incorrect_answers = preguntaAleatoria.incorrect_answers;

      const categoriaElegida = preguntaAleatoria.category;
      //Poner categoria
      categoriaEnJuego = document.querySelector(".categoriaEnJuego");
      h1Categoria = document.createElement("h1");
      h1Categoria.textContent = traducirCategoria(categoriaElegida);
      categoriaEnJuego.replaceChild(
        h1Categoria,
        categoriaEnJuego.firstElementChild
      );
      apagarBtnCategoriaNombre(categoriaElegida);

      mostrarPreguntaDOM(
        question,
        correct_answer,
        incorrect_answers,
        categoriaAleatoria,
        aleatorio
      );
    } catch (error) {
      console.log(error);
    }
  }
}
