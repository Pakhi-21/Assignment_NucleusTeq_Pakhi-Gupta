let currentPlayer = 1;
let currentScore = 0;

// for total score
let scores = { 1: 0, 2: 0 };

const messageText = document.getElementById("message");
const startGame = document.getElementById("startGame");
const rollDice = document.getElementById("rollDice");
const saveScore = document.getElementById("saveScore");

// Start Game Button
startGame.addEventListener("click", function () {
    let player1Input = document.getElementById("player1NameInput").value.trim();
    let player2Input = document.getElementById("player2NameInput").value.trim();
        
    let player1Name = player1Input !== "" ? player1Input : "Player 1";
    let player2Name = player2Input !== "" ? player2Input : "Player 2";
    
    // Update player names in the game
    document.getElementById("player1Name").innerText = player1Name;
    document.getElementById("player2Name").innerText = player2Name;

    // Hide name input section and show game board
    messageText.textContent = `${player1Name} Turn`;
    document.getElementById("nameSection").style.display = "none";
    document.getElementById("message").style.display = "inline-block";
    document.getElementById("gameBoard").style.display = "flex";
    document.getElementById("rollDice").style.display = "inline-block";
    document.getElementById("saveScore").style.display = "inline-block";
    document.getElementById("resetGame").style.display = "inline-block";
});


//Rolling dice button
rollDice.addEventListener("click", function () {
    let dice = document.getElementById("diceImg");

    //add dice sound
    let diceSound = new Audio("dice-sound.mp3");
    diceSound.play();

    // Dice roll animation
    dice.classList.add("rolling");

    let diceRoll = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
        dice.src = `image/dice-${diceRoll}.png`;
        dice.classList.remove("rolling");

        if (diceRoll === 1) {
            currentScore = 0;
            switchTurn();
        } else {
            currentScore += diceRoll;
            document.getElementById(`player${currentPlayer}Current`).innerText = currentScore;
        }
    }, 500);
});


// save score button
saveScore.addEventListener("click", function () {
    scores[currentPlayer] += currentScore;
    document.getElementById(`player${currentPlayer}Saved`).innerText = scores[currentPlayer];

    if (scores[currentPlayer] >= 100) {
        let winnerName = document.getElementById(`player${currentPlayer}Name`).innerText;
        document.getElementById("winnerMessage").textContent = `🎈🎈🎉 CONGRATULATION ${winnerName} Won The Game! 🎉🎈🎈`;
        disableGame();
    } else {
        currentScore = 0;
        switchTurn();
    }
});


// reset button
document.getElementById("resetGame").addEventListener("click", resetGame);

function switchTurn() {
    document.getElementById(`player${currentPlayer}Current`).innerText = "0";

    // Remove active class from current player
    document.getElementById(`player${currentPlayer}`).classList.remove("active");

    // Switch turn
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    // Add active class to new current player
    document.getElementById(`player${currentPlayer}`).classList.add("active");
    let Name = document.getElementById(`player${currentPlayer}Name`).innerText;
    messageText.textContent = `${Name} Turn`;
    currentScore = 0;
}

function resetGame() {
    scores = { 1: 0, 2: 0 };
    currentScore = 0;
    currentPlayer = 1;
    document.getElementById("player1Saved").innerText = "0";
    document.getElementById("player2Saved").innerText = "0";
    document.getElementById("player1Current").innerText = "0";
    document.getElementById("player2Current").innerText = "0";
    document.getElementById("winnerMessage").innerText = "";

    // Reset player highlight
    document.getElementById("player1").classList.add("active");
    document.getElementById("player2").classList.remove("active");

    // Enable buttons
    enableGame();

    // Show name input section again
    document.getElementById("nameSection").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("gameBoard").style.display = "none";
    document.getElementById("rollDice").style.display = "none";
    document.getElementById("saveScore").style.display = "none";
    document.getElementById("resetGame").style.display = "none";
}

function disableGame() {
    document.getElementById("rollDice").disabled = true;
    document.getElementById("saveScore").disabled = true;
}

function enableGame() {
    document.getElementById("rollDice").disabled = false;
    document.getElementById("saveScore").disabled = false;
}
