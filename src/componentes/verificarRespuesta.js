import moduleName, { Puntaje } from '../clases/puntaje.class';

const puntaje = new Puntaje();

const textAcumulado = document.getElementById('textAcumulado');
const maximo = document.getElementById('textPremioTotal');


export function respuestaCorrecta() {
    
    puntaje.aumentarAcumulado();

    const puntajeAcumulado = puntaje.getAcumulado;
    
    textAcumulado.textContent = puntajeAcumulado;

    Swal.fire('Respuesta correcta. Ganas un punto');

    
}

export function respuestaIncorrecta(){
    Swal.fire({
        icon: 'Respuesta incorrecta',
        title: 'Oops...',
        text: 'Pierdes el acumulado!',
      });
}