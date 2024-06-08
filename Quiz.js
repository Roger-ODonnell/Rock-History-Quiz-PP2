import { easyQuestionList } from "./questions.js";

let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");
let questionCounter = 0; //user defined amount updated per question

correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;
livesElement.innerHTML = `Lives: ${lives}`;
randomQuestion(easyQuestionList[randInt(easyQuestionList)]);

//function to generate a random question in base html elements
function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  //variable to house answer elements
  let answerElements = document.getElementsByClassName("answer");

  //array of answers selected for player to chose from
  let answersSelected = [];

  //Add random answers to answersSelected Array
  for (let i = 0; i < answerElements.length; i++) {
    if (
      answersSelected.includes(
        questionObj.potentialAnswer[randInt(questionObj.potentialAnswer)]
      )
    ) {
      i--;
      continue;
    } else {
      answersSelected.push(
        questionObj.potentialAnswer[randInt(questionObj.potentialAnswer)]
      );
    }
  }

  //Add the right answer into a random slot in the answer elements
  let randomIndex = Math.floor(Math.random() * answerElements.length);
  answersSelected.splice(randomIndex, 0, questionObj.answer);

  //Populate HTML Answer buttons with generated answers
  for (let i = 0; i < answersSelected.length - 1; i++) {
    answerElements[i].innerHTML = `<li >${answersSelected[i]}</li>`;
  }
}

function correct() {
  console.log("Correct");
  questionCounter++;
}

function inCorrect() {
  console.log("Wrong");
  lives--;
}

function randInt(obj) {
  return Math.floor(Math.random() * obj.length);
}
