let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  let nameInput = document.getElementById("name-input").value;
  localStorage.setItem("name", nameInput);

  location.href = "./asset/pages/quiz.html";
});
