//Generates Computer Choice
function computerPlay() {
	if ((Math.floor(Math.random() * 2)) == 0) {
		return "rock";
	} else if ((Math.floor(Math.random() * 2)) == 1) {
		return "paper";
	} else {
		return "scissor";
	}
}
// Plays Rock-Paper-Scissor Logic and Score Update Implementation
function playRound(playerSelection,computerPlay) {
	if (playerSelection == computerPlay) {
		console.log('draw');
		uiText = 'draw' ;
		resultInfo.innerHTML = `${uiText}`;
	} else if (playerSelection == "rock") {
		if (computerPlay == "paper") {
			computerScore += 1;
			ComputerScoreInfo.textContent = `${computerScore}`;
			uiText = 'You lose';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		} else if (computerPlay == "scissor") {
			playerScore += 1;
			playerScoreInfo.textContent = `${playerScore}`;
			uiText = 'You Win';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		}
	} else if (playerSelection == "paper") {
		if (computerPlay == "scissor") {
			computerScore += 1;
			ComputerScoreInfo.textContent = `${computerScore}`;
			uiText = 'You lose';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		} else if (computerPlay == "rock") {
			playerScore += 1;
			playerScoreInfo.textContent = `${playerScore}`;
			uiText = 'You Win';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		}
	} else if (playerSelection == "scissor") {
		if (computerPlay == "rock") {
			computerScore += 1;
			ComputerScoreInfo.textContent = `${computerScore}`;
			uiText = 'You lose';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		} else if (computerPlay == "paper") {
			playerScore += 1;
			playerScoreInfo.textContent = `${playerScore}`;
			uiText = 'You Win';
			resultInfo.innerHTML = `${uiText}`;
			wincheck();
		}
	} else {
		uiText = 'Something is Wrong';
		resultInfo.innerHTML = `${uiText}`;
	}
	console.log(playerScore);
}
//Selects Player choice by attribute, Computer choice generation, and Winner Logic
function game(e) {
	let playerSelection = e.target.getAttribute('value');
	console.log(playerSelection)
	if (isEnd) {
		return;
	} else {
		playRound(playerSelection,computerPlay());
	}
	
}
function wincheck() {
	if (playerScore >= 5 || computerScore >= 5) {
		isEnd = true;
		if (playerScore > computerScore) {
			uiText = 'Player Wins!';
			resultInfo.innerHTML = `${uiText}`;
		} else {
			uiText = 'Computer Wins!';
			resultInfo.innerHTML = `${uiText}`;
		}
	}
}

// Player and Computer Info Stats
let playerScore = 0;
let computerScore = 0;
let uiText = 'Select Your Weapon';
let playerChoice = 'none';
let computerChoice = 'none';
let isEnd = false;
// DOM Selectors for UI and Buttons
buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button = document.addEventListener('click', game);
	});
playerScoreInfo = document.querySelector('.player-score');
playerScoreInfo.textContent = `${playerScore}`;

ComputerScoreInfo = document.querySelector('.computer-score');
ComputerScoreInfo.textContent = `${computerScore}`;

resultInfo = document.querySelector('.result-info');
resultInfo.innerHTML = `${uiText}`;