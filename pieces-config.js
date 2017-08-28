
function rookMovePattern(currentRow, currentColumn, targetRow, targetColumn){
  if(currentRow == targetRow || currentColumn == targetColumn) return true;
  else return false;
}

function bishopMovePattern(currentRow, currentColumn, targetRow, targetColumn){
  var rowDifferential = Math.abs(currentRow - targetRow);
  var columnDifferential = Math.abs(currentColumn - targetColumn);
  if (rowDifferential != 0 && rowDifferential == columnDifferential) return true;
  else return false;
}

function queenMovePattern(currentRow, currentColumn, targetRow, targetColumn){
  var rookCanMoveThere = rookMovePattern(currentRow, currentColumn, targetRow, targetColumn);
  var bishopCanMoveThere = bishopMovePattern(currentRow, currentColumn, targetRow, targetColumn);
  if (rookCanMoveThere || bishopCanMoveThere) return true;
  else return false;
}

var piecesConfig = {
  bishop: {
    img: {
      white: "whitebishop.png",
      black: "bishop.png",
    },
    pattern: bishopMovePattern
  }
};
/*

var whitePieces = {
  pawn: {
    img: "Whitepawn.png",
    pattern: null  // todo
  },
  horse: {
    img: "WhiteHorse.png",
    pattern: null  // todo
  },
  queen:{
    img: "whitequeen.png",
    pattern: null  // todo
  },
  king:{
    img: "Whiteking.png",
    pattern: null  // todo
  },
  bishop:{
    img: "whitebishop.png",
    pattern: null  // todo
  },
  rook:{
    img: "whiterook.png",
    pattern: null  // todo
  }
}

var blackPieces = {
  pawn: {
    img: "BlackPawn.png",
    pattern: null  // todo
  },
  horse: {
    img: "BlackHorse.png",
    pattern: null  // todo
  },
  queen:{
    img: "Queen.png",
    pattern: null  // todo
  },
  king:{
    img: "blackking.png",
    pattern: null  // todo
  },
  bishop:{
    img: "bishop.png",
    pattern: null  // todo
  },
  rook:{
    img: "BlackRook.png",
    pattern: null  // todo
}*/
