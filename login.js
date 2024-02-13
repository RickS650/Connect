document.addEventListener("DOMContentLoaded", function () {
    const userNameInput = document.getElementById("userName");
    const btnLogin = document.getElementById("btnlogin");
    const btnCancel = document.getElementById("btnCancel");

    btnLogin.addEventListener('click', function () {
        const enteredName = getCapitalizedText(userNameInput.value);
        submitPressed(enteredName);
    });

    btnCancel.addEventListener('click', closeForm);

    function submitPressed(textValue) {
        textValue = textValue[0].toUpperCase() + textValue.substring(1);
        console.log("Entered Name:", textValue);

        const userNameList = ["Ahmed", "Alex", "Barbara", "Lily", "Nicki", "Rob", "Trish", "Vic", "Sa"];
        const notFound = !userNameList.includes(textValue);

        if (!notFound) {
            alert("Welcome " + textValue + ".");
            closeForm();
        } else {
            console.log(textValue + " is not found in the list.");
            displayErrorMessage("Incorrect username entered. Please try again.");
            userNameInput.value = ""; // Clear the input field
        }
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
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

function getCapitalizedText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
