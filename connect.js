var completedRows = 0;
var fullCat = "";
var mergeRow = 0;
const whatCat=[];
const whatWord=[];

/* var vv = document.documentElement.clientWidth;
console.log(grid.width); */

const catsWords = [
  "fruits-Apple", "fruits-Banana", "fruits-Orange", "fruits-Grapefruit",
  "animals-Dog", "animals-Elephant", "animals-Cat", "animals-Lion",
  "objects-Car", "objects-Guitar", "objects-Hat", "objects-Pencil",
  "nature-Flower", "nature-Moon", "nature-Kite", "nature-Nest"
];
const longCat = ["Types of fruit", "Types of animals", "Types of objects", "Types of nature"]
const words = catsWords.map(item => item.split('-')[1]);
const shortCat=[];

shortCat[0] =catsWords[0].split('-')[0];
shortCat[1] =catsWords[4].split('-')[0];
shortCat[2] =catsWords[8].split('-')[0];
shortCat[3] =catsWords[12].split('-')[0];

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
var grid = document.getElementById("gridID");

for (let i = 0; i < words.length; i++) {
    var cell = document.getElementById("cell"+i);
    cell.textContent = words[i];  
}

const wordElements = document.querySelectorAll('.cell');
// Add click event listeners to the cells
wordElements.forEach(cell => {
  cell.addEventListener('click', toggleSelection);
});

const selectedCells = []; 
let selectedCount = 0;

// Function to toggle cell selection
function toggleSelection(event) {
  const selectedCell = event.target
  const selectedWord = selectedCell.innerText.trim();

 // Get the background color of the selected cell
 const computedStyle = window.getComputedStyle(selectedCell);
 const bgColor = computedStyle.getPropertyValue('background-color');

 let cyanColor = "rgb(0, 255, 255)";
 let blueColor = "rgb(0, 0, 255)";

  if (selectedCount >= 0 ) {
    deselectButton.disabled=false;
  } else {
    deselectButton.disabled=true;
  }
    // Check if the cell is already selected
  if (bgColor === cyanColor) {
    // Check if the maximum number of cells has been selected
    if (selectedCount < 4 ); {
      selectedCells.push(selectedWord);
      selectedCount++;
      selectedCell.style.backgroundColor = 'blue';
    }
  } else {
      // Deselect the cell
      selectedCell.classList.remove('selected');
      selectedCount--;
      selectedCells.splice(selectedCells.indexOf(selectedCell), 1);
      selectedCell.style.backgroundColor = 'cyan';     
  }

  // Check if the maximum number of cells has been selected
  if (selectedCount === 4) {
    submitButton.disabled = false;
  }

  if (submitButtonClicked) {
    // Remove click event listeners from other cells
    wordElements.forEach(cell => {
      if (!selectedCells.includes(cell)) {
          cell.removeEventListener('click', toggleSelection);
      }
    });
  }
}

var submitButtonClicked = false;

 // Add click event listeners to the word cells
 wordElements.forEach(cell => {
  cell.addEventListener('click', toggleSelection);
  });

// Now selectedCells has all the words selected, check if selected cells match criteria
function findCats(array){
  let a = 0, b = 0, c = 0, d = 0;

  for (let i = 0; i < array.length; i++) {

    letCat = "", letWord="", letWhole="";
    var index = catsWords.findIndex(element => element.includes(selectedCells[i]))
    letWhole = catsWords[index];    // Store the whole cat/word
    letCat = letWhole.split('-')[0];   // Extract cat ....

    switch (letCat) {
      case (letCat = shortCat[0]):
        a++;
        break;
      case (letcat = shortCat[1]):
        b++
        break;
      case (letCat = shortCat[2]):
        c++;
        break;
      case (letCat = shortCat[3]):
        d++;
        break;
    }

    letWord = letWhole.split('-')[1];  // ... and word
    whatCat.push(letCat);           // push into array
    whatWord.push(letWord);
  }

  if ((a = 4) || (b = 4) || (c = 4) || (d = 4)); {;

    if (a = 4) { ;
      fullCat =  longCat[0];
    } else if (b = 4){;
      fullCat = longCat[1];
    } else if (c = 4){ ;
      fullCat = longCat[2];
    } else if (d = 4){;
      fullCat = longCat[3];
    }
  }

  fullCat = fullCat + " - " + whatWord[0] + ", " + whatWord[1] + ", " + whatWord[2] + ", " + whatWord[3];
  MergeCellsInRow(mergeRow);

}  

function resetAll() {;
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
      cell.addEventListener('click', toggleSelection)}
  });
}

/* function RemoveRow(item) {
  var table = document.getElementById("<%= grid.ClientID %>");
  console.log(table.rowIndex);
  table.deleteRow(item.parentNode.parentNode.rowIndex);
  return false;
}
 */

/* document.addEventListener('DOMContentLoaded', function() {
  // Your code that manipulates the DOM goes here
  mergeCellsInRow(); // Call the function that operates on DOM elements
});

function mergeCellsInRow(rowToMerge) {
  const rows = document.querySelectorAll('.row');
  const cellsToMerge = rows[rowToMerge].querySelectorAll('.cell'); // Change index as needed

  // Remove existing cells in the row
  cellsToMerge.forEach(cell => {
    cell.remove();
  });

  // Create a new merged cell
  const newRow = document.createElement('div');
  newRow.classList.add('row');

  const mergedCell = document.createElement('div');
  mergedCell.classList.add('cell', 'merged-cell');
  mergedCell.textContent = longCat;

  newRow.appendChild(mergedCell);

  // Insert the new row with the merged cell
  const grid = document.querySelector('.grid');
  grid.insertBefore(newRow, rows[rowToMerge+1]); 
  mergeRow ++;
} */