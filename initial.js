let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  let nameInput = document.getElementById("name-input").value;
  let difficultyLevel = document.getElementById("difficulty-selection").value;

  localStorage.setItem("name", nameInput);
  localStorage.setItem("difficulty", difficultyLevel);

  if (nameInput === "") {
    alert("Please type in a name");
  } else {
    location.href = "/asset/pages/quiz.html";
  }
});
