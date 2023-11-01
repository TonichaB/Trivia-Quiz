/*jshint esversion: 6 */
/*jshint esversion: 11 */

/* Target elements from DOM */
const instructionsButton = document.getElementById("instructions-pop-up");
const leaderboardButton = document.getElementById("leaderboard-pop-up");
const mainPage = document.getElementById("container");
const quizPage = document.getElementById("container2");
const question = document.getElementById("question");
const highScoreList = document.getElementById("high-scores");
const numOfHighScores = 10;
const highScoreString = localStorage.getItem(highScoreList);
const highScores = JSON.parse(highScoreString) || [];
const userScore = document.getElementById('user-score-tally');
const notification = document.getElementById("notification");
const quizComplete = document.getElementById("quiz-complete");
const finalScore = document.getElementById("final-score");

let score = 0;

let wrongAnswers;
let correctAnswer;
let qnaObjectArray;
let questionCounter = 0;
let shuffleAnswers;

/* Wait for DOM to load before executing the first function 
* to show the start page and add event listeners for the buttons
*/

document.addEventListener("DOMContentLoaded", function () {
    mainPage.style.display = 'block';
    const startButtons = this.querySelectorAll(".btn");
    startButtons.forEach((startButton) => {
        startButton.addEventListener("click", function () {
            if (this.getAttribute("id") === "play-btn") {
                runGame();
                console.log("Play Game");
            } else if (this.getAttribute("id") === "how-to-play-btn") {
                instructionsPopUp();
                console.log("instructions");
            } else if (this.getAttribute("id") === "leaderboard-btn") {
                leaderboardPopUp();
                console.log("leaderboard");
            }
        });
    });
    /* End game button functions */
    const endGameButtons = document.querySelectorAll(".quiz-complete-btn");
    endGameButtons.forEach((endGameButtons) => {
        endGameButtons.addEventListener("click", function () {
            resetScore();
            if (this.getAttribute("id") === "try-again-btn") {
                quizComplete.style.display = 'none';
                mainPage.style.display = 'none';
                runGame();
            } else if (this.getAttribute("id") === "end-score-btn") {
                checkHighScore(finalScore.innerText);
            }
        });
    });
});

/* This function will open the how to play pop up whilst hiding the main menu.
* The function also listens out for the close button
*/
function instructionsPopUp() {
    if (instructionsButton.style.display === 'none' || instructionsButton.style.display === '') {
        instructionsButton.style.display = 'block';
        mainPage.style.display = 'none';
        quizPage.style.display = 'none';
    }

    const closeInstructionsPopUp = document.getElementById("close-instructions");
    closeInstructionsPopUp.addEventListener("click", closeInstructions);
}

/* This function will close the how to play pop up when the close button is clicked */
function closeInstructions() {
    if (instructionsButton.style.display == 'block') {
        instructionsButton.style.display = 'none';
        mainPage.style.display = 'block';
        quizPage.style.display = 'none';
    }
}

/* This function will open the leaderboard pop up whilst hiding the main menu.
* The function also listens out for the close button
*/
function leaderboardPopUp() {
    if (leaderboardButton.style.display === 'none' || leaderboardButton.style.display === '') {
        leaderboardButton.style.display = 'block';
        mainPage.style.display = 'none';
    }
    const closeLeaderboardPopUp = document.getElementById("close-leaderboard");
    closeLeaderboardPopUp.addEventListener("click", closeLeaderboard);
    displayLeaderboard();
}

/* This function will close the leaderboard pop up when the close button is clicked */
function closeLeaderboard() {
    if (leaderboardButton.style.display == 'block') {
        leaderboardButton.style.display = 'none';
        mainPage.style.display = 'block';
    }
}

/* Function to display the saved high scores */
function displayLeaderboard() {
    const highScoreList = document.getElementById('high-scores');
    highScoreList.innerHTML = highScores
        .map((score, index) => {
            const position = index + 1;
            return `<li class="high-scores">${position}. ${score.name} - Score: ${score.score}</li>`;
        })
        .join('');    
}

/* This function will take the user to the quiz to start */
function runGame() {
    mainPage.style.display = 'none';
    quizPage.style.display = 'block';
    retrieveContent();
}

/* Event listeners for the answer buttons */
const buttonA = document.getElementById("answer-a-btn");
buttonA.addEventListener("click", () => checkAnswer(buttonA.textContent));
const buttonB = document.getElementById("answer-b-btn");
buttonB.addEventListener("click", () => checkAnswer(buttonB.textContent));
const buttonC = document.getElementById("answer-c-btn");
buttonC.addEventListener("click", () => checkAnswer(buttonC.textContent));
const buttonD = document.getElementById("answer-d-btn");
buttonD.addEventListener("click", () => checkAnswer(buttonD.textContent));

