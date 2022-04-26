var questionTitle = document.querySelector(".questionTitle");
var firstButton = document.querySelector(".Button-One");
var secondButton = document.querySelector(".Button-Two");
var thirdButton = document.querySelector(".Button-Three");
var fourthButton = document.querySelector(".Button-Four");

document.querySelector(".title").textContent = "Are you a Mean Girl?";
document.querySelector(".comment").textContent =
    "Take this quiz to see if you're a Mean Girl! You have 30 seconds and, with every wrong answer, the time will decrease! Have fun and Good Luck!";

var startButton = document.querySelector(".start-Button");
var timerEl = document.querySelector(".timer");
var timer = 30;

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";

    countdown();
});

startButton.addEventListener("click", function () {
    document.querySelector(".title").textContent = " ";
    document.querySelector(".comment").textContent = " ";
    startButton.style.display = "none";

    questionOne();
});

function countdown() {
    var timerInterval = setInterval(function () {
        timerEl.textContent = timer + " second(s) remaining";
        timer--;

        if (timer === 0) {
            timerEl.textContent = " ";
            clearInterval(timerInterval);
            // scorepage();
        }
    }, 1000);
}

function questionOne() {
    questionTitle.textContent = "1. Stop trying to make 'what' happen?";

    var ButtonOne = document.createElement("button");
    ButtonOne.innerHTML = "Wicked";
    firstButton.appendChild(ButtonOne);

    var ButtonTwo = document.createElement("button");
    ButtonTwo.innerHTML = "Cool";
    secondButton.appendChild(ButtonTwo);

    var ButtonThree = document.createElement("button");
    ButtonThree.innerHTML = "Fetch";
    thirdButton.appendChild(ButtonThree);

    var ButtonFour = document.createElement("button");
    ButtonFour.innerHTML = "Sweet";
    fourthButton.appendChild(ButtonFour);

    var AllButtons = document.querySelector(".questions").children;
    console.log(AllButtons);

    AllButtons.addEventListener("click", function () {
        if (AllButtons != ".Button-Three") {
            timer = timer - 5;
        }
        if (timer === 0) {
            timerEl.textContent = " ";
            clearInterval(timerInterval);
            // scorepage();
        }
        // questionTwo();
    });
}
// let Choice = "";
// var buttonCreation = document.createElement("button");
// options.forEach(ButtonCreation);
// document.querySelector(".Buttons").innerHTML = Choice;
// function ButtonCreation(item) {
//     var buttonCreate = document.createElement("button");
//     buttonCreate += item;
// }

// var questionOne = '1. Stop trying to make "what" happen?';
// var optionOne = ["Wicked, Cool, Fetch, Sweet"];
// var questionTwo = "2. Why is Gretchen Weiner's hair so big?";
// var optionTwo = [
//     "Because it's full of secrets, Because she's too cool for anyone, Because her dad invented the Toaster Strudel, Because she's too popular",
// ];
// var questionThree =
//     "3. Which accessory of Cady Heron's did Regina George compliment?";
// var optionThree = ["Ring, Bracelet, Necklace, Earrings"];
// var questionFour =
//     "4. On Wednesday's we wear pink, but what day do we wear trackpants?";
// var optionFour = ["Never, Monday, Friday, Tuesday"];
// var questionFive =
//     "5. On what date did Aaron Samuels ask Cady Heron what day it was?";
// var optionFive = ["December 3rd, October 3rd, September 3rd, November 3rd"];
