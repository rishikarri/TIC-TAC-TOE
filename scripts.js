// 1. set up the board
// 2. add an x or o 
// put an onclick in the first square
// when the user clicks, call function that puts an X int ht e box that was clicked
// MILESTONE
// 3. Program computer response - need a random letter and a random number



function markSquare(square){
	console.log(square);
	// I receive the whole div from this

	//change the square to X onclick
	square.innerHTML = "X";

}


//computer move
//1. Generate random number and letter for computer 
//2. Need to make sure the comptuer doesn't go where you have already gone

function computerMove(){
	//generate a random  number from 1 to 3
	var randomRow = Math.ceil(Math.random() * 3)
	console.log(randomRow);


}