/* This function should extract the quiz data sourced from https://the-trivia-api.com/ 
* Then calling the function to load the content or catch any errors
*/
function retrieveContent() {
    fetch('https://the-trivia-api.com/v2/questions')
        .then(response => response.json()) //Parsing the data to JSON
        .then((data) => {
            qnaObjectArray = data;
            nextQuestion();
        });
}

/* This function should pull through the question + answer data from the API
* The function will also be called to go to the next question in the object array
*/
function nextQuestion() {
    // Extract question from API
    const qnaObject = qnaObjectArray[questionCounter];
    const questionText = qnaObject.question.text;

    // Extract the wrong and correct answers from the response data
    wrongAnswers = qnaObject.incorrectAnswers;
    correctAnswer = qnaObject.correctAnswer;

    updateQNA(questionText, wrongAnswers, correctAnswer);
    questionCounter++;
}

/* Function to check the answer when answer button is selected to see if it's correct
* once checked the next question will be triggered, 
* or for last question the end screen will show
*/
function checkAnswer(buttonText) {
    const answer = buttonText.substring(3);
    if (answer === correctAnswer) {
        showNotification("That's Right!", "success");
        // alert("Thats Right!");
        if (questionCounter <= 9) {
            nextQuestion();
        } else {
            questionCounter = 0;
            endGame();
        }
        incrementScore();
    } else {
        showNotification("Mmmm...Not Quite!", "error");
        // alert("That's not right!");
        if (questionCounter <= 9) {
            nextQuestion();
        } else {
            questionCounter = 0;
            endGame();
        }
    }
}

/* Function to show notification for correct/incorrect answer */
function showNotification(message, type) {
    notification.style.display = 'block';
    notification.animate(
        [
            { top: "-210px" },
            { top: "-25px" }
        ],
        {
            duration: 1000,
            fill: "forwards"
        }
    );

    notification.innerHTML = `<p id="notificationText">${message}</p>`;

    if (type === "success") {
        notification.style.backgroundColor = "green";
        notification.style.color = "white";
    } else if (type === "error") {
        notification.style.backgroundColor = "red";
        notification.style.color = "white";
    }
    /* Timer for notifications to dissappear */
    setTimeout(() => {
        notification.animate(
            [
                { top: "-25px" },
                { top: "-250px" }
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        );
        hideNotification();
    }, 1500);
}

function hideNotification() {
    if (notification.style == 'block') {
        notification.style.display = 'none';
    }
}

/* Function to increase score after correct answer */
function incrementScore() {
    score = parseInt(userScore.textContent);

    score++;
    userScore.textContent = score;
}

/* Function to update content for next question */
function updateQNA(questionText, wrongAnswers, correctAnswer) {
    const answersArray = [wrongAnswers[0], wrongAnswers[1], wrongAnswers[2], correctAnswer];
    shuffleAnswers = shuffleArray(answersArray);
    // Update Answers
    buttonA.textContent = "A: " + shuffleAnswers[0];
    buttonB.textContent = "B: " + shuffleAnswers[1];
    buttonC.textContent = "C: " + shuffleAnswers[2];
    buttonD.textContent = "D: " + shuffleAnswers[3];
    // Update Question
    question.textContent = questionText;
}

/* Shuffle array function using the Fisher-Yates algorithm from Stack Over-flow */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* Show end screen function */
function endGame() {

    quizComplete.style.display = 'none';
    quizPage.style.display = 'none';

    if (quizComplete.style.display == 'none') {
        quizPage.style.display = 'none';
        quizComplete.style.display = 'block';
    }

    finalScore.innerText = score;
}

/* Function to re-set score when new game is started */
function resetScore() {
    let score = document.getElementById("user-score-tally");
    score.innerHTML = 0;
}
/* Function to show leaderboard
* I have used code from https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68 to assist with this function
*/
function checkHighScore(score) {
    const nameInput = document.getElementById('username');
    const name= nameInput.value.trim();

    if (name === '') {
        showNotification("Please Enter a Username!", "error");
        return;
    }

    const lowestScore = highScores[numOfHighScores - 1]?.score ?? 0;

    if (score > lowestScore) {
        saveHighScore(score, name, highScores);
        return;
    }
}

/* Function to save user name and score to leaderboard */
function saveHighScore(score, name, highScores) {

    const newScore = { score, name };

    const isScoreAlreadySaved= highScores.some(existingScore => existingScore.score === score);
    
    if (isScoreAlreadySaved) {
        showNotification("Score Already Saved!", "error");
        return;
    }

    highScores.push(newScore);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(numOfHighScores);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    showNotification("Score Saved!", "success");
    mainPage.style.display = 'block';
    quizComplete.style.display = 'none';
}