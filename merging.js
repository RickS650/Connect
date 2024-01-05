// Assuming you want to merge cells
function MergeCellsInRow(rowToMerge) {

  const rows = document.querySelectorAll('.row');
  var spanCell = document.getElementById("cell0");
  var mergedCell = document.getElementById("cell1");

  switch (rowToMerge) {
    case 0:
      for (let i = 1; i <= 3; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell.style.backgroundColor = 'lightyellow';
      break;
    case 1:
      for (let i = 5; i <= 7; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell = document.getElementById("cell4");
      spanCell.style.backgroundColor = "pink";
      break;
    case 2:
      for (let i = 9; i <= 11; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell = document.getElementById("cell8");
      spanCell.style.backgroundColor = 'purple';
      //xNum = 12;
      break;
    case 3:
      for (let i = 13; i <= 15; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell = document.getElementById("cell12");
      spanCell.style.backgroundColor = 'green';
      //xNum = 16;
      break;
  }

  spanCell.removeEventListener('click', toggleSelection);
  // Unable to get span to work
  //const spanCell = document.getElementById("cell0");
  //spanCell.classList.add("col-span");
  spanCell.style.columnSpan = '3';
  spanCell.style.width = '700px'; // so did this instead

  if (specialCase = false) {;
    spanCell.textContent = fullCat;
    mergeRow++;
  } else {
    // Load fulllCat
    let longWords = "";
    let x = 0, y = 0;
    switch (mergeRow) {
      case 0:
        x = 0, y = 4;
        break;
      case 1:
        x = 4, y = 8;
        break;
      case 2:
        x = 8, y = 12;
        break;
      case 3:
        // Deselect all
        const wordElements = document.querySelectorAll('.cell');
        for (let i = 0; i < wordElements.length; i++) {
          if (wordElements[i].style.backgroundColor = 'blue') {
            wordElements[i].style.backgroundColor = 'cyan';
          }
        }
        deselectButton.disabled = true;
        x = 12, y = 16;
        break;
    }
    fullCat = fullCat[mergeRow] + " - " + whatWord[x] + ", " + whatWord[x + 1] + ", " + whatWord[x + 2] + ", " + whatWord[x + 3];
    spanCell.textContent = fullCat;
    return;
  }

  reFormat(mergeRow * 4);

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
    var cell = document.getElementById("cell" + startNumber);
    startNumber++;
    cell.textContent = words[i];
    cell.style.backgroundColor = 'cyan';
    cell.addEventListener('click', toggleSelection);
  }
  submitButton.disabled = true;
  deselectButton.disabled = true;
}

//const selectedCells = [];
//let selectedCount = 0;
//const cellCount = [];