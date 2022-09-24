var startButton = document.querySelector("#start-button")
var timer = document.querySelector("#timer")
var title = document.querySelector("#title")
var startScreen = document.querySelector("#main")
var endScreen = document.querySelector(".end-screen")

var allDone = "All done!"
allDone.styles = "font-size: 40px"

function startGame() {
    var timeLeft = 2;

    startButton.addEventListener("click", function() {
        var timeInterval = setInterval(function () {
            timeLeft --;
            timer.textContent = "Time Left: " + timeLeft
            
            if (timeLeft === 0) {
                clearInterval(timeInterval);
                startScreen.classList.add("hide");
                endScreen.classList.remove("hide")
            }
        }, 1000);
    } );
}

function init() {
    startGame()
}

init()