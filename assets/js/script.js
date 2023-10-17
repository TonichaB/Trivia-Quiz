/* Target elements from DOM */

const playGame = document.getElementById("play-btn");
const instructionsButton = document.getElementById("how-to-play-btn");
const question = document.getElementById("question");
const buttonA = document.getElementById("answer_a_btn")
const buttonB = document.getElementById("answer_b_btn");
const buttonC = document.getElementById("answer_c_btn");
const buttonD = document.getElementById("answer_d_btn");

let score = 0;
let wrongAnswer;
let correctAnswer;
let shuffleQuestion;


/* Functions */
function runGame();
function checkAnswer();
function incrementScore();
function displayQuestion();
function openPopUp();
function closePopUp();
function nextQuestion();
function updateQNA();
function shuffleArray();
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions');
};