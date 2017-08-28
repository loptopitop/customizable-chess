function makeBoard(numRows, numCells, cellClickHandler){
  var table2 = document.createElement("table");
  table2.style.background = "lightbrown";
  table2.style.borderWidth = "3px";
  table2.style.borderStyle = "solid";
  table2.style.borderColor = "green";

  for(var i = 0; i < numRows; i = i + 1){
    row = table2.insertRow();

    for(var j = 0; j < numCells; j++){
      let cell = row.insertCell();
      cell.style.borderWidth = "3px";
      cell.style.borderStyle = "solid";
      cell.style.borderColor = "green";
      cell.style.width = "100px";
      cell.style.height = "100px";
      cell._data = {};
      cell._data.row = i;
      cell._data.cell = j;
      var halfcells = (j / 2);
      var halfrows = (i / 2);
      if(Math.round( halfrows ) == halfrows) {
        if(Math.round( halfcells ) == halfcells) {
          cell.style.background = "white";
          cell._data.defaultColor = "white";
        }
      }
      else if(Math.round( halfcells ) !== halfcells) {
        cell.style.background = "white"
        cell._data.defaultColor = "white"
      }
      if(cell._data.defaultColor != "white") {
        cell.style.background = "lightblue"
        cell._data.defaultColor = "lightblue"
      }

      // cell is ready
      cell.addEventListener('click', function(){
        cellClicked = cell
        cellClickHandler(cell);
      });
    }
  }
  return table2;
}
