var questionTitle = document.querySelector(".questionTitle");
var optionList = document.querySelector(".options");

var questions = [
    {
        question: "1. Stop trying to make 'what' happen?",
        options: ["Wicked", "Cool", "Fetch", "Sweet"],
        answer: "Fetch",
    },
    {
        question: "2. Why is Gretchen Weiner's hair so big?",
        options: [
            "Because it's full of secrets",
            "Because she's too cool for anyone",
            "Because her dad invented the Toaster Strudel",
            "Because she's too popular",
        ],
        answer: "Because it's full of secrets",
    },
    {
        question:
            "3. Which accessory of Cady Heron's did Regina George compliment?",
        options: ["Ring", "Bracelet", "Necklace", "Earrings"],
        answer: "Bracelet",
    },
    {
        question:
            "4. On Wednesday's we wear pink, but what day do we wear trackpants?",
        options: ["Never", "Tuesday", "Friday", "Thursday"],
        answer: "Friday",
    },
    {
        question:
            "5. On what date did Aaron Samuels ask Cady Heron what day it was?",
        options: [
            "December 3rd",
            "October 3rd",
            "November 3rd",
            "September 3rd",
        ],
        answer: "October 3rd",
    },
];

console.log(questions.length);

document.querySelector(".title").textContent = "Are you a Mean Girl?";
document.querySelector(".comment").textContent =
    "Take this quiz to see if you're a Mean Girl! You have 30 seconds and, with every wrong answer, the time will decrease! Have fun and Good Luck!";

var startButton = document.querySelector(".start-Button");
var timerEl = document.querySelector(".timer");
var timer = 60;
var questionNumber = 0;

document.body.children[1].style.visibility = "hidden";

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";
    beginQuestions(0);
});

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";
    countdown();
});

function countdown() {
    var timerInterval = setInterval(function () {
        timerEl.textContent = timer + " second(s) remaining";
        timer--;

        if (timer === 0 || timer < 0) {
            timerEl.textContent = "";
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000);
}

function beginQuestions() {
    document.body.children[1].style.visibility = "visible";
    optionList.innerHTML = "";
    questionTitle.innerHTML = "";

    var currentQuestion = questions[questionNumber];
    var options = currentQuestion.options;
    console.log(currentQuestion);

    questionTitle.textContent = currentQuestion.question;

    for (var i = 0; i < options.length; i++) {
        var userChoices = options[i];
        var choicebuttons = document.createElement("button");
        choicebuttons.textContent = userChoices;
        optionList.append(choicebuttons);
        choicebuttons.style.cssText = `
        display: flex;
        flex-direction: column;
        margin: 10px 0px;
        padding: 5px;
        `;
        choicebuttons.addEventListener("click", function (e) {
            var userSelection = e.target.textContent;

            if (userSelection != currentQuestion.answer) {
                timer -= 5;
            }
            questionNumber++;
            beginQuestions();
        });
    }
}

function scorePage() {
    console.log("score!");
}
