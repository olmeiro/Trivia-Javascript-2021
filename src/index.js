import "./styles.css";
import { start } from "./componentes/inicioJuego";

import { Juego, Jugador } from './clases';

const btnEmpezar = document.getElementById('inicio');
btnEmpezar.addEventListener('click', start);


const juego = new Juego("John Doe", 100);



