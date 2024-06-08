import { easyQuestionList } from "./questions.js";

let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");
let questionCounter = 0;

correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;
livesElement.innerHTML = `Lives: ${lives}`;


// Start the quiz or Load the next random question
function QuizLoad() {
  randomQuestion(easyQuestionList[Math.floor(Math.random() * easyQuestionList.length)]);
}

function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  let answerElements = document.getElementsByClassName("answer");

  let answersSelected = [];

  // While loop to ensure random Answers are added
  while (answersSelected.length < answerElements.length - 1) {
    let randomInt = Math.floor(Math.random() * questionObj.potentialAnswer.length);
    if (!answersSelected.includes(questionObj.potentialAnswer[randomInt])) {
      answersSelected.push(questionObj.potentialAnswer[randomInt]);
    }
  }

  // Add the correct answer into a random slot in the answer elements
  answersSelected.splice(Math.floor(Math.random() * (answersSelected.length + 1)), 0, questionObj.answer);

  // Add Generated Answers to Answer Elements
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].innerHTML = `<li>${answersSelected[i]}</li>`;
    //Add a click function to answer buttons to allow them to be checked for correct answer
    answerElements[i].onclick = function() {
      checkAnswer(answersSelected[i], questionObj.answer);
    };
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    correct();
  } else {
    inCorrect();
  }
}

function correct() {
  questionCounter++;
  correctAnswers++;
  correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;
  nextQuestion();
}

function inCorrect() {
  lives--;
  livesElement.innerHTML = `Lives: ${lives}`;
  if (lives > 0) {
    nextQuestion();
  } else {
    location.href = "/asset/pages/loser.html";
  }
}

// Start the game
QuizLoad();
