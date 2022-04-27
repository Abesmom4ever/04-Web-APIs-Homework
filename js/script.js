var questionTitle = document.querySelector(".questionTitle");
var firstButton = document.querySelector(".Button-One");
var secondButton = document.querySelector(".Button-Two");
var thirdButton = document.querySelector(".Button-Three");
var fourthButton = document.querySelector(".Button-Four");
var AllButtons = document.getElementsByTagName("button");

function AnswerParameters() {}

document.body.children[2].style.visibility = "hidden";

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

        if (timer === 0 || timer < 0) {
            timerEl.textContent = " ";
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000);
}

function questionOne() {
    document.body.children[2].style.visibility = "visible";
    questionTitle.textContent = "1. Stop trying to make 'what' happen?";
    firstButton.innerHTML = "Wicked";
    secondButton.innerHTML = "Cool";
    thirdButton.innerHTML = "Fetch";
    fourthButton.innerHTML = "Sweet";

    console.log(AllButtons);

    console.log(AllButtons[1].innerHTML);
    console.log(AllButtons[2].innerHTML);
    console.log(AllButtons[3].innerHTML);
    console.log(AllButtons[4].innerHTML);

    console.log(AllButtons[3]);

    function ButtonCorrection() {
        if (this != AllButtons[3]) {
            console.log(this);
            timer = timer - 3;
        }
    }

    // AllButtons[i] == this

    for (var i = 0; i < AllButtons.length; i++) {
        AllButtons[i].addEventListener("click", ButtonCorrection);
    }

    function removeHandler() {}
}

// AllButtons[1].addEventListener("click", function () {
//     console.log("hello");
//     timer = timer - 5;
//     // questionTwo();
// });
// AllButtons[2].addEventListener("click", function () {
//     console.log("hello");
//     timer = timer - 5;
//     // questionTwo();
// });
// AllButtons[3].addEventListener("click", function () {
//     console.log("hello");
//     // questionTwo();
// });
// AllButtons[4].addEventListener("click", function () {
//     console.log("hello");
//     timer = timer - 5;
//     // questionTwo();
// });

function questionTwo() {
    document.body.children[2].style.visibility = "visible";
    questionTitle.textContent = "2. Why is Gretchen Weiner's hair so big?";
    firstButton.innerHTML = "Because it's full of secrets";
    secondButton.innerHTML = "Because she's too cool for anyone";
    thirdButton.innerHTML = "Because her dad invented the Toaster Strudel";
    fourthButton.innerHTML = "Because she's too popular";

    for (var i = 0; i < AllButtons.length; i++) {
        AllButtons[i].addEventListener("click", function () {
            // AllButtons[i] == this
            if (this != AllButtons[1]) {
                console.log("test", this);
                timer = timer - 3;
            }
            questionThree();
        });
    }
}

function questionThree() {
    document.body.children[2].style.visibility = "visible";
    questionTitle.textContent =
        "3. Which accessory of Cady Heron's did Regina George compliment?";
    firstButton.innerHTML = "Ring";
    secondButton.innerHTML = "Bracelets";
    thirdButton.innerHTML = "Necklace";
    fourthButton.innerHTML = "Earrings";

    for (var i = 0; i < AllButtons.length; i++) {
        AllButtons[i].addEventListener("click", function () {
            // AllButtons[i] == this
            if (this != AllButtons[2]) {
                console.log(this);
                timer = timer - 3;
            }
            questionFour();
        });
    }
}

function questionFour() {
    document.body.children[2].style.visibility = "visible";
    questionTitle.textContent =
        "4. On Wednesday's we wear pink, but what day do we wear trackpants?";
    firstButton.innerHTML = "Never";
    secondButton.innerHTML = "Wednesday";
    thirdButton.innerHTML = "Friday";
    fourthButton.innerHTML = "Thursday";

    for (var i = 0; i < AllButtons.length; i++) {
        AllButtons[i].addEventListener("click", function () {
            // AllButtons[i] == this
            if (this != AllButtons[3]) {
                console.log(this);
                timer = timer - 3;
            }
            questionFive();
        });
    }
}

function questionFive() {
    document.body.children[2].style.visibility = "visible";
    questionTitle.textContent =
        "5. On what date did Aaron Samuels ask Cady Heron what day it was?";
    firstButton.innerHTML = "December 3rd";
    secondButton.innerHTML = "October 3rd";
    thirdButton.innerHTML = "November 3rd";
    fourthButton.innerHTML = "September 3rd";

    for (var i = 0; i < AllButtons.length; i++) {
        AllButtons[i].addEventListener("click", function () {
            // AllButtons[i] == this
            if (this != AllButtons[2]) {
                console.log(this);
                timer = timer - 3;
            }
        });
    }
    scorePage();
}

function scorePage() {
    var userInformation = document.querySelector(".Name");
    var score = document.querySelector(".score");

    var userName = document.createElement("input");
    userInformation.appendChild(userName);
}

// AllButtons.addEventListener("click", function () {
//     if (document.body.children[2].getElementsByClassName("Button-Three")) {
//         timer = timer - 5;
//     }
//     if (timer === 0) {
//         timerEl.textContent = " ";
//         clearInterval(timerInterval);
//         // scorepage();
//     }
//     // questionTwo();
// });

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
