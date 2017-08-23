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
   var pieceClicked = cellClicked.children[0]; // (we know that it will only have 1 child max)
   if(pieceClicked._data.color == turnColor) { // we clicked our own piece, therefore we select it
     selectPiece(pieceClicked);
   }
   if(selectedPiece != undefined && selectedPiece._data.type == "pawn") { // we have a selected piece, therefore we kill
         pawnpotentialkill(pieceClicked, cellClicked);
      }
    }

  else if (pieceClicked == undefined) {
      pawnpotential(cellClicked);
    }
  }



function pawnpotentialkill(pieceClicked,  cellClicked){
  if(pieceClicked != undefined && selectedPiece != undefined){
    if (selectedPiece._data.color == "white"){
      if(cellClicked._data.cell == selectedPiece._data.cell + 1 && cellClicked._data.row == selectedPiece._data.row + 1 ){
        pieceClicked.remove();
        moveSelectedPiece(cellClicked);
        switchturns();
      }
    if(cellClicked._data.cell == selectedPiece._data.cell - 1 && cellClicked._data.row == selectedPiece._data.row + 1){
        pieceClicked.remove();
        moveSelectedPiece(cellClicked);
        switchturns();
      }
  }
    if (selectedPiece._data.color == "black"){
      if(cellClicked._data.cell == selectedPiece._data.cell - 1 && cellClicked._data.row == selectedPiece._data.row - 1){
         pieceClicked.remove();
         moveSelectedPiece(cellClicked);
         switchturns();
       }
      if(cellClicked._data.cell == selectedPiece._data.cell + 1 && cellClicked._data.row == selectedPiece._data.row - 1){
         pieceClicked.remove();
         moveSelectedPiece(cellClicked);
         switchturns();
       }
    }
  }
}

function pawnpotential(cellClicked){
  if (selectedPiece._data.cell == cellClicked._data.cell) {


  // simply moving forward
      if (selectedPiece._data.color == "white"){
        if(selectedPiece._data.row == 1) {
          if(cellClicked._data.row == (selectedPiece._data.row + 2)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
          if(cellClicked._data.row == (selectedPiece._data.row + 1)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        }
        else {
          if(cellClicked._data.row == (selectedPiece._data.row + 1)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        }
      }

      if (selectedPiece._data.color == "black") {
        if(selectedPiece._data.row == 6) {
          if(cellClicked._data.row == (selectedPiece._data.row - 2)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
          if(cellClicked._data.row == (selectedPiece._data.row - 1)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        }
        else {
          if(cellClicked._data.row == (selectedPiece._data.row -1)){
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        }
      }
  }
}
