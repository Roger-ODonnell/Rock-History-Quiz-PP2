let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");

//question object to populate new questions and answers
let questionObj = {
  question: "What famous Irish band was phil Lynott in?",
  answer: "Thin lizzy",
};
//function to generate a random question in base html elements
function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  //variable to house answer elements
  let answerElements = document.getElementsByClassName("answer");

  //random answers array to populate other 3 answer slots 
  let randomAnswers = ["Def Leopard", "The Dubliners", "U2", "Fish", "Cow"];
  //array of answers selected for player to chose from
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

  //Add the right answer into a random slot in the answer elements
  let randomIndex = Math.floor(Math.random() * answerElements.length);
  answersSelected.splice(randomIndex, 0, questionObj.answer);

  //Populate HTML Answer buttons with generated answers
  for (i = 0; i < answersSelected.length; i++) {
    answerElements[i].innerHTML = `<li>${answersSelected[i]}</li>`;
  }
}

//update the lives and right questions counters to give the player feedback
function updateCounters(){
  livesElement.innerHTML = `Lives: ${lives}`;
  correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;
}

randomQuestion(questionObj);
updateCounters();
