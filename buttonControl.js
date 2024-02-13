

function threeRight(onOff) {
  var x = document.getElementById("threeGoes");

  if (onOff == "on") {
    x.style.display = "block";
    setTimeout(() => {
      document.querySelector('threeGoes').remove();
    }, 1500);
  } else {
    x.style.display = "none";
  }
}

/* // Deselect button functionality
const deselectButton = document.querySelector("#deselect");
deselectButton.disabled = true;
deselectButton.addEventListener('click', deselectButtonClickHandler);

// Submit button functionality
const submitButton = document.querySelector("#submit");
submitButton.disabled = true;
submitButton.addEventListener('click', submitButtonClickHandler); */

function submitButtonClickHandler() {
  // submitButtonClicked = true;
  submitButton.disabled = true;

  // if (submitButton.disabled) {
    // Remove click event listeners from other cells
    wordElements.forEach(cell => {
      if (!selectedCells.includes(cell)) {
        cell.removeEventListener('click', toggleSelection);
      }
    })

    // Now selectedCells has all the words selected,
    // check if selected cells match criteria

    const whatCat = [];
    const whatWord = [];
    var letCat = "";
    var letWord = "";
    var letWhole = "";

    for (let i = 0; i < selectedCells.length; i++) {
      letCat = "", letWord = "", letWhole = "";
      var index = catsWords.findIndex(element => element.includes(selectedCells[i]))
      letWhole = catsWords[index];    // Store the whole cat/word

      letCat = letWhole.split('-')[0];   // Extract cat
      letWord = letWhole.split('-')[1];  // and word
      whatCat.push(letCat);           // push into array
      whatWord.push(letWord);
    }

    // Find the highest value
    whatCat.sort(function (a, b) {
      return b.valueOf - a.valueOf;
    });

    Math.max.apply(null, whatCat)
    findCats(selectedCells);

  // }
}

function deselectButtonClickHandler() {
  // Check if the cell is already selected
  const wordElements = document.querySelectorAll('.cell');
  for (let i = 0; i < wordElements.length; i++) {
    if (wordElements[i].style.backgroundColor = 'blue') {
      wordElements[i].style.backgroundColor = 'cyan';
    }
  }
  selectedCount = 0;
  deselectButton.disabled = true;
  submitButton.disabled = true;
}

function failure() {
  const wordElements = document.querySelectorAll('.cell');
  for (let i = 0; i < wordElements.length; i++) {
    if (wordElements[i].style.backgroundColor = 'blue') {
      wordElements[i].style.backgroundColor = 'cyan';
    }
  }
  deselectButton.disabled = true;
  submitButton.disabled = true;
  specialCase = true
  for (let i = 0; i < 4; i++) {
    MergeCellsInRow(i);
  }

}