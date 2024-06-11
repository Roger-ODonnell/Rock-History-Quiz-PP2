//Quiz page code
import {
  easyQuestionList,
  normalQuestionList,
  hardQuestionList,
} from "./questions.js";

let lives = 3;
let correctAnswers = 0;
let livesElement = document.getElementById("lives");
let correctAnswersElement = document.getElementById("correct-answers");
let questionCounter = 0;
let questionObjIndex;
let currentQuestionList;

let startAgainButton = document.getElementById("start-again-button");
startAgainButton.addEventListener("click", restart);


if (window.location.pathname.endsWith("quiz.html")) {
  // Start the game
  correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;
  livesElement.innerHTML = `Lives: ${lives}`;
  quizLoad();
}

// Start the quiz or Load the next random question
function quizLoad() {
  let difficulty = localStorage.getItem("difficulty");

  if (difficulty === "Easy") {
    currentQuestionList = easyQuestionList;
  } else if (difficulty === "Normal") {
    currentQuestionList = normalQuestionList;
  } else if (difficulty === "Hard") {
    currentQuestionList = hardQuestionList;
  }

  questionObjIndex = Math.floor(Math.random() * currentQuestionList.length);
  randomQuestion(currentQuestionList[questionObjIndex]);
}

function randomQuestion(questionObj) {
  let question = document.getElementById("question");
  question.innerHTML = `${questionObj.question}`;

  let answerElements = document.getElementsByClassName("answer");

  let answersSelected = [];

  // While loop to ensure random Answers are added
  while (answersSelected.length < answerElements.length - 1) {
    let randomInt = Math.floor(
      Math.random() * questionObj.potentialAnswer.length
    );
    if (!answersSelected.includes(questionObj.potentialAnswer[randomInt])) {
      answersSelected.push(questionObj.potentialAnswer[randomInt]);
    }
  }

  // Add the correct answer into a random slot in the answer elements
  answersSelected.splice(
    Math.floor(Math.random() * (answersSelected.length + 1)),
    0,
    questionObj.answer
  );

  // Add Generated Answers to Answer Elements
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[
      i
    ].innerHTML = `<li><span class="button-text">${answersSelected[i]}</span></li>`;
    //Add a click function to answer buttons to allow them to be checked for correct answer
    answerElements[i].onclick = function () {
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

  currentQuestionList.splice(questionObjIndex, 1);
  if (currentQuestionList.length <= 0) {
    localStorage.setItem("correctQuestions", questionCounter);
    if (lives > 0) {
      localStorage.setItem("result", "win");
    } else if (lives < 1) {
      localStorage.setItem("result", "lose");
    }
    location.href = "asset/pages/gameover.html";
  }
  quizLoad();
}

function inCorrect() {
  lives--;
  livesElement.innerHTML = `Lives: ${lives}`;

  if (lives > 0) {
    currentQuestionList.splice(questionObjIndex, 1);
    if (currentQuestionList.length <= 0) {
      localStorage.setItem("correctQuestions", questionCounter);
      localStorage.setItem("result", "win");
      location.href = "asset/pages/gameover.html";
    }
    quizLoad();
  } else {
    localStorage.setItem("correctQuestions", questionCounter);
    localStorage.setItem("result", "lose");
    location.href = "asset/pages/gameover.html";
  }
}

function restart() {
  location.href = "./index.html";
}

//Game over Page code
if (window.location.pathname.endsWith("gameover.html")) {
  let correctQuestions = localStorage.getItem("correctQuestions");
  let answerCounterElement = document.getElementById("result");
  let name = localStorage.getItem("name");
  let result = localStorage.getItem("result");

  if (result === "win") {
    answerCounterElement.innerHTML = `<h2>Congrats ${name}!</h2><h2>You Win!</h2> <h2>Questions Answered: ${correctQuestions}</h2>`;
  } else {
    answerCounterElement.innerHTML = `<h2>Sorry ${name}</h2><h2>You Lose</h2> <h2>Questions Answered: ${correctQuestions}</h2>`;
  }
}
