function computerPlay() {
	if ((Math.floor(Math.random() * 2)) == 0) {
		return "rock";
	} else if ((Math.floor(Math.random() * 2)) == 1) {
		return "paper";
	} else {
		return "scissor";
	}
}


function playRound(playerSelection,computerPlay) {
	if (playerSelection.toLowerCase() == computerPlay) {
		return "Draw";
	} else if (playerSelection.toLowerCase() == "rock") {
		if (computerPlay == "paper") {
			return "You lose";
		} else if (computerPlay == "scissor") {
			return "You Win";
		}
	} else if (playerSelection.toLowerCase() == "paper") {
		if (computerPlay == "scissor") {
			return "You lose";
		} else if (computerPlay == "rock") {
			return "You Win";
		}
	} else if (playerSelection.toLowerCase() == "scissor") {
		if (computerPlay == "rock") {
			return "You lose";
		} else if (computerPlay == "paper") {
			return "You win";
		}
	}
}
function game() {
	let playerSelection = prompt("Rock Paper Scissor").toLowerCase();
	alert(playRound(playerSelection,computerPlay()));
}
game();
game();
game();
game();
game();
