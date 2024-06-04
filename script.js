let lives = 3;
let livesElement = document.getElementById("lives");
let correctAnswers = 0;
let correctAnswersElement = document.getElementById("correct-answers");

livesElement.innerHTML = `Lives: ${lives}`;
correctAnswersElement.innerHTML = `Correct Answers: ${correctAnswers}`;

function randomQuestion(){
    let question = document.getElementById("question");
    question.innerHTML = "What famous Irish band was phil Lynott in?" //Question object, array of question objects??

    let randomAnswers = ["Thin lizzy", "Def Leopard", "The Dubliners", "U2", "Fish", "Cow"];
    let answersContainer = document.getElementsByClassName("answer");
    let randAnswers = [];

    for (let i = 0; i < answersContainer.length; i++) {
        let randInt = Math.floor((Math.random() * randomAnswers.length));
        let answer = randomAnswers[randInt];

        if (randAnswers.includes(answer)){
            i--;
            continue;
        }else{
            answersContainer[i].innerHTML = `<li>${answer}</li>`;
            randAnswers.push(answer);
        }
    }
}

function answer(){
    
}

randomQuestion();
