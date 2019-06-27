

const Board = new Array(64).fill(0);

const Piece = {
	
	this.color,
	this.moveMap,
	this.alive = true;
	
}

const Pawn extends Piece {
	
	this.moveMap = 3;
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

function game(boardState, playerToMove) = {
	
	
	move(decision());
	
	//decision returns position of piece to move, and position to move to.
	//for now we won't care what was in b
	
	game(Board, !playerToMove);
	
	}
	
