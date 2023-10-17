/* Target elements from DOM */

const playGame = document.getElementById("play-btn");
const instructionsButton = document.getElementById("how-to-play-btn");
const leaderboardButton = document.getElementById("leaderboard-btn");
const question = document.getElementById("question");
const buttonA = document.getElementById("answer_a_btn");
const buttonB = document.getElementById("answer_b_btn");
const buttonC = document.getElementById("answer_c_btn");
const buttonD = document.getElementById("answer_d_btn");

let score = 0;
let wrongAnswer;
let correctAnswer;
let shuffleQuestion;

/* Wait for DOM to load before executing the first function 
* to show the start page and add event listeners for the buttons
*/

document.addEventListener("DOMContentLoaded", function () {
    const startButtons = document.getElementsByClassName("btn");
    startButtons.forEach(startButton) => {
        startButtons.addEventListener("click", function () {
            if (this.getAtribute("id") === ".play-btn") {
                runGame();
            } else if (this.getAtribute("id") === "how-to-play-btn") {
                instructionsPopUp();
            } else if (this.getAtribute("id") === "leaderboard-btn") {
                leaderboardPopUp();
            }
        });
    };
});


function runGame();
function checkAnswer();
function incrementScore();
function displayQuestion();
function instructionsPopUp();
function leaderboardPopUp();
function closePopUp();
function nextQuestion();
function updateQNA();
function shuffleArray();
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions');
}