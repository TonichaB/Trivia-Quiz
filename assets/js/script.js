/* Target elements from DOM */

const playGame = document.getElementById("play-btn");
const instructionsButton = document.getElementById("instructions-pop-up");
const leaderboardButton = document.getElementById("leaderboard-pop-up");
const mainPage = document.getElementsByClassName("container");
const quizPage = document.getElementsByClassName("container2");
const mainImage = document.getElementsByClassName("main-image");
const question = document.getElementById("question");
const buttonA = document.getElementById("answer_a_btn");
const buttonB = document.getElementById("answer_b_btn");
const buttonC = document.getElementById("answer_c_btn");
const buttonD = document.getElementById("answer_d_btn");
const highScore = document.getElementsByClassName("high-scores");
const savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];

let score = 0;
let wrongAnswer;
let correctAnswer;
let shuffleQuestion = [];
let qnaObjectArray;
let questionCounter;

/* Wait for DOM to load before executing the first function 
* to show the start page and add event listeners for the buttons
*/

document.addEventListener("DOMContentLoaded", function () {
    const startButtons = document.this.querySelectorAll(".btn");
    startButtons.forEach((startButtons) => {
        startButtons.addEventListener("click", function () {
            if (this.getAtribute("id") === ".play-btn") {
                runGame();
            } else if (this.getAtribute("id") === ".how-to-play-btn") {
                instructionsPopUp();
            } else if (this.getAtribute("id") === ".leaderboard-btn") {
                leaderboardPopUp();
            }
        });
    });
});

/* This function will open the how to play pop up whilst hiding the main menu.
* The function also listens out for the close button
*/
function instructionsPopUp() {
    instructionsButton.classList.remove("hidden");
    instructionsButton.classList.add("flex-center");
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
    displayLeaderboard();
}

function displayLeaderboard() {
    highScore.innerHTML = savedScores
        .map((score) => {
            return `<li class= "high-scores">${score.name} - ${score.score}`;
        })
        .join();
}

/* This function will close the leaderboard pop up when the close button is clicked */
function closeLeaderboard() {
    leaderboardButton.classList.add("hidden)");
    mainPage.classList.remove("hidden");
    mainImage.classList.remove("hidden");
}

/* This function will take the user to the quiz to start */
function runGame() {
    mainPage.classList.add("hidden");
    mainImage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    retrieveContent();
    nextQuestion();
    displayScore();
}

/* This function should extract the quiz data sourced from https://the-trivia-api.com/ 
* Then calling the function to load the content or catch any errors
*/
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions');
    then(response => response.json()); //Parsing the data to JSON
    then(data => {
        qnaObjectArray = data;
        nextQuestion();
    });
}

/* This function should pull through the question + answer data from the API
* The function will also be called to go to the next question in the object array
*/
function nextQuestion(
    // Extract question from API
    let qnaObject = qnaObjectArray[questionCounter];
    let questionText = qnaObject.question.text;

    // Extract the wrong and correct answers from the response data
    wrongAnswers = qnaObject.incorrectAnswers;
    correctAnswer = qnaObject.correctAnswer;

    updateQNA(questionText, wrongAnswers, correctAnswer);
questionCounter++;
);


function displayScore();

/* Function to check the answer when answer button is selected to see if it's correct
* once checked the next question will be triggered, 
* or for last question the end screen will show
*/
function checkAnswer(buttonText) {
    if (!pupUpActive) {
        buttonText = buttonText.substring(buttonText.indexOf("") + 1);

        if (buttonText === correctAnswer) {
            showNotification("That's Right!", "success");
            if (questionCounter <= 20) {
                nextQuestion();
            } else {
                questionCounter = 0;
                retrieveContent();
            }
            incrementScore();
        } else {
            endGame();
        }
    }
}

function incrementScore();
function endGame();
function showNotification();

function updateQNA(questionText, wrongAnswers, correctAnswer) {
    const answersArray = [wrongAnswers[0], wrongAnswers[1], wrongAnswers[2], correctAnswer];
    shuffleAnswers = shuffleArray(answersArray);
    // Update Answers
    buttonA.textContent = "A: " + shuffleAnswers[0];
    buttonA.textContent = "B: " + shuffleAnswers[1];
    buttonA.textContent = "C: " + shuffleAnswers[2];
    buttonA.textContent = "D: " + shuffleAnswers[3];
    // Update Question
    question.textContent = questionText;
};

/* Shuffle array function using the Fisher-Yates algorithm from Stack Over-flow */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
