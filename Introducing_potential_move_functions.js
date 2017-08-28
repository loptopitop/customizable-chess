

  function potentialmove(x,y,cellClicked){
    if (cellClicked._data.row == (selectedPiece._data.row + x)){
      if(cellClicked._data.cell == (selectedPiece._data.cell + y)){
        if (cellClicked.children.length > 0){
          if (cellClicked.children[0]._data.color != selectedPiece._data.color) {
            cellClicked.children[0].remove();
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        else {
          moveSelectedPiece(cellClicked);
          switchturns();
          }
      }
    }
  }
}
