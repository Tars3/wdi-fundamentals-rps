////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    	var move = move || getInput();
	return move;
}

function getComputerMove(move) {
   move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
	var winner;
    if(playerMove === computerMove) {
    	winner = "tie";
	}
    //rock
	else if(playerMove === "rock") {
		if(computerMove === "scissors") {
			winner = "player";
		}
         else {
    	    winner = "computer";
	    }
	}
	//paper   
	else if(playerMove === "paper") {
		if(computerMove === "rock") {
			winner = "player";
		}
		else {
			winner = "computer";
		}
	}
    //scissors
	else if(playerMove === "scissors") {
		if(computerMove === "paper") {
			winner = "player";
		}
		else {
			winner = "computer";
		}
	}
	return winner;
}