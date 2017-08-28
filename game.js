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
