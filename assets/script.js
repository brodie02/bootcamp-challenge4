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

//var quiz = {
  //  questions: ["What type of language is JavaScript:", 
  //  "In JavaScript, what is a block of statement?",
  //  "When interpreter encounters an empty statements, what it will do:",
  //  ],
  //  answer1: ["Object-Oriented", 
  //  "Conditional block",
  //  "Shows a warning"],
  //  answer2: ["Object-Based", 
  //  "block that combines a number of statements into a single compound statement",
  //  "Prompts to complete the statement"],
  //  answer3: ["Assembly-language", 
  //  "both conditional block and a single statement",
  //  "Throws an error"],
  // answer4: ["High-level", 
  //  "block that contains a single statement",
  //  "Ignores the statements"],
//}

var quiz = [
    {
        ques: "What type of language is JavaScript:",
        answers: {
            one: "Object-Oriented",
            two: "Object-Based",
            three: "Assembly-language",
            four: "High-level"
        },
        correctAnswer: "Object-Based"
    },
    {
        ques: "In JavaScript, what is a block of statement?",
        answers: {
            one: "Conditional block",
            two: "block that combines a number of statements into a single compound statement",
            three: "both conditional block and a single statement",
            four: "block that contains a single statement"
        },
        correctAnswer: "block that combines a number of statements into a single compound statement"
    },
    {
        ques: "When interpreter encounters an empty statements, what it will do:",
        answers: {
            one: "Shows a warning",
            two: "Prompts to complete the statement",
            three: "Throws an error",
            four: "Ignores the statements"
        },
        correctAnswer: "Ignores the statements"
    },
    {
        ques: "When interpreter encounters an empty statements, what it will do:",
        answers: {
            one: "Shows a warning",
            two: "Prompts to complete the statement",
            three: "Throws an error",
            four: "Ignores the statements"
        },
        correctAnswer: "Ignores the statements"
    }]



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
    var i = 0

    questionsScreen.children[0].innerHTML = quiz[i].ques
    questionsScreen.children[1].innerHTML = quiz[i].answers.one
    questionsScreen.children[2].innerHTML = quiz[i].answers.two
    questionsScreen.children[3].innerHTML = quiz[i].answers.three
    questionsScreen.children[4].innerHTML = quiz[i].answers.four

    //questionsScreen.children[2].classList.add("correct")

    questionsScreen.addEventListener("click", function(event) {
        var userAnswer = event.target
        var correctAns = quiz[i].correctAnswer

        if (correctAns == userAnswer.innerText) {
            score ++
                outputText.innerHTML = "Correct!"
        } else {
            outputText.innerHTML = "Wrong!"
            timeLeft = timeLeft - 15
        }

        if (userAnswer.matches(".answer")) {
            i ++
            questionsScreen.children[0].innerHTML = quiz[i].ques
            questionsScreen.children[1].innerHTML = quiz[i].answers.one
            questionsScreen.children[2].innerHTML = quiz[i].answers.two
            questionsScreen.children[3].innerHTML = quiz[i].answers.three
            questionsScreen.children[4].innerHTML = quiz[i].answers.four
        }

        if (i === 3) {
            questionsScreen.classList.add("hide")
            endScreen.classList.remove("hide")
            endScreen.children[1].innerHTML = "Your final score is: " + score
        }
    })
}



function init() {
    startGame()
    quizGame()
}

init()

