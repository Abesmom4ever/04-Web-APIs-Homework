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

document.querySelector(".title").textContent = "Are you a Mean Girl?";
document.querySelector(".comment").textContent =
    "Take this quiz to see if you're a Mean Girl! You have 30 seconds and, with every wrong answer, the time will decrease! Have fun and Good Luck!";

var startButton = document.querySelector(".start-Button");
var timerEl = document.querySelector(".timer");
var timer = 60;
var questionNumber = 0;
var timerInterval;

document.body.children[1].style.visibility = "hidden";

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";
    beginQuestions();
});

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";
    countdown();
});

function countdown() {
    timerInterval = setInterval(function () {
        timerEl.textContent = timer + " second(s) remaining";
        timer--;

        if (timer <= 0) {
            timerEl.textContent = "";
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000);
}

function beginQuestions() {
    if (questionNumber == questions.length) {
        return scorePage();
    }
    document.body.children[1].style.visibility = "visible";
    optionList.innerHTML = "";
    questionTitle.innerHTML = "";

    var currentQuestion = questions[questionNumber];
    let options = currentQuestion.options;

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
            beginQuestions();
        });
    }
    questionNumber++;
}

function scorePage() {
    console.log("score!");
    document.body.children[1].style.visibility = "hidden";
    clearInterval(timerInterval);
    timerEl.textContent = "";

    console.log(timer);
    let nameTitle = document.querySelector(".nameTitle");
    let name = document.querySelector(".name");
    let score = document.querySelector(".comment");

    nameTitle.innerHTML =
        "Please save your name and score by clicking the save button below!";

    const nameInput = document.createElement("input");
    name.append(nameInput);
    nameInput.setAttribute("type", "text");
    nameInput.addEventListener("input", function () {
        console.log(nameInput.value);
    });

    const saveButton = document.createElement("button");
    document.querySelector(".button").append(saveButton);
    saveButton.textContent = "Save";

    score.innerHTML = "score: " + timer;

    saveButton.addEventListener("click", function () {
        var userInfo = document.querySelector(".userInfo");
        var userName = nameInput.value;
        userInfo.innerHTML = userName + ": " + timer;
    });
}
