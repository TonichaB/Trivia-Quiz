/* Target elements from DOM */

const playGame = document.getElementById("play-btn");
const instructionsButton = document.getElementById("how-to-play-btn");
const question = document.getElementById("question");

let score = 0;


/* Functions */
function runGame();
function checkAnswer();
function incrementScore();
function displayQuestion();
function openPopUp();
function nextQuestion();
function updateQNA();
function shuffleArray();
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions');
};