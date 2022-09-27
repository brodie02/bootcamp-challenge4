var startButton = document.querySelector("#start-button")
var timer = document.querySelector("#timer")
var title = document.querySelector("#title")
var startScreen = document.querySelector("#main")
var questionsScreen = document.querySelector(".questions")
var endScreen = document.querySelector(".end-screen")
var answerLi = document.querySelector(".answer")
var outputText = document.querySelector("#output-text")
var ansContainer = document.querySelector("#container")
var timeLeft = 75;
var score = 0

var quiz = {
    questions: ["What type of language is JavaScript:", 
    "In JavaScript, what is a block of statement?",
    "When interpreter encounters an empty statements, what it will do:",
    ],
    answer1: ["Object-Oriented", 
    "Conditional block",
    "Shows a warning"],
    answer2: ["Object-Based", 
    "block that combines a number of statements into a single compound statement",
    "Prompts to complete the statement"],
    answer3: ["Assembly-language", 
    "both conditional block and a single statement",
    "Throws an error"],
    answer4: ["High-level", 
    "block that contains a single statement",
    "Ignores the statements"],
}

function startGame() {
    

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
                endScreen.children[1].innerHTML = "Your final score is: " + score
            }
        }, 1000);
    } );
}

function quizGame() {
    questionsScreen.children[0].innerHTML = quiz.questions[0]
    questionsScreen.children[1].innerHTML = "1. " + quiz.answer1[0]
    questionsScreen.children[2].innerHTML = "2. " + quiz.answer2[0]
    questionsScreen.children[3].innerHTML = "3. " + quiz.answer3[0]
    questionsScreen.children[4].innerHTML = "4. " + quiz.answer4[0]

    questionsScreen.children[2].classList.add("correct")

    questionsScreen.addEventListener("click", function(event) {
        var click = event.target

        if (click.matches(".answer")) {

            for (var i = 0; i < quiz.questions.length; i++)
            questionsScreen.children[0].innerHTML = quiz.questions[i]

            //questionsScreen.children[0].innerHTML = quiz.questions[1]
            questionsScreen.children[1].innerHTML = "1. " + quiz.answer1[1]
            questionsScreen.children[2].innerHTML = "2. " + quiz.answer2[1]
            questionsScreen.children[3].innerHTML = "3. " + quiz.answer3[1]
            questionsScreen.children[4].innerHTML = "4. " + quiz.answer4[1]
        }
        if (click.matches(".correct")) {
            score ++
            outputText.innerHTML = "but"
        }
    })

    //for (var i = 0; i < quiz.questions.length; i++)
    //questionsScreen.children[0].innerHTML = quiz.questions[i]

}

function init() {
    startGame()
    quizGame()
}

init()