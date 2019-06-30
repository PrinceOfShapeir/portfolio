

const Board = new Array(64).fill(0);

function Piece (color) = {
	
	this.color,
	this.moveMap,
	this.alive = true;
	
}

const Pawn extends Piece {
	
	this.moveMap = 4;
	//movemap is a sanity check, will never have more valid moves than this
}

const Knight extends Piece {
	
	this.moveMap = 8;
}

const Bishop extends Piece {
	
	this.moveMap = 16;
	
}

const Rook extends Piece {
	
	this.moveMap = 16;
}

const Queen extends Piece {
	
	this.moveMap = 32;
}

const King extends Piece {
	
	this.moveMap = 8;
	
}

function move (a,b) {
	//takes integer input
	
	Board[b] = Board[a];
	Board[a] = 0;
	
}

function check (boardState, PlayerToMove){
	
	let check = "condition"; //player in check
	if(check){
		
		return winCheck(boardState, PlayerToMove);
	}
	else if(/*moves!=0*/) return game(boardState, playerToMove, true);
	
}


function winCheck (boardState, playerToMove) {
	
	//check for win
	if(win) {
		
		return console.log("game over " + playerToMove + " wins" );
	}
	else return game(boardState, playerToMove, true);
	
}
function game(boardState, playerToMove, check) = {
	
	
	move(decision());
	
	//decision returns position of piece to move, and position to move to.
	//for now we won't care what was in b
	
	game(Board, !playerToMove);
	
	}
	
