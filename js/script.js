document.querySelector(".title").textContent = "Are you a Mean Girl?";
document.querySelector(".comment").textContent =
    "Take this quiz to see if you're a Mean Girl! You have 30 seconds and, with every wrong answer, the time will decrease! Have fun and Good Luck!";

var optionButtons = document.querySelector(".questions", "buttons");
optionButtons.style.display = "none";

var startButton = document.querySelector(".start-Button");
var timerEl = document.querySelector(".timer");
var timer = 20;

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";

    countdown();
});

function countdown() {
    var timerInterval = setInterval(function () {
        timerEl.textContent = timer + " seconds remaining";
        timer--;

        //add parameter of when the question is answered wrong and the time dec
        //by -6 sec

        if (timeLeft === 1) {
            timerEl.textContent = timer + " second remaining";
            timeLeft--;
        } else if (timer === 0) {
            timerEl.textContent = " ";
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000);
}

//Make answers an array? and make the whole question and answers an object?
//Then isolate the answers?? and for ever wrong count -6 and when count hits 0
//Pop up highscore html sheet?
//1. Stop trying to make "what" happen?
//a. Wicked
//b. Cool
//c. Fetch
//d. Sweet
//2. Why is Gretchen Weiner's hair so big?
//a. Because it's full of secrets
//b. Because she's too cool for anyone
//c. Because her dad invented the Toaster Strudel
//d. Because she's too popular
//3. Which accessory of Cady Heron's did Regina George compliment?
//a. Ring
//b. Bracelet
//c. Necklace
//d. Earrings
//4. On Wednesday's we wear pink, but what day do we wear trackpants?
//a. Never
//b. Monday
//c. Friday
//d. Tuesday
//5. On what date did Aaron Samuels ask Cady Heron what day it was?
//a. December 3rd
//b. October 3rd
//c. September 3rd
//d. November 3rd
