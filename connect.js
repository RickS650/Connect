// Array of words
const words = [
  "Apple", "Banana", "Orange", "Grapefruit",
  "Dog", "Elephant", "Cat", "Lion",
  "Car", "Guitar", "Hat", "Pencil",
  "Flower", "Moon", "Kite", "Nest"
];

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the words array
shuffleArray(words);

// Create a container element for the grid
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';

// Loop through the words array
for (let i = 0; i < words.length; i++) {
  // Create a div for each word
  const wordElement = document.createElement('div');
  wordElement.className = 'word';
  wordElement.textContent = words[i];

  // Add the word element to the grid container
  gridContainer.appendChild(wordElement);
}

// Display the grid container on the web page
document.body.appendChild(gridContainer);

// Set the CSS styles for the grid layout
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
gridContainer.style.gap = '5px';

// Set the CSS styles for the word elements
const wordElements = document.querySelectorAll('.word');
for (let i = 0; i < wordElements.length; i++) {
  wordElements[i].style.padding = '5px';
  wordElements[i].style.textAlign = 'center';
}

// Variable to keep track of the number of selected cells
let selectedCount = 0;

// Array to store the selected cells
const selectedCells = [];

// Function to toggle cell selection
function toggleSelection(event) {
  const selectedCell = event.target;
  console.log(selectedCount);
  // Check if the cell is already selected
  if (!selectedCell.classList.contains('selected')) {
    // Check if the maximum number of cells has been selected
    if (selectedCount < 4) {
      selectedCell.classList.add('selected');
      selectedCount++;
      selectedCells.push(selectedCell);
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
    // Enable the submit button
    submitButton.disabled = false;

    // Remove click event listeners from other cells
    wordElements.forEach(cell => {
      if (!selectedCells.includes(cell)) {
        cell.removeEventListener('click', toggleSelection);
      }
    });
  }
}

// Add click event listeners to the word cells
wordElements.forEach(cell => {
  cell.addEventListener('click', toggleSelection);
});

// Submit button functionality
const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', () => {
  // Do something with the selected cells
  console.log(selectedCells.map(cell => cell.textContent));

  // Reset selection
  selectedCount = 0;
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
  selectedCells.length = 0;
  submitButton.disabled = true;

  // Re-add click event listeners to word cells
  wordElements.forEach(cell => {
    if (!selectedCells.includes(cell)) {
      cell.addEventListener('click', toggleSelection);
    }
  });
});