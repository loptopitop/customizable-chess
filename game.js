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
    var pieceClicked = cellClicked.children[0]; // (we know that it will only have 1 child max) 
    if(pieceClicked._data.color == turnColor) { // we clicked our own piece, therefore we select it
      selectPiece(pieceClicked);
    } else { // it is an enemy piece
      if(selectedPiece != undefined) { // we have a selected piece, therefore we kill
        pieceClicked.remove();
        moveSelectedPiece(cellClicked);
        switchturns();
      } else { // we clicked an enemy but we dont have a selected piece, therefore nothing..

      }
    }
  } else { // it does not have children
    if(selectedPiece != undefined) { // we have a selected piece, therefore we wanna move the piece
      moveSelectedPiece(cellClicked);
      switchturns();
    } else { // we dont have a selected piece, therefore nothing..

    }
  }
}
