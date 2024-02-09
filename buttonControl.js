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

document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("btnlogin");
  btnLogin.addEventListener('click', btnLoginClickHandler);

  function btnLoginClickHandler(event) {
    event.preventDefault();

    const userNameInput = document.getElementById("userName");
    const enteredName = userNameInput.value;
    const userNameList = ["Ahmed", "Alex", "Barbara", "Lily", "Nicki", "Rob", "Rick", "Trish", "Vic"];
    const notFound = !userNameList.includes(enteredName);

    if (!notFound) {
      console.log(enteredName + " is found in the list.");
      // Here you can perform actions for a successful login
    } else {
      console.log(enteredName + " is not found in the list.");
      displayErrorMessage("Incorrect username entered. Please try again.");
      userNameInput.value = ""; // Clear the input field
    }
  }

  function displayErrorMessage(message) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);

    // Remove the error message after 3 seconds
    setTimeout(function () {
      errorDiv.remove();
    }, 3000);
  }
});

// Attach the closeForm function to the cancel button
const btnCancel = document.querySelector(".btnCancel");
btnCancel.addEventListener('click', closeForm);

// Function to close the form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitButtonClickHandler() {
  submitButtonClicked = true;
  submitButton.disabled = true;

  if (submitButtonClicked) {
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

  }
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