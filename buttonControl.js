function submitButtonClickHandler() {
    submitButtonClicked = true; 
  
  
    if (submitButtonClicked) {
      // Remove click event listeners from other cells
      wordElements.forEach(cell => {
        if (!selectedCells.includes(cell)) {
            cell.removeEventListener('click', toggleSelection);
        }})
  
        // Now selectedCells has all the words selected,
        // check if selected cells match criteria
  
      const whatCat=[];
      const whatWord=[];
      var letCat = "";
      var letWord = "";
      var letWhole = "";

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
        return b.valueOf - a.valueOf;
      });

      Math.max.apply(null, whatCat)
      findCats(selectedCells);

  }}
  
function deselectButtonClickHandler() {
      // Check if the cell is already selected
      const wordElements = document.querySelectorAll('.word');
      for (let i = 0; i < wordElements.length; i++) {
        wordElements[i].style.backgroundColor = 'cyan';
      }
  }