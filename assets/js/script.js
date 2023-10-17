/* Target elements from DOM */

const playGame = document.getElementById("play-btn");
const instructionsButton = document.getElementById("how-to-play-btn");
const leaderboardButton = document.getElementById("leaderboard-btn");
const mainPage = document.getElementsByClassName("container");
const quizPage = document.getElementsByClassName("container2");
const mainImage = document.getElementsByClassName("main-image");
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

/* This function will open the how to play pop up whilst hiding the main menu.
* The function also listens out for the close button
*/
function instructionsPopUp() {
    instructionsButton.classList.remove("hidden");
    mainPage.classList.add("hidden");
    mainImage.classList.add("hidden");
    const closeInstructionsPopUp = document.getElementById("close-instructions");
    closeInstructionsPopUp.addEventListener("click", closeInstructions);
}

/* This function will close the how to play pop up when the close button is clicked */
function closeInstructions() {
    instructionsButton.classList.add("hidden)");
    mainPage.classList.remove("hidden");
    mainImage.classList.remove("hidden");
}

/* This function will open the leaderboard pop up whilst hiding the main menu.
* The function also listens out for the close button
*/
function leaderboardPopUp() {
    leaderboardButton.classList.remove("hidden");
    mainPage.classList.add("hidden");
    mainImage.classList.add("hidden");
    const closeLeaderboardPopUp = document.getElementById("close-leaderboard");
    closeLeaderboardPopUp.addEventListener("click", closeLeaderboard);
}

/* This function will close the leaderboard pop up when the close button is clicked */
function closeLeaderboard() {
    leaderboardButton.classList.add("hidden)");
    mainPage.classList.remove("hidden");
    mainImage.classList.remove("hidden");
}

function runGame();
function checkAnswer();
function incrementScore();
function displayQuestion();

function leaderboardPopUp();
function closePopUp();
function nextQuestion();
function updateQNA();
function shuffleArray();
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions');
}