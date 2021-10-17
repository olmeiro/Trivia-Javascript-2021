import { Preguntas } from '../clases/preguntas.class'


export const getPreguntas = async(amount, category, difficulty, ronda) => {
    console.log(amount,category,difficulty);
    
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        localStorage.setItem(`${ronda}`,JSON.stringify(data));
        
    })
}