let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1;

// Ensure script runs only after the page is fully loaded
window.onload = function() {
    const gifElement = document.getElementById("togepi-gif");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.querySelector(".btn-container");

    if (!gifElement || !noButton || !yesButton || !buttonContainer) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    const gifs = [
        "assets/images/meholdingroses.png",
        "assets/images/revysad.png",
        "assets/images/mesad.png"
    ];

    const buttonMessages = [
        "If you press yes there's sexy photos afterwards",
        "You better take that back",
        "OI! :(",
        "I'm gonna beat you so hard"
    ];

    noButton.addEventListener("click", () => {
        if (noClicks < maxNoClicks) {
            gifElement.src = gifs[Math.min(noClicks, gifs.length - 1)];
        }

        noButton.textContent = buttonMessages[noClicks % maxNoClicks];
        noButton.style.width = 'auto';
        noButton.style.width = `${noButton.scrollWidth}px`;

        if (n
