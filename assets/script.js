var startButton = document.querySelector("#start-button")
var timer = document.querySelector("#timer")

function startGame() {
    var timeLeft = 75;

    startButton.addEventListener("click", function() {
        var timeInterval = setInterval(function () {
            timeLeft --;
            timer.textContent = "Time Left: " + timeLeft
            
            if (timeLeft === 0) {

            }
        }, 1000);
    } );
}

function init() {
    startGame()
}

init()