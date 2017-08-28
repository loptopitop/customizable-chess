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
  highLightPattern(piece);
  selectedPiece = piece;
}

function highLightPattern(piece){
  for(let i = 0; i < board.rows.length; i++){
    for (let j = 0; j < board.rows[i].cells.length; j++){
      if(piece._data.pattern(piece._data.row, piece._data.cell, i, j) == true){
        var cell = board.rows[i].cells[j];
        cell.style.background = "red";
      }
    }
  }
}

function removeAllHighlight(){
  for(let i = 0; i < board.rows.length; i++){
    for (let j = 0; j < board.rows[i].cells.length; j++){
      var cell = board.rows[i].cells[j];
      cell.style.background = cell._data.defaultColor;
    }
  }
}

function unselect(){
  removeAllHighlight();
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
  } else { // does not have children (empty cell)
    if(selectedPiece != undefined) { // we have a selected piece and clicked an empty cell. ie we are trying to move
      var currentRow = selectedPiece._data.row;
      var currentColumn = selectedPiece._data.cell;
      var targetRow = cellClicked._data.row;
      var targetColumn = cellClicked._data.cell;
      if(selectedPiece._data.pattern(currentRow, currentColumn, targetRow, targetColumn) == true) { // pattern allows it
        moveSelectedPiece(cellClicked);
        switchturns();
      }
    }
  }
}
