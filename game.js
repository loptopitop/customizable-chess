function moveSelectedPiece(cell){
  if(selectedPiece != undefined) {
    cell.appendChild(selectedPiece);
    selectedPiece._data.row = cell._data.row;
    selectedPiece._data.cell = cell._data.cell;
  }
}

function selectPiece(piece) {
  unselect();
  piece.style.background = "green";
  selectedPiece = piece;
}

function placeNewPiece(color, type, row, cell){
  var piece = document.createElement('img');
  if(color == 'white') {
    piece.src = 'images/' + whitePieces[type].img;
  }
  if(color == 'black') {
    piece.src = 'images/' + blackPieces[type].img;
  }
  piece._data = {};
  piece._data.color = color;
  piece._data.cell = cell;
  piece._data.row = row;
  piece._data.type = type;
  piece.style.height = "100px";
  piece.style.width = "100px";
  board.rows[row].cells[cell].appendChild(piece);
  return piece;
}

function unselect(){
  if(selectedPiece != undefined) {
    selectedPiece.style.background = "";
    selectedPiece = undefined;
  }
}

function switchturns() {
  unselect();
  if (turnColor == 'white') { turnColor = 'black'; }
  else { turnColor = 'white'; }
  textbox.value = turnColor;
}

function handleCellClick(cellClicked){
  if(cellClicked.children.length > 0) { // does it have children (aka does it have a piece in it)
   var pieceClicked = cellClicked.children[0];
   if(pieceClicked._data.color == turnColor) { // we clicked our own piece, therefore we select it
      selectPiece(pieceClicked);
    }
  }
  if (selectedPiece._data.type == "horse"){
     horsepotential(cellClicked);
   }
 if (selectedPiece._data.type == "bishop") {
   bishoppotential(cellClicked);
   }
  if (selectedPiece._data.type == "rook") {
    rookpotential(cellClicked);
  }
  if (selectedPiece._data.type == "queen") {
    queenpotential(cellClicked);
  }
  if (selectedPiece._data.type == "king") {
    kingpotential(cellClicked);
  }
  if (selectedPiece._data.type == "pawn") {
      if (pieceClicked != undefined && selectedPiece != undefined){
        pawnpotentialkill(cellClicked);
      }
      else {
        pawnpotential(cellClicked);
        }
      }
  }
