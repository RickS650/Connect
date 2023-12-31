// Assuming you want to merge cells
function MergeCellsInRow(rowToMerge) {
    const rows = document.querySelectorAll('.row');
    const cellsToMerge = rows[rowToMerge].querySelectorAll('.cell');

    var mergedCell = document.getElementById("cell1");
    mergedCell.remove();
    mergedCell = document.getElementById("cell2");
    mergedCell.remove();
    mergedCell = document.getElementById("cell3");
    mergedCell.remove();

    // Unable to get span to work
    const spanCell = document.getElementById("cell0");
    //spanCell.classList.add("col-span");
    spanCell.style.columnSpan='3'; 
    spanCell.style.width='700px'; // so did this instead
    spanCell.textContent = fullCat;

    // Make sure each merged row has its own colour
    switch (rowToMerge) {
      case 0:
        spanCell.style.backgroundColor='lightyellow';
        xNum = 4;
        break;
      case 1:
        spanCell.style.backgroundColor='lightred';
        xNum = 8;
        break;
      case 2:
        spanCell.style.backgroundColor='lightpurple';
        xNum = 12;
        break;
      case 3:
        spanCell.style.backgroundColor='lightgreen';
        break;
      }
    mergeRow ++;
    if (xNum< 13) {
      reFormat(xNum);
    } 
}

function reFormat(startNumber) {
  // First remove the words already picked from the words array. ....
  
  for (let i = 0; i < whatWord.length; i++) {
    const index = words.indexOf(whatWord[i]);
    if (index > -1) {
      words.splice(index, 1);
    }
  }

  // then reshuffle whats left ....
  shuffleArray(words);

  // then reload the cells 
  for (let i = startNumber; i < words.length; i++) {
    var cell = document.getElementById("cell"+i);
    cell.textContent = words[i];  
}

}

const cellCount = [];

function deleteRow(x) {
var rowCollection = document.getElementsByClassName('row');
  if ( x >= 0) {
    var table = document.getElementById("<%= grid.ClientID %>");
    console.log(table.rowIndex);
/*     var rowDel = rowCollection[x]; // Access the specific row by index 'x'
    console.log(rowDel);
    rowDel.parentNode.removeChild(rowDel); // Remove the specific row element */
  } else {
    console.log('Row index out of range or negative');
  }
}