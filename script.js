// script.js

// Function to display welcome message
function welcomeMessage() {
    alert("Welcome to Dollar Coin!");
}

// Function to display current date and time on the page
function displayDate() {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    dateElement.innerText = `Today's Date: ${currentDate.toDateString()}`;
}

// Event listener for button click
document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById("welcome-button");
    if (welcomeButton) {
        welcomeButton.addEventListener("click", welcomeMessage);
    }

    // Call displayDate function when the page loads
    displayDate();
});
