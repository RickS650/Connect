// Array of categories and their corresponding words
const categories = [
  { name: 'fruits', words: ['apple', 'banana', 'orange', 'grapefruit'] },
  { name: 'animals', words: ['dog', 'elephant', 'cat', 'lion'] },
  { name: 'objects', words: ['car', 'guitar', 'hat', 'pencil'] },
  { name: 'nature', words: ['flower', 'moon', 'kite', 'nest'] }
];

// Function to shuffle the words array
const shuffleWords = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Array to store shuffled words
const shuffledWords = [];

// Loop through the categories array
for (let i = 0; i < categories.length; i++) {
  // Shuffle the words within each category
  const shuffledCategoryWords = [...categories[i].words];
  shuffleWords(shuffledCategoryWords);

  // Push the shuffled words into the shuffledWords array
  shuffledWords.push(...shuffledCategoryWords);
}

// Shuffle the words again
shuffleWords(shuffledWords);

// Create a container element for the grid
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';

// Loop through the shuffled words array
for (let i = 0; i < shuffledWords.length; i++) {
  // Create a div for each word
  const wordElement = document.createElement('div');
  wordElement.className = 'word';
  wordElement.textContent = shuffledWords[i];
  
  // Add the word element to the grid container
  gridContainer.appendChild(wordElement);
}

// Display the grid container on the web page
document.body.appendChild(gridContainer);

// Set the CSS styles for the grid layout
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
gridContainer.style.gap = '10px';

// Set the CSS styles for the word elements
const wordElements = document.querySelectorAll('.word');
for (let i = 0; i < wordElements.length; i++) {
  wordElements[i].style.border = '1px solid black';
  wordElements[i].style.padding = '10px';
  wordElements[i].style.textAlign = 'center';
}
// Variable to keep track of the number of selected cells
let selectedCount = 0;

// Array to store the selected cells
const selectedCells = [];

document.addEventListener('DOMContentLoaded', addCellListeners);

function addCellListeners() {
  // Get all the cells in the document
  const cells = document.getElementsByClassName('cell');

  // Add a click event listener to each cell
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', toggleSelection);
  }
}

function toggleSelection(event) {
  const selectedCell = event.target;

  // Check if the cell is already selected
  if (selectedCell.style.backgroundColor !== 'blue') {
    // Check if the maximum number of cells has been selected
    if (selectedCount < 4) {
      selectedCell.style.backgroundColor = 'blue';
      selectedCount++;
      selectedCells.push(selectedCell);
    }
  } else {
    // Deselect the cell
    selectedCell.style.backgroundColor = 'cyan';
    selectedCount--;
    selectedCells.splice(selectedCells.indexOf(selectedCell), 1);
  }

  // Check if the maximum number of cells has been selected
  if (selectedCount === 4) {
    // Disable the submit button
    submitButton.disabled = false;

    // Remove click event listeners from other cells
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      if (!selectedCells.includes(cells[i])) {
        cells[i].removeEventListener('click', toggleSelection);
      }
    }
  }
}

   
   
   document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.word');
    const submitButton = document.getElementById('submit');
   

        let selectedCount = 0;
    
        cells.forEach(cell => {
        cell.addEventListener('click', toggleSelection);
        
    });  
    
    submitButton.addEventListener('click', () => {
    // Handle submission logic
    });
   });