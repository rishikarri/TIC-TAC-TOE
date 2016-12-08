// 1. set up the board
// 2. add an x or o 
// put an onclick in the first square
// when the user clicks, call function that puts an X int ht e box that was clicked
// MILESTONE
// 3. Program computer response - need a random letter and a random number
// 4. keep track of who's turn it is. 
// 5. When a square is clicked, put the symbol and change who's turn it is



var whosTurn = 1;
 // whosturn to player1


function markSquare(currentSquare){
	console.log(currentSquare);
	// I receive the whole div from this

	//change the square to X onclick

	if (whosTurn === 1){
		currentSquare.innerHTML = "X";
		whosTurn = 2; 
	}else{
		currentSquare.innerHTML = "O";
		whosTurn = 1;
	}

}


//computer move
//1. Generate random number and letter for computer 
//2. Need to make sure the comptuer doesn't go where you have already gone

function computerMove(){
	//generate a random  number from 1 to 3
	var randomRow = Math.ceil(Math.random() * 3);
	console.log(randomRow);

	//generate a random letter from a - c
	var randomLetterNumberFormat = Math.ceil(Math.random() * 3);
	// create an object that provides access to the letters based on the random number generated
	var lettersObject = {
		1: "A",
		2: "B", 
		3: "C"
	};

	


}