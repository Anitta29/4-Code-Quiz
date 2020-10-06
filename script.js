// create questions

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
    choices:["Canada", "Europe", "Texas", "Australia"],
    answer: "Texas",
},
];
 
var submit = document.getElementById("#submit-btn");
submit.addEventListener("click", ...?)

// setiing var for future use
var time = (setTimeout, 20);
var correctAn = 0;
var score = 0;
var questCount = 0;


// ctreating function to check correct answer


function endQuiz() {
    clearInterval(time);
    alert("Your score is " + correctAn);
}

function updateTime() {
    if(time <= 0) {
        endQuiz();
    }
}

function nextQuestion() {
    if(time == 0) {
        updateTime();
        return;
    }
}
function checkAnswer() {
    if (answer === true) {
        correctAn++;
    }
}









