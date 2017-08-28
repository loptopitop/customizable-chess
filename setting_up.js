// general setup
document.body.style.background = "lightblue";

var turnColor = "white";
var selectedPiece;

// setup textbox
var textbox = document.createElement('input');
document.body.appendChild(textbox);
textbox.value = turnColor;

// setup board
var board = makeBoard(8, 8, handleCellClick);
document.body.appendChild(board);



function placeNewPiece(color, type, row, cell){
  if(type != 'bishop') return false;
  
  var piece = document.createElement('img');
  if(color == 'white') {
    piece.src = 'images/' + piecesConfig[type].img.white;
  }
  if(color == 'black') {
    piece.src = 'images/' + piecesConfig[type].img.black;
  }
  piece._data = {};
  piece._data.color = color;
  piece._data.cell = cell;
  piece._data.row = row;
  piece._data.type = type;
  piece._data.pattern = piecesConfig[type].pattern;
  piece.style.height = "100px";
  piece.style.width = "100px";
  board.rows[row].cells[cell].appendChild(piece);
  return piece;
}

// setup pieces
placeNewPiece('white', 'pawn', 1, 0);
placeNewPiece('white', 'pawn', 1, 1);
placeNewPiece('white', 'pawn', 1, 2);
placeNewPiece('white', 'pawn', 1, 3);
placeNewPiece('white', 'pawn', 1, 4);
placeNewPiece('white', 'pawn', 1, 5);
placeNewPiece('white', 'pawn', 1, 6);
placeNewPiece('white', 'pawn', 1, 7);
placeNewPiece('white', 'horse', 0, 1);
placeNewPiece('white', 'horse', 0, 6);
placeNewPiece('white', 'bishop', 0, 2);
placeNewPiece('white', 'bishop', 0, 5);
placeNewPiece('white', 'rook', 0, 0)
placeNewPiece('white', 'rook', 0, 7)
placeNewPiece('white', 'king', 0, 3);
placeNewPiece('white', 'queen', 0, 4);
placeNewPiece('black', 'pawn', 6, 0);
placeNewPiece('black', 'pawn', 6, 1);
placeNewPiece('black', 'pawn', 6, 2);
placeNewPiece('black', 'pawn', 6, 3);
placeNewPiece('black', 'pawn', 6, 4);
placeNewPiece('black', 'pawn', 6, 5);
placeNewPiece('black', 'pawn', 6, 6);
placeNewPiece('black', 'pawn', 6, 7);
placeNewPiece('black', 'horse', 7, 1);
placeNewPiece('black', 'horse', 7, 6);
placeNewPiece('black', 'bishop', 7, 2);
placeNewPiece('black', 'bishop', 7, 5);
placeNewPiece('black', 'rook', 7, 0)
placeNewPiece('black', 'rook', 7, 7)
placeNewPiece('black', 'king', 7, 4);
placeNewPiece('black', 'queen', 7, 3);
