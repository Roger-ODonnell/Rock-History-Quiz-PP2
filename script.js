import { easyQuestionList } from "./questions.js";

let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");
let questionCounter = 0; //user defined amount updated er question

//function to generate a random question in base html elements
function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  //variable to house answer elements
  let answerElements = document.getElementsByClassName("answer");

  //random answers array to populate other 3 answer slots
  ////let randomAnswers = ["Def Leopard", "The Dubliners", "U2", "Fish", "Cow"];
  //array of answers selected for player to chose from
  let answersSelected = [];

  //Add random answers to answersSelected Array
  for (let i = 0; i < answerElements.length; i++) {
    let randInt = Math.floor(Math.random() * questionObj.potentialAnswer.length);
    if (answersSelected.includes( questionObj.potentialAnswer[randInt])) {
      i--;
      continue;
    } else {
      answersSelected.push( questionObj.potentialAnswer[randInt]);
    }
  }

  //Add the right answer into a random slot in the answer elements
  let randomIndex = Math.floor(Math.random() * answerElements.length);
  answersSelected.splice(randomIndex, 0, questionObj.answer);

  //Populate HTML Answer buttons with generated answers
  for (let i = 0; i < answersSelected.length - 1; i++) {
    answerElements[i].innerHTML = `<li >${answersSelected[i]}</li>`;
  }
  //event listener
}

function correct() {
  console.log("Correct");
}

function inCorrect() {
  console.log("Wrong");
}

function startGame() {
  //easy,medium , hard - dropdown, 

  //Name input
  livesElement.innerHTML = `Lives: ${lives}`;
  correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;

  randomQuestion(easyQuestionList[randInt(easyQuestionList)]);
  console.log("Started");
}


function randInt (obj){
 return Math.floor(Math.random() * obj.length)
}
startGame(); //called on button press
