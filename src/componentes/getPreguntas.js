export async function getPreguntas (amount, category, difficulty, ronda)  {
    console.log("rondaenGetPreguntas: ", ronda);
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(`${ronda}`,JSON.stringify(data)); 
    })
}