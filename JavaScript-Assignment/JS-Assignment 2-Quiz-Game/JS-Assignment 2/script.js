
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const playAgainBtn = document.getElementById("play-again-btn");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const timerElement = document.getElementById("timer");
const feedbackElement = document.getElementById("feedback");
const finalScoreElement = document.getElementById("final-score");
const questionNo=document.getElementById("current-question");


let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let nextBtn;

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", () => location.reload());

async function startGame() {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    
    if (category === "" || difficulty === "") {
        alert("Please select a option before starting the quiz!");
        return; 
    }

    await fetchQuestions(category, difficulty);
    
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    
    displayQuestion();
}

async function fetchQuestions(category, difficulty) {
    const apiurl = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(apiurl);
    const data = await response.json();
    questions = data.results.map(q => ({
        question: q.question,
        correctAnswer: q.correct_answer,
        options: shuffle([...q.incorrect_answers, q.correct_answer])
    }));
}

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }
    
    clearInterval(timer);
    timeLeft = 15;
    questionNo.textContent=currentQuestionIndex+1;
    timerElement.innerText = `${timeLeft}s`;
    feedbackElement.innerText = "";
    
    document.querySelector(".quiz-timer").style.backgroundColor = "rgb(42, 40, 40)";
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option-div");
        optionDiv.innerHTML = option;
        optionDiv.addEventListener("click", () => checkAnswer(optionDiv, option, currentQuestion.correctAnswer));
        optionsContainer.appendChild(optionDiv);
    });

    createNextButton();  

    startTimer();
}


function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();

        }
    }, 1000);
}


function checkAnswer(div, selected, correct) {
    clearInterval(timer); 

    if (selected === correct) {
        div.style.backgroundColor = "#73ff73";
        score++;
        feedbackElement.innerText = "Correct!";
    } else {
        div.style.backgroundColor = "#Ff7373";
        feedbackElement.innerText = "Wrong! The correct answer is: " + correct;
        

        document.querySelectorAll(".option-div").forEach(opt => {
            if (opt.innerText.includes(correct)) {
                opt.style.backgroundColor = "#73ff73";
            }
        });
    }

    nextBtn.style.display = "block"; 
}


function handleTimeout() {
    feedbackElement.innerText = "Time's up! The correct answer is: " + questions[currentQuestionIndex].correctAnswer;
    document.querySelector(".quiz-timer").style.backgroundColor="red"
    
   
    document.querySelectorAll(".option-div").forEach(opt => {
        if (opt.innerText.includes(questions[currentQuestionIndex].correctAnswer)) {
            opt.style.backgroundColor = "#73ff73";
        }
    });

    nextBtn.style.display = "block"; 
    
}


function createNextButton() {
    if (!nextBtn) {
        nextBtn = document.createElement("button");
        nextBtn.innerText = "Next";
        nextBtn.style.display = "none";
        nextBtn.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
                
                nextBtn.style.display = "none";
            } else {
                endGame();
            }
        });

        document.querySelector(".quiz-footer").appendChild(nextBtn);
    }
}


function endGame() {
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    finalScoreElement.innerText = score;
}


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
