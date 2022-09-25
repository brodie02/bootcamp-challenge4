var startButton = document.querySelector("#start-button")
var timer = document.querySelector("#timer")
var title = document.querySelector("#title")
var startScreen = document.querySelector("#main")
var questionsScreen = document.querySelector(".questions")
var endScreen = document.querySelector(".end-screen")

var quiz = {
    questions: [],
    answers: [],
    correctAnswer: [],
}

function startGame() {
    var timeLeft = 3;

    startButton.addEventListener("click", function() {
        startScreen.classList.add("hide");
        questionsScreen.classList.remove("hide");
        var timeInterval = setInterval(function () {
            timeLeft --;
            timer.textContent = "Time Left: " + timeLeft
            
            if (timeLeft === 0) {
                clearInterval(timeInterval);
                startScreen.classList.add("hide");
                questionsScreen.classList.add("hide");
                endScreen.classList.remove("hide");
            }
        }, 1000);
    } );
}

function init() {
    startGame()
}

init()