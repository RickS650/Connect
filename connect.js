let completedRows = 0, mergeRow = 0;
let fullCat = "";
let whatCat = [], whatWord = [];
let cyanColor = "rgb(0, 255, 255)", blueColor = "rgb(0, 0, 255)", lightRedColor = "rgb( (255,114,118)";
let noOfAttempts = 4;
let specialCase = false;
let timerFlag = false;
let stopTimer = false;
let date = new Date();
let options = { year: 'numeric', month: 'short', day: 'numeric' };
let displayDate = date.toLocaleDateString('en-GB', options);
const existingContent = displayDate + " ver 1.1.0";

// displays best time and timers
if (timerFlag == true) {
  // get the best time, if there is one, else set it to 0
  if (localStorage.getItem('bestTime') == null) {
    localStorage.setItem('bestTime', 0);
  }
  let bestTime = localStorage.getItem('bestTime');
  const dispText = document.getElementById("centreText")
  dispText.style.display = 'inline';
  dispText.innerHTML = "Your best time: " + bestTime + " secs";
}

// function to tell user 3 right
threeRight("off");

// Title
document.getElementById('header').innerHTML = "Connect with Rick    " + existingContent;

//load the words
const catsWords = [
  "LONDON UNDERGROUND LINES-DISTRICT", "LONDON UNDERGROUND LINES-VICTORIA", "LONDON UNDERGROUND LINES-METROPOLITAN", "LONDON UNDERGROUND LINES-BAKERLOO",
  "SHAPES-CIRCLE", "SHAPES-HEXAGON", "SHAPES-SQUARE", "SHAPES-TRIANGLE",
  "ROALD DAHL CHARACTERS-SOPHIE", "ROALD DAHL CHARACTERS-VERUCA", "ROALD DAHL CHARACTERS-Mrs TWIT", "ROALD DAHL CHARACTERS-VIOLET",
  "BRITISH QUEENS-ELIZABETH", "BRITISH QUEENS-ELEANOR", "BRITISH QUEENS-ANNE", "BRITISH QUEENS-MATILDA"
];
let longCat = ["LONDON UNDERGROUND LINES ....", "SHAPES", "ROALD DAHL CHARACTERS.", "BRITISH QUEENS"]

const words = catsWords.map(item => item.split('-')[1]);
let shortCat = [];
const failWords = catsWords.map(item => item.split('-')[1]);  //used for when user has 5 failures

shortCat[0] = catsWords[0].split('-')[0];
shortCat[1] = catsWords[4].split('-')[0];
shortCat[2] = catsWords[8].split('-')[0];
shortCat[3] = catsWords[12].split('-')[0];

// Submit button functionality
const submitButton = document.querySelector("#submit");
submitButton.disabled = true;
submitButton.addEventListener('click', submitButtonClickHandler);

// Deselect button functionality
const deselectButton = document.querySelector("#deselect");
deselectButton.disabled = true;
deselectButton.addEventListener('click', deselectButtonClickHandler);

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the words array
shuffleArray(words);

// The container element for the grid
let grid = document.getElementById("gridID");
const gridWidth = grid.clientWidth;

for (let i = 0; i < words.length; i++) {
  let cell = document.getElementById("cell" + i);
  cell.textContent = words[i];
}

const wordElements = document.querySelectorAll('.cell');
// Add click event listeners to the cells
wordElements.forEach(cell => {
  cell.addEventListener('click', toggleSelection);
});

let selectedCells = [];
let selectedCount = 0;

// Function to toggle cell selection
function toggleSelection(event) {
  const selectedCell = event.target
  const selectedWord = selectedCell.innerText.trim();
  // Don't allow more than 4 selections (count starts at 0)
  if (selectedCount > 3) {
    return;
  }

  // Get the background color of the selected cell
  const computedStyle = window.getComputedStyle(selectedCell);
  const bgColor = computedStyle.getPropertyValue('background-color');

  if (selectedCount >= 0) {
    deselectButton.disabled = false;
  } else {
    deselectButton.disabled = true;
  }

  // Check if the cell is already selected

  if (bgColor == cyanColor) {
    // Check if the maximum number of cells has been selected
    if (selectedCount <= 3); {
      selectedCells.push(selectedWord);
      selectedCell.style.backgroundColor = 'blue';
      selectedCell.style.color = 'white';
      selectedCount++;
    }
  } else {
    // Deselect the cell
    selectedCell.classList.remove('selected');
    selectedCells.splice(selectedCells.indexOf(selectedCell), 1);
    selectedCell.style.backgroundColor = 'cyan';
    selectedCell.style.color = 'darkslategrey';
    selectedCount--;
  }
  // Check if the maximum number of cells has been selected
  // has to be 4, not 3,  because incremented earlier
  if (selectedCount == 4) {
    submitButton.disabled = false;
    // selectedCount = 0;
  }

}

