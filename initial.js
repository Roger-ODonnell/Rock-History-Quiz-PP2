let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  let nameInput = document.getElementById("name-input").value;
  let difficultyLevel = document.getElementById("difficulty-selection").value;

  localStorage.setItem("name", nameInput);
  localStorage.setItem("difficulty", difficultyLevel);

  location.href = "./asset/pages/quiz.html";
});
