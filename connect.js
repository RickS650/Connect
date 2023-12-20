// Array of words
const catsWords = [
  "fruits-Apple", "fruits-Banana", "fruits-Orange", "fruits-Grapefruit",
  "animals-Dog", "animals-Elephant", "animals-Cat", "animals-Lion",
  "objects-Car", "objects-Guitar", "objects-Hat", "objects-Pencil",
  "nature-Flower", "nature-Moon", "nature-Kite", "nature-Nest"
];
const longCat = ["Types of fruit", "Types of animals", "Types of objects", "Types of nature"]
const words = catsWords.map(item => item.split('-')[1]);

// Submit button functionality
const submitButton = document.querySelector("#submit");
submitButton.disabled = true;
submitButton.addEventListener('click', () => {
})

// Deselect button functionality
const deselectButton = document.querySelector("#deselect");
deselectButton.disabled = true;
deselectButton.addEventListener('click', () => {
})

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
gridContainer.className = 'grid';

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

// Set the CSS styles for the word elements
const wordElements = document.querySelectorAll('.word');
for (let i = 0; i < wordElements.length; i++) {
  wordElements[i].style.padding = '2px';
  wordElements[i].style.textAlign = 'center';
  wordElements[i].style.rowheight = '80px';
  wordElements[i].style.backgroundColor = 'cyan';
}

// Array to store the selected cells
const selectedCells = [];


// Function to toggle cell selection
function toggleSelection(event) {
  const selectedCell = event.target
  const selectedWord = selectedCell.innerText.trim();

  if (selectedCount >= 0 ) {
    deselectButton.disabled=false;
  } else {
    deselectButton.disabled=true;
  }

  let bgColor = selectedCell.style.backgroundColor;

  // Check if the cell is already selected
  //  if (!selectedCell.classList.contains('selected')) {
   if (selectedCell.style.backgroundColor === 'cyan' ) {
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

// Now selectedCells has all the words selected,
// check if selected cells match criteria

const whatCat=[];
const whatWord=[];

for (let i = 0; i < selectedCells.length; i++) {
    letCat = "", letWord="", letWhole="";
    var index = catsWords.findIndex(element => element.includes(selectedCells[i]))
    letWhole = catsWords[index];    // Store the whole cat/word

    letCat = letWhole.split('-')[0];   // Extract cat
    letWord = letWhole.split('-')[1];  // and word
    whatCat.push(letCat);           // push into array
    whatWord.push(letWord);

  }

  // Find the highest value
  whatCat.sort(function(a, b){
    return b.value - a.value;
  });
  Math.max.apply(null, whatCat)
  for (let i = 0; i < whatCat.length; i++) {
      console.log(whatCat[i]);
    }

  // Reset selection
  selectedCount = 0;
  selectedCells.forEach(cell => {
    cell.classList.remove('selected');
  });
  selectedCells.length = 0;
  submitButton.disabled;

  // Re-add click event listeners to word cells
  wordElements.forEach(cell => {
    if (!selectedCells.includes(cell)) {
      cell.addEventListener('click', toggleSelection);
    }
  });