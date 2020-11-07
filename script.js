var questions = [
    {
        question: "How many many National Parks are in US?",
        choices: ["47", "50", "68", "39"],
        answer: "50",
    },
    {
        question: "Which is the biggest state in US?",
        choices: ["Montana", "Alaska", "Texas", "California"],
        answer: "Alaska",
    },
    {
        question: "What is the capital of Hawaii?",
        choices: ["Waimanae", "Kaneohe", "Mililani", "Honolulu"],
        answer: "Honolulu",
    },
    {
        question: "Sunshine state is called ...",
        choices: ["California", "Louisiana", "Florida", "South Carolina"],
        answer: "Florida",
    },
    {
        question: "Continue the statement: Everything is bigger in ...",
        choices: ["Canada", "Europe", "Texas", "Australia"],
        answer: "Texas",
    },
];

var startButton = document.querySelector("#start-button");
var questContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButton = document.querySelector("#answer-buttons");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var alerts = document.querySelector("#alerts");

// setting var for future use

var questCount = 0;
var correctAn = 0;
var time = 30;
var intervalId;
var questionIndex = 0;
var rightAnswer = "";
var userAnswer = "";
var scores = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    // startButton.classList.add("hide");
    questContainerEl.classList.remove("hide")
    showQuestions(questions);
    updateTime();
    startButton.classList.add("hide");
}

function endQuiz() {
    clearInterval(intervalId);

    // saving info to my local storage
    var submitEl = document.querySelector("#submit");
    var nameInput = document.querySelector("#name");
    var submissionResponseEl = document.querySelector("#response");
    questContainerEl.classList.add("hide")
    document.getElementById("message").textContent = "Quiz Ended. Please enter your name below";
    submitEl.addEventListener("click", function (event) {
        event.preventDefault();

        console.log(event);


        var response = nameInput.value + "," + " Your score is " + correctAn;
        submissionResponseEl.textContent = response;
    });
}

// countdown start here
function updateTime() {
    console.log("time", time)
    intervalId = setInterval(function(){
        console.log(time)
        document.getElementById("timer").textContent = time;
        
        if (time <= 0) {
            clearInterval(intervalId)
            endQuiz();
            questContainerEl.classList.add("hide")
    document.getElementById("message").textContent = "Game Over";
        } else {
            time--;
        }
    }, 1000)
}

function showQuestions(array) {
    if (questionIndex < array.length) {
        rightAnswer = array[questionIndex].answer
        questionEl.textContent = questions[questionIndex].question;
        var choices = questions[questionIndex].choices;
        for (var i = 0; i < choices.length; i++) {

            var answerButtonItem = document.createElement("button")
            answerButtonItem.setAttribute("class", "btn")
            answerButtonItem.textContent = choices[i];
            document.querySelector("#answer-buttons").append(answerButtonItem);
        }


    } else {
        endQuiz();
    }
}
// intervalId = setInterval(updateTime, 1000);

document.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".btn")) {
        userAnswer = e.target.textContent;
        if (userAnswer === rightAnswer) {
            alerts.textContent = "You are right!"
            console.log("this works")

            correctAn++;
        } else {
            time -= 5;
            alerts.textContent = "Wrong!"
            console.log("this works")
        }

        questionIndex++;
        document.querySelector("#answer-buttons").innerHTML = ""
        showQuestions(questions);
    }

}
)

function checkAnswer() {
    if (answer === true) {
        correctAn++;
    }
}
