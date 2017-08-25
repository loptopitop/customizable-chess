

  function potentialmove(x,y,cellClicked){
    if (selectedPiece._data.row == (cellClicked._data.row + x)){
      if(selectedPiece._data.cell == (cellClicked._data.cell + y)){
        if (cellClicked.children.length > 0){
          if (cellClicked.children[0]._data.color != selectedPiece._data.color) {
            cellClicked.children[0].remove();
            moveSelectedPiece(cellClicked);
            switchturns();
          }
        }
        else {
          moveSelectedPiece(cellClicked);
          switchturns();

          }

      }
    }
  }

  function horsepotential(cellClicked){
    potentialmove((-2),(-1),cellClicked);
    potentialmove((-2),(1),cellClicked);

    potentialmove((-1),(-2),cellClicked);
    potentialmove((1),(-2),cellClicked);

    potentialmove((2),(-1),cellClicked);
    potentialmove((2),(1),cellClicked);

    potentialmove((-1),(2),cellClicked);
    potentialmove((1),(2),cellClicked);
  }

  function pawnpotential(cellClicked){

    if (selectedPiece._data.color == "white"){

    // simply moving forward (black pwans move differently thatn white pawns)
        if(selectedPiece._data.row == 1) {
          potentialmove((-1),(0),cellClicked);
          potentialmove((-2),(0),cellClicked);
        }

        else {
          potentialmove((-1),(0),cellClicked);
        }
    }

    if (selectedPiece._data.color == "black") {
        if(selectedPiece._data.row == 6) {
            potentialmove((1),(0),cellClicked);
            potentialmove((2),(0),cellClicked);
          }
        else {
            potentialmove((1),(0),cellClicked);
          }
    }
  }

  function pawnpotentialkill(pieceClicked, cellClicked){
    if(pieceClicked != undefined && selectedPiece != undefined){
        if (selectedPiece._data.color == "white"){
        potentialmove((-1),(1),pieceClicked);
        potentialmove((-1),(-1),pieceClicked);
//making pieceClicked == cellClicked
          }
        if (selectedPiece._data.color == "black"){
          potentialmove((+1),(1),cellClicked);
          potentialmove((+1),(-1),cellClicked);
           }
        }

    }

  function bishoppotential(cellClicked){
//first line
    potentialmove((1),(1),cellClicked);
    potentialmove((2),(2),cellClicked);
    potentialmove((3),(3),cellClicked);
    potentialmove((4),(4),cellClicked);
    potentialmove((5),(5),cellClicked);
    potentialmove((6),(6),cellClicked);
    potentialmove((-1),(-1),cellClicked);
    potentialmove((-2),(-2),cellClicked);
    potentialmove((-3),(-3),cellClicked);
    potentialmove((-4),(-4),cellClicked);
    potentialmove((-5),(-5),cellClicked);
    potentialmove((-6),(-6),cellClicked);

    potentialmove((-1),(1),cellClicked);
    potentialmove((-2),(2),cellClicked);
    potentialmove((-3),(3),cellClicked);
    potentialmove((-4),(4),cellClicked);
    potentialmove((-5),(5),cellClicked);
    potentialmove((-6),(6),cellClicked);
    potentialmove((1),(-1),cellClicked);
    potentialmove((2),(-2),cellClicked);
    potentialmove((3),(-3),cellClicked);
    potentialmove((4),(-4),cellClicked);
    potentialmove((5),(-5),cellClicked);
    potentialmove((6),(-6),cellClicked);
    }

    function rookpotential(cellClicked){
      potentialmove((-1),(0),cellClicked);
      potentialmove((-2),(0),cellClicked);
      potentialmove((-3),(0),cellClicked);
      potentialmove((-4),(0),cellClicked);
      potentialmove((-5),(0),cellClicked);
      potentialmove((-6),(0),cellClicked);
      potentialmove((-7),(0),cellClicked);
      potentialmove((-8),(0),cellClicked);
      potentialmove((1),(0),cellClicked);
      potentialmove((2),(0),cellClicked);
      potentialmove((3),(0),cellClicked);
      potentialmove((4),(0),cellClicked);
      potentialmove((5),(0),cellClicked);
      potentialmove((6),(0),cellClicked);
      potentialmove((7),(0),cellClicked);
      potentialmove((8),(0),cellClicked);

      potentialmove((0),(-1),cellClicked);
      potentialmove((0),(-2),cellClicked);
      potentialmove((0),(-3),cellClicked);
      potentialmove((0),(-4),cellClicked);
      potentialmove((0),(-5),cellClicked);
      potentialmove((0),(-6),cellClicked);
      potentialmove((0),(-7),cellClicked);
      potentialmove((0),(-8),cellClicked);
      potentialmove((0),(1),cellClicked);
      potentialmove((0),(2),cellClicked);
      potentialmove((0),(3),cellClicked);
      potentialmove((0),(4),cellClicked);
      potentialmove((0),(5),cellClicked);
      potentialmove((0),(6),cellClicked);
      potentialmove((0),(7),cellClicked);
      potentialmove((0),(8),cellClicked);

    }

    function queenpotential(cellClicked){//(rook +bishop together)

      //bishop
      potentialmove((1),(1),cellClicked);
      potentialmove((2),(2),cellClicked);
      potentialmove((3),(3),cellClicked);
      potentialmove((4),(4),cellClicked);
      potentialmove((5),(5),cellClicked);
      potentialmove((6),(6),cellClicked);
      potentialmove((-1),(-1),cellClicked);
      potentialmove((-2),(-2),cellClicked);
      potentialmove((-3),(-3),cellClicked);
      potentialmove((-4),(-4),cellClicked);
      potentialmove((-5),(-5),cellClicked);
      potentialmove((-6),(-6),cellClicked);

      potentialmove((-1),(1),cellClicked);
      potentialmove((-2),(2),cellClicked);
      potentialmove((-3),(3),cellClicked);
      potentialmove((-4),(4),cellClicked);
      potentialmove((-5),(5),cellClicked);
      potentialmove((-6),(6),cellClicked);
      potentialmove((1),(-1),cellClicked);
      potentialmove((2),(-2),cellClicked);
      potentialmove((3),(-3),cellClicked);
      potentialmove((4),(-4),cellClicked);
      potentialmove((5),(-5),cellClicked);
      potentialmove((6),(-6),cellClicked);

      //rook
      potentialmove((-1),(0),cellClicked));
      potentialmove((-2),(0),cellClicked));
      potentialmove((-3),(0),cellClicked));
      potentialmove((-4),(0),cellClicked));
      potentialmove((-5),(0),cellClicked));
      potentialmove((-6),(0),cellClicked));
      potentialmove((-7),(0),cellClicked));
      potentialmove((-8),(0),cellClicked));
      potentialmove((1),(0),cellClicked));
      potentialmove((2),(0),cellClicked));
      potentialmove((3),(0),cellClicked));
      potentialmove((4),(0),cellClicked));
      potentialmove((5),(0),cellClicked));
      potentialmove((6),(0),cellClicked));
      potentialmove((7),(0),cellClicked));
      potentialmove((8),(0),cellClicked));

      potentialmove((0),(-1),cellClicked));
      potentialmove((0),(-2),cellClicked));
      potentialmove((0),(-3),cellClicked));
      potentialmove((0),(-4),cellClicked));
      potentialmove((0),(-5),cellClicked));
      potentialmove((0),(-6),cellClicked));
      potentialmove((0),(-7),cellClicked));
      potentialmove((0),(-8),cellClicked));
      potentialmove((0),(1),cellClicked));
      potentialmove((0),(2),cellClicked));
      potentialmove((0),(3),cellClicked));
      potentialmove((0),(4),cellClicked));
      potentialmove((0),(5),cellClicked));
      potentialmove((0),(6),cellClicked));
      potentialmove((0),(7),cellClicked));
      potentialmove((0),(8),cellClicked));


    }

function kingpotential(){// the pawn move and attack for both colours

  potentialmove((-1),(1),pieceClicked);
  potentialmove((-1),(-1),pieceClicked);

  potentialmove((+1),(1),cellClicked);
  potentialmove((+1),(-1),cellClicked);

  potentialmove((-1),(0),cellClicked);
  potentialmove((1),(0),cellClicked);
}

  //give all moves by an addition/ subtraction of the corrdinates.