submitButtonClicked = false;

// Add click event listeners to the word cells
wordElements.forEach(cell => {
  cell.addEventListener('click', toggleSelection);
});

// Now selectedCells has all the words selected, check if selected cells match criteria
function findCats(array) {
  let a = 0, b = 0, c = 0, d = 0;
  whatCat = [], whatWord = [];
  letCat = "", letWord = "", letWhole = ""
  let normalPart = '';

  for (let i = 0; i < array.length; i++) {
    let index = catsWords.findIndex(element => element.includes(selectedCells[i]))
    letWhole = catsWords[index];    // Store the whole cat/word
    letCat = letWhole.split('-')[0];   // Extract cat ....
    letWord = letWhole.split('-')[1];  // ... and word
    whatCat.push(letCat);           // push into array
    whatWord.push(letWord);

    if (i == 0) {
      normalPart = whatWord[i];
    }
    else {
      normalPart = normalPart + ", " + whatWord[i];
    }


    switch (letCat) {
      case (letCat = shortCat[0]):
        a++;
        break;
      case (letcat = shortCat[1]):
        //a=0;
        b++
        break;
      case (letCat = shortCat[2]):
        //a=0, b=0;
        c++;
        break;
      case (letCat = shortCat[3]):
        //a=0,b=0,c=0;
        d++;
        break;
    }
  }
  if ((a == 4) || (b == 4) || (c == 4) || (d == 4)) {
    if (a == 4) {
      ;
      fullCat = longCat[0];
      a = 0
    } else if (b == 4) {
      ;
      fullCat = longCat[1];
      b = 0
    } else if (c == 4) {
      ;
      fullCat = longCat[2];
      c = 0
    } else if (d == 4) {
      ;
      fullCat = longCat[3];
      d = 0
    }
    selectedCells = [];

  } else if ((a == 3) || (b == 3) || (c == 3) || (d == 3)) {
    // Turn message on ...
    threeRight("on");
    // .. remove a button
    if (noOfAttempts > 0) {
      let x = document.getElementById("button" + noOfAttempts);
      x.style.display = "none";
      // Decrement attempts
      noOfAttempts--;
    }
    // Add click event listeners to the cells
    wordElements.forEach(cell => {
      cell.addEventListener('click', toggleSelection);
    });
    selectedCells = [];
    return;
  } else {
    wordElements.forEach(cell => {
      cell.addEventListener('click', toggleSelection);
    });
    threeRight('off');
    if (noOfAttempts > 0) {
      let x = document.getElementById("button" + noOfAttempts);
      x.style.display = "none";
      noOfAttempts--;
      selectedCells = [];
    } else {
      specialCase = true;
      MergeCellsInRow(0);
    }
    return;
  }

  let boldPart = fullCat;

  // normalPart ="\n" + whatWord[i] + ", " + whatWord[i + 1] + ", " + whatWord[i + 2] + ", " + whatWord[i + 3];
  // fullCat= '<strong>${boldPart}</strong> ${normalPart}';
  // spanCell.innerHTML = 'cat<br>dog';

  fullCat = boldPart + '<br>' + normalPart;

  //Empty selectconst selectedCells = []; 
  selectedCount = 0;
  //selectedCells = []; 
  MergeCellsInRow(mergeRow);

}

function resetAll() {
  ;
  // Reset selection
  selectedCount = 0;
  for (let i = 0; i < selectedCells.length; i++) {
    //(i,selectedCells[i]);
  }
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
  selectedCells.length = 0;
  submitButton.disabled = true;

  // Re-add click event listeners to word cells
  wordElements.forEach(cell => {
    if (!selectedCells.includes(cell)) {
      cell.addEventListener('click', toggleSelection)
    }
  });
}

function threeRight(onOff) {
  let x = document.getElementById("threeGoes");

  if (onOff == "on") {
    x.style.display = "block";
    setTimeout(() => {
      x.style.display = "none"
    }, 1500);
  } else {
    x.style.display = "none";
  }
}