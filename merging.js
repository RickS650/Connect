// Assuming you want to merge cell

function MergeCellsInRow(rowToMerge) {
  const rows = document.querySelectorAll('.row');
  var spanCell = document.getElementById("cell0");
  var mergedCell = document.getElementById("cell1");
  var cellWidth = "700px";

  if (specialCase == true) {

    var x = document.getElementById("button1");
    x.style.display = "none";
    fail2Win();
    return;
  }
  for (let i = 0; i < wordElements.length; i++) {
    if (wordElements[i].style.backgroundColor = 'blue') {
      wordElements[i].style.backgroundColor = 'cyan';
    }
  }
  switch (rowToMerge) {
    case 0:
      for (let i = 1; i <= 3; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell = document.getElementById("cell0");
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
      break;
    case 3:
      for (let i = 13; i <= 15; i++) {
        mergedCell = document.getElementById("cell" + i);
        mergedCell.remove();
      }
      spanCell = document.getElementById("cell12");
      spanCell.style.backgroundColor = 'green';
      break;
  }

  if (specialCase == false) {
    spanCell.removeEventListener('click', toggleSelection);
    // Unable to get span to work
    //const spanCell = document.getElementById("cell0");
    //spanCell.classList.add("col-span");   
    spanCell.style.columnSpan = '3';
    spanCell.style.width = cellWidth; // so did this instead
    spanCell.textContent = fullCat;

    // Set the new height of the row
/*     const currentHeight = spanCell.clientHeight;
    const newHeight = currentHeight * 1.2;
    spanCell.style.height = newHeight + 'px';
    spanCell.style.whiteSpace = "pre"; */

    mergeRow++;

    deselectButton.disabled = true;

    reFormat(mergeRow * 4);
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
    var cell = document.getElementById("cell" + startNumber);
    startNumber++;
    cell.textContent = words[i];
    cell.style.backgroundColor = 'cyan';
    cell.addEventListener('click', toggleSelection);
  }
  submitButton.disabled = true;
  deselectButton.disabled = true;
}

// This function is used if the user has used up all lives.
function fail2Win() {
  const rows = document.querySelectorAll('.row');
  var spanCell = document.getElementById("cell0");
  var mergedCell = document.getElementById("cell1");

  deselectButton.disabled = true;
  // Remove eventListener for all cells
  for (j = 0; j < 16; j++) {
    spanCell = document.getElementById("cell" + j);
    spanCell.removeEventListener('click', toggleSelection);
    if (wordElements[j].style.backgroundColor = 'blue') {
      wordElements[j].style.backgroundColor = 'cyan';
    }
  }
  // Go round the loop for each row
  for (j = 0; j < 4; j++) {
    switch (j) {
      case 0:
        for (let i = 1; i <= 3; i++) {
          mergedCell = document.getElementById("cell" + i);
          mergedCell.remove();
        }
        spanCell = document.getElementById("cell0");
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
        break;
      case 3:
        for (let i = 13; i <= 15; i++) {
          mergedCell = document.getElementById("cell" + i);
          mergedCell.remove();
        }
        spanCell = document.getElementById("cell12");
        spanCell.style.backgroundColor = 'green';
        break;
    }
    fullCat = longCat[j] + "\n" + failWords[j] + ", " + failWords[j + 1] + ", " + failWords[j + 2] + ", " + failWords[j + 3];
    spanCell.style.columnSpan = '3';
    spanCell.style.width = '700px';
    spanCell.textContent = fullCat;
  }

}