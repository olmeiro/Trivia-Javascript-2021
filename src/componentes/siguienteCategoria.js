import { getPreguntas } from "./getPreguntas";
import { preguntas, ronda } from "../index";

export async function elegirNuevaCategoria(e) {
  let numCategoria = e.target.dataset.numero;
  let numeroRonda = ronda.getNumeroRonda;
  let preguntasRonda;
  let dataPreguntas;

  switch (numeroRonda) {
    case 2:
      preguntasRonda = await getPreguntas(
        5,
        numCategoria,
        "easy",
        ronda.getNumeroRonda
      );
      localStorage.setItem(
        `ronda-${numeroRonda}`,
        JSON.stringify(preguntasRonda.results)
      );
      const datosPreguntasR2 = JSON.parse(localStorage.getItem("ronda-2"));
      preguntas.setPreguntasRonda(datosPreguntasR2);
      dataPreguntas = preguntas.getPreguntasRonda();
      break;
    case 3:
      preguntasRonda = await getPreguntas(
        5,
        numCategoria,
        "medium",
        ronda.getNumeroRonda
      );
      localStorage.setItem(
        `ronda-${numeroRonda}`,
        JSON.stringify(preguntasRonda.results)
      );
      const datosPreguntasR3 = JSON.parse(localStorage.getItem("ronda-3"));
      preguntas.setPreguntasRonda(datosPreguntasR3);
      dataPreguntas = preguntas.getPreguntasRonda();
      break;
    case 4:
      preguntasRonda = await getPreguntas(
        5,
        numCategoria,
        "medium",
        ronda.getNumeroRonda
      );
      localStorage.setItem(
        `ronda-${numeroRonda}`,
        JSON.stringify(preguntasRonda.results)
      );
      const datosPreguntasR4 = JSON.parse(localStorage.getItem("ronda-4"));
      preguntas.setPreguntasRonda(datosPreguntasR4);
      dataPreguntas = preguntas.getPreguntasRonda();
      break;
    case 5:
      preguntasRonda = await getPreguntas(
        5,
        numCategoria,
        "hard",
        ronda.getNumeroRonda
      );
      localStorage.setItem(
        `ronda-${numeroRonda}`,
        JSON.stringify(preguntasRonda.results)
      );
      const datosPreguntasR5 = JSON.parse(localStorage.getItem("ronda-5"));
      preguntas.setPreguntasRonda(datosPreguntasR5);
      dataPreguntas = preguntas.getPreguntasRonda();
      break;

    default:
      break;
  }
}
