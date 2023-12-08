'use strict';
 // Words for each category
 const words = {
    darkBlue: ["Word1", "Word2", "Word3", "Word4"],
    lightBlue: ["Word5", "Word6", "Word7", "Word8"],
    lightGreen: ["Word9", "Word10", "Word11", "Word12"],
    lightRed: ["Word13", "Word14", "Word15", "Word16"]
    };
    /* Categories */
   const cats= {
       cat1: ["cat1"],
       cat2: ["cat2"],
       cat3: ["cat3"],
       cat4: ["cat4"]
   };
    // Function to populate the grid with words
    function populateGrid() {
       const categories = Object.keys(words);
       categories.forEach(category => {
       const row = document.querySelector(`.${category}`);
       words[category].forEach(word => {
       const wordElement = document.createElement('div');
       wordElement.classList.add('word');
       wordElement.textContent = word;
       wordElement.dataset.category = category;
       wordElement.addEventListener('click', toggleSelection);
       row.appendChild(wordElement);
    });
    });
    }
   
    // Function to handle submit button click
    document.getElementById('submit').addEventListener('click', () => {
    // Logic to check selected words and update grids accordingly
    // Implement your logic here
    });
   
    // Call the function to populate the grid when the page loads
    populateGrid();
    const cells = document.querySelectorAll('.word'); // Select all cells

let selectedCount = 0;

function toggleSelection(event) {
 const selectedCell = event.target;

 // Check if the selected cell is not already grey
 if (selectedCell.style.backgroundColor !== 'grey') {
      selectedCell.style.backgroundColor = 'grey'; // Change the background color to grey
      selectedCount++;

 // Check if the required number of cells (4) is selected
 if (selectedCount === 4) {
 // Disable further selections or show a message
      cells.forEach(cell => {
      cell.removeEventListener('click', toggleSelection); // Remove event listener
});
 document.getElementById('submit').disabled = false; // Enable the Submit button
 }
 }
}

cells.forEach(cell => {
 cell.addEventListener('click', toggleSelection); // Add click event listener to each cell
});
    