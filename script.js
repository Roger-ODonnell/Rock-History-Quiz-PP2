let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");

livesElement.innerHTML = `Lives: ${lives}`;
correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;

let questionObj = {
  question: "What famous Irish band was phil Lynott in?",
  answer: "Thin lizzy",
};

function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  let answerElements = document.getElementsByClassName("answer");

  let randomAnswers = ["Def Leopard", "The Dubliners", "U2", "Fish", "Cow"];

  let answersSelected = [];

  //Add random answers to answersSelected Array
  for (i = 0; i < answerElements.length; i++) {
    let randInt = Math.floor(Math.random() * randomAnswers.length);
    if (answersSelected.includes(randomAnswers[randInt])) {
      i--;
      continue;
    } else {
      answersSelected.push(randomAnswers[randInt]);
    }
  }

  let randomIndex = Math.floor(Math.random() * answerElements.length);
  answersSelected.splice(randomIndex, 0, questionObj.answer);

  //Populate HTML Answer buttons with generated answers
  for (i = 0; i < answersSelected.length; i++) {
    answerElements[i].innerHTML = `<li>${answersSelected[i]}</li>`;
  }
}

randomQuestion(questionObj);
