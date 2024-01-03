// Assuming you want to merge cells
function MergeCellsInRow(rowToMerge) {
    const rows = document.querySelectorAll('.row');
    const cellsToMerge = rows[rowToMerge].querySelectorAll('.cell');
    let cellX = 1;
    var spanCell = document.getElementById("cell0");

    switch (rowToMerge) {
      case 0:
        var mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++;
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        spanCell.style.backgroundColor='lightyellow';
        xNum = 4;
        spanCell.removeEventListener('click', toggleSelection);
        break;
      case 1:
        cellX = 5;
        spanCell = document.getElementById("cell4");
        var mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++;
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        spanCell.style.backgroundColor="pink";
        spanCell.removeEventListener('click', toggleSelection);
        xNum = 8;
        break;
      case 2:
        cellX = 9;
        spanCell = document.getElementById("cell8");
        var mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++;
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        spanCell.style.backgroundColor='purple';
        xNum = 12;
        spanCell.removeEventListener('click', toggleSelection);
        break;
      case 3:
        cellX = 13;
        spanCell = document.getElementById("cell8");
        var mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++;
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        cellX++
        mergedCell = document.getElementById("cell"+cellX);
        mergedCell.remove();
        spanCell.style.backgroundColor='green';
        xNum = 16;
        spanCell.removeEventListener('click', toggleSelection);
        break;
    }

    // Unable to get span to work
    //const spanCell = document.getElementById("cell0");
    //spanCell.classList.add("col-span");
    spanCell.style.columnSpan='3'; 
    spanCell.style.width='700px'; // so did this instead
    spanCell.textContent = fullCat;

    mergeRow ++;
    wordElements.forEach(cell => {
      cell.addEventListener('click', toggleSelection);
    });
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
  for (let i = 0; i < words.length; i++) {
    var cell = document.getElementById("cell"+startNumber);
    startNumber++;
    cell.textContent = words[i];  
    cell.style.backgroundColor = 'cyan';     
  }
/*   submitButton.disabled = true;
  deselectButton.disabled = true; */
}
 

//const selectedCells = []; 
//let selectedCount = 0;
//const cellCount = [];