document.addEventListener("DOMContentLoaded", function () {
    const userNameInput = document.getElementById("userName");
    const btnLogin = document.getElementById("btnlogin");
    const btnCancel = document.getElementById("btnCancel");
    const btnGiveUp = document.getElementById("btnCGiveUp");
    let elapsedTime;
    let timerUser;

    const quitButton = document.querySelector('#btnGiveUp');
    quitButton.addEventListener('click', quitButtonClickHandler);
    function quitButtonClickHandler() {
        quitButton.disabled = true;
        // Now it has been clicked make all correct selections
        quitAll();  // lives in merging.js
        return;
    }

    timerFlag = true;
    // get the best time, if there is one, else set it to 0
    // unless Sa for testing
    if (localStorage.getItem('bestTime') == null) {
        localStorage.setItem('bestTime', 0);
    }
    if (textValue = "Sa") {
        localStorage.setItem('bestTime', 59);
    }
    let bestTime = localStorage.getItem('bestTime');
    const dispText = document.getElementById("centreText")
    dispText.style.display = 'inline';
    dispText.innerHTML = "Your best time: " + bestTime + " secs";

    // To show the login popup
    const myLoginButton = document.querySelector('#btnBox');
    myLoginButton.addEventListener('click', myLoginButtonClickHandler);

    function myLoginButtonClickHandler() {
        myLoginButton.disabled = true;
        const myLogin = document.getElementById("form-popup");
        myLogin.style.display = 'block';
        userNameInput.focus();
    }

    btnLogin.addEventListener('click', function () {
        const enteredName = getCapitalizedText(userNameInput.value);
        submitPressed(enteredName);
    });

    btnCancel.addEventListener('click', closeForm);

    function submitPressed(textValue) {
        textValue = textValue[0].toUpperCase() + textValue.substring(1);
        const userNameList = ["Ahmed", "Alex", "Barbara", "Lily", "Nicki", "Rob", "Trish", "Vic", "Sa"];
        const notFound = !userNameList.includes(textValue);

        if (!notFound) {
            closeForm();

            // Start the countdown timer when the login button is clicked
            startCountDown(6, function () {
                // This function will be called when the count-down timer finishes
                // document.getElementById("countdownTimer").style.color = 'darkgray';
                startCountUp();
            });

        } else {
            displayMessage("Incorrect username entered. Please try again.");
            userNameInput.value = ""; // Clear the input field
        }
    }

    function closeForm() {
        document.getElementById("form-popup").style.display = "none";
    }

    function displayMessage(message) {
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("display-message");
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        // Remove the message after 3 seconds
        setTimeout(function () {
            errorDiv.remove();
        }, 5000);
    }
});

function pauseTime() {
    const errorDiv = document.createElement("div");
    document.body.appendChild(errorDiv);

    // Remove the error message after 5 seconds
    setTimeout(function () {
        errorDiv.remove();
    }, 5000);
}

function getCapitalizedText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

//Timer to countdown from (usually) 5 secs
function timer(timeToGo) {
    var sec = timeToGo;

    var timer = setInterval(function () {
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            return;
        }
        document.getElementById("centreText").innerHTML = "Seconds to go: " + sec;
    }, 1000);
}

/// Function to start the count-down timer
function startCountDown(durationInSeconds, callback) {
    let remainingTime = durationInSeconds;
    let countDownTimer = setInterval(function () {
        remainingTime--;
        document.getElementById("centreText").innerHTML = "Timer countdown: " + remainingTime;
        /*         if (remainingTime <= 5) {
                    document.getElementById("centreText").style.color = 'red';
                } */
        if (remainingTime <= 0) {
            clearInterval(countDownTimer); // Stop the count-down timer
            if (callback && typeof callback === 'function') {
                callback(); // Execute the callback function
            }
        }
    }, 1000);

}

// Function to start the count-up timer
function startCountUp() {
    let elapsedTime = 0;
    let countUpTimer = setInterval(function () {
        elapsedTime++;
        var hour = Math.floor(elapsedTime / 3600);
        var minute = Math.floor((elapsedTime - hour * 3600) / 60);
        var seconds = elapsedTime - (hour * 3600 + minute * 60);
        if (hour < 10)
            hour = "0" + hour;
        if (minute < 10)
            minute = "0" + minute;
        if (seconds < 10)
            seconds = "0" + seconds;
        if (stopTimer == true) {
            clearInterval(countUpTimer); // Stop the count-up timer 
            let oldTime = localStorage.getItem('bestTime');
            let newTime = elapsedTime;
            if (oldTime == 0) {
                localStorage.setItem('bestTime', newTime);
            } else if (newTime < oldTime) {
                localStorage.setItem('bestTime', newTime);
                animateBestTime();
            }
            return;
        }
        document.getElementById("centreText").innerHTML = "Elapsed time: " + hour + ":" + minute + ":" + seconds;

    }, 1000);
}
