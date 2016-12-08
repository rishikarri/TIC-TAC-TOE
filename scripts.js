// 1. set up the board
// 2. add an x or o 
// put an onclick in the first square
// when the user clicks, call function that puts an X int ht e box that was clicked
// MILESTONE
// 3. Program computer response - need a random letter and a random number
// 4. keep track of who's turn it is. 
// 5. When a square is clicked, put the symbol and change who's turn it is
// 6. keep player from overwriting the square
// 7. we need a win checcker
// later - program a heads or tails on the side to see who goes first 



// whosturn to player1
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
 

 // set up winners array
 var winningCombos = [
 	["A1", "B1", "C1"], //row1 - H1
 	["A2", "B2", "C2"], //row2 - H2 
 	["A3", "B3", "C3"],//row3 - H3 
 	["A1", "A2", "A3"],//v1
 	["B1", "B2", "B3"],//v2
 	["C1", "C2", "C3"],//v3
 	["A1", "B2", "C3"],//d1
 	["A3", "B2", "C1"],//d2
 ];
 // console.log(winningCombos);


function markSquare(currentSquare){
	// console.log(currentSquare);
	// I receive the whole div from this

	//change the square to X onclick
	if((currentSquare.innerHTML === "X") || (currentSquare.innerHTML === "O")){
		document.getElementById("spaceForText").innerHTML = "Someone is there. Stop cheating!";
	}else{
		document.getElementById("spaceForText").innerHTML = "&nbsp";
	
		if (whosTurn === 1){
			currentSquare.innerHTML = "X";
			whosTurn = 2; 
			player1Squares.push(currentSquare.id);
			checkWin(1, player1Squares);
		}else{
			currentSquare.innerHTML = "O";
			whosTurn = 1;
			player2Squares.push(currentSquare.id)
			checkWin(2, player2Squares);
		}
		
		// console.log(player1Squares);
		// console.log(player2Squares);
		
	}

}


function checkWin(whoJustMoved, currentPlayerSquares){
	// depending on whoJustmoved, the player array to check changes 
	

	//outer loop
	for (var i = 0; i < winningCombos.length; i++){
		//inner loop - need to loop through winningcombos[i].length because you need to go through each set of three elements
		var rowCount = 0; 
		for(var j = 0; j < winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j]
			if (currentPlayerSquares.indexOf(winningSquare) > -1){
				// HIT! Player has this square, somehwere
				rowCount++; 
			}
		}
		if (rowCount == 3){
			//someone won
			// Player had all 3 of these j's which means they win
			gameOver(whoJustMoved, winningCombos[i]);
			break;
		}
		console.log("Combo Complete");
	}

}


//program gameOVer function

function gameOver(whoJustWon, winningCombo){
	
	var message = "Congrats to player " + whoJustWon + ". You just won with " + winningCombo;
	document.getElementById("spaceForText").innerHTML = message;
	console.log(message);
	console.log(whoJustWon, winningCombo);

	for (var i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += ' winning-square';
	}
}
//computer move
//1. Generate random number and letter for computer 
//2. Need to make sure the comptuer doesn't go where you have already gone

// function computerMove(){
// 	//generate a random  number from 1 to 3
// 	var randomRow = Math.ceil(Math.random() * 3);
// 	console.log(randomRow);

// 	//generate a random letter from a - c
// 	var randomLetterNumberFormat = Math.ceil(Math.random() * 3);
// 	// create an object that provides access to the letters based on the random number generated
// 	var lettersObject = {
// 		1: "A",
// 		2: "B", 
// 		3: "C"
// 	};
// }