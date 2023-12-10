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
       //row.appendChild(wordElement);//
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



let selectedCount = 0;

function toggleSelection(event) {
    const selectedCell = event.target;
   
    if (selectedCell.style.backgroundColor !== 'blue') {
       // console.log('Cell clicked');//
        selectedCell.style.backgroundColor = 'blue';
        selectedCount++;

    } else {
    if (selectedCell.style.backgroundColor == 'blue') {
             selectedCell.style.backgroundColor = 'cyan';
             selectedCount--;    
    }
    if (selectedCount === 4) {
        console.log('Four cells selected');
        cells.forEach(cell => {
        cell.removeEventListener('click', toggleSelection);
    });
    submitButton.disabled = false;
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