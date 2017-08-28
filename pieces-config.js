var whitePieces = {
  pawn: {
    img: "Whitepawn.png",
    canMoveTo: function pawnpotential(cellClicked){
      if(pieceClicked != undefined && selectedPiece != undefined) {
        potentialmove((-1),(1),pieceClicked);
        potentialmove((-1),(-1),pieceClicked);
  //making pieceClicked == cellClicked
          }
      else {


      // simply moving forward (black pwans move differently thatn white pawns)
          if(selectedPiece._data.row == 1) {
            potentialmove((-1),(0),cellClicked);
            potentialmove((-2),(0),cellClicked);
          }

          else {
            potentialmove((-1),(0),cellClicked);
          }


    }
    }
  },
  horse: {
    img: "WhiteHorse.png"
    canMoveTo: function horsepotential(cellClicked){
      potentialmove((-2),(-1),cellClicked);
      potentialmove((-2),(1),cellClicked);

      potentialmove((-1),(-2),cellClicked);
      potentialmove((1),(-2),cellClicked);

      potentialmove((2),(-1),cellClicked);
      potentialmove((2),(1),cellClicked);

      potentialmove((-1),(2),cellClicked);
      potentialmove((1),(2),cellClicked);
    }
  },
  queen:{
    img: "whitequeen.png"
    canMoveTo: function queenpotential(cellClicked){
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
  },
  king:{
    img: "Whiteking.png"
    canMoveTo: function kingpotential(cellClicked){
      potentialmove((-1),(1),pieceClicked);
      potentialmove((-1),(-1),pieceClicked);

      potentialmove((+1),(1),cellClicked);
      potentialmove((+1),(-1),cellClicked);

      potentialmove((-1),(0),cellClicked);
      potentialmove((1),(0),cellClicked);
    }
  },
  bishop:{
    img: "whitebishop.png"
    canMoveTo: function bishoppotential(cellClicked){
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

  },
  rook:{
    img: "whiterook.png"
    canMoveTo: function rookpotential(cellClicked){
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
  }
}

var blackPieces = {
  pawn: {
    img: "BlackPawn.png"
    canMoveTo: function pawnpotential(cellClicked){
      if(pieceClicked != undefined && selectedPiece != undefined) {
          potentialmove((+1),(1),cellClicked);
          potentialmove((+1),(-1),cellClicked);
           }

      else {
          if(selectedPiece._data.row == 6) {
              potentialmove((1),(0),cellClicked);
              potentialmove((2),(0),cellClicked);
            }
          else {
              potentialmove((1),(0),cellClicked);
            }
      }
    }
    }
  horse: {
    img: "BlackHorse.png"
    canMoveTo: function horsepotential(cellClicked){
      potentialmove((-2),(-1),cellClicked);
      potentialmove((-2),(1),cellClicked);

      potentialmove((-1),(-2),cellClicked);
      potentialmove((1),(-2),cellClicked);

      potentialmove((2),(-1),cellClicked);
      potentialmove((2),(1),cellClicked);

      potentialmove((-1),(2),cellClicked);
      potentialmove((1),(2),cellClicked);
    }
  },
  queen:{
    img: "Queen.png"
    canMoveTo: function queenpotential(cellClicked){
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

  },
  king:{
    img: "blackking.png"
    canMoveTo: function kingpotential(cellClicked){
      potentialmove((-1),(1),pieceClicked);
      potentialmove((-1),(-1),pieceClicked);

      potentialmove((+1),(1),cellClicked);
      potentialmove((+1),(-1),cellClicked);

      potentialmove((-1),(0),cellClicked);
      potentialmove((1),(0),cellClicked);
    }
  },
  bishop:{
    img: "bishop.png"
    canMoveTo: function bishoppotential(cellClicked){
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
  },
  rook:{
    img: "BlackRook.png"
    canMoveTo: function rookpotential(cellClicked){
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
  }
}
