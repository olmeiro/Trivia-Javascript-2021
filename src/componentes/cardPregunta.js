
const divTituloPregunta = document.querySelector('.question');
const divRespuestas = document.querySelector('.respuestas');


 const tituloPregunta = (question) => {
    const htmlTitleQuestion = `<h3>${question}</h3>`;
  
    const div = document.createElement("div");
    div.innerHTML = htmlTitleQuestion;
  
    divTituloPregunta.append(div.firstElementChild);
  
    return div.firstElementChild;
  };

  
   const cardRespuestas = (correct_answer, incorrect_answers) => {

    const orden = Math.floor(Math.random() * (4 - 0) + 0);
     
      const htmlAnswerQuestion = `
      <div class="d-inline-flex justify-content-between">
          <div class="preguntas row">
            <div class="col-6 mt-2 order-${orden}">
                <button type="button" data-answer="correct_answer" class="btn btn-warning btn-answer">${correct_answer}</button>
            </div>
            <div class="col-6 mt-2 order-1">
                <button type="button" data-answer="incorrect_answer" class="btn btn-warning btn-answer">${incorrect_answers[0]}</button>
            </div>
    
            <div class="col-6 mt-2 order-2">
                <button type="button" data-answer="incorrect_answer" class="btn btn-warning btn-answer">${incorrect_answers[1]}</button>
            </div>
            
            <div class="col-6 mt-2 order-1">
                <button type="button" data-answer="incorrect_answer" class="btn btn-warning btn-answer">${incorrect_answers[2]}</button>
            </div>
          </div>
      </div> 
      `;
  
    const div = document.createElement("div");
    div.innerHTML = htmlAnswerQuestion;
  
    divRespuestas.append(div.firstElementChild);
  
    return div.firstElementChild;
  };


  export {tituloPregunta, cardRespuestas};