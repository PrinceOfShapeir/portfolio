

const Board = new Array(64).fill(0);

function Piece (color) = {
	
	this.color,
	this.moveMap,
	this.alive = true;
	this.position;
	
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

function promote(piece) {
	
	
	let promotedPiece = prompt();
	
	let newPiece = new /*pieceType*/;
	newPiece.position, newPiece.color = piece.position,piece.color;
	return newPiece;
	
}
	

function move (a,b) {
	//takes integer input
	
	Board[b] = Board[a];
	Board[a] = 0;
	
	
}

function check (boardState, PlayerToMove){
	
	
	let movedPiece = ; //last moved piece
	
	let kingPos = ;//playerKing in Boardstate
	
	function checked = (kingPos,  movedPiece) { //dont forget to flip the dummy board for calculations
		
			if (Object.getPrototypeOf(movedPiece)===Pawn){
				
				if(movedPiece.position <= 8 ) {
					
					movedPiece = promote(movedPiece); //promote returns new piece, copying only color and position values
					
					return checked (kingPos, movedPiece); //starts over
					
				}
				
				else if(movedPiece.position%8===0) {
					
					//it's on the right
					
				}
				
				else if ((movedPiece.position-1)%8===0){
					
					//it's on the left
					
				}
				
				else {
					
					//it's in the middle somewhere
					
				}
			}
		
		
		}; //player in check
	//just check if any king is in check, impossible for player to move to
	//be in check already
	
	
	if(checked){
		
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
	
	
	move(decision()); //decision returns only valid moves
	
	//decision returns position of piece to move, and position to move to.
	//for now we won't care what was in b
	
	check()
	
	game(Board, !playerToMove);
	
	}
	
