let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1;

window.onload = function() {
    const gifElement = document.getElementById("togepi-gif");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.querySelector(".btn-container");
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    if (!gifElement || !noButton || !yesButton || !buttonContainer) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

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

        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        const baseWidth = parseFloat(yesButtonStyle.width);
        const scaledWidth = baseWidth * yesScale;

        if (scaledWidth < maxYesWidth) {
            yesScale += 0.5;
            yesButton.style.transform = `scale(${yesScale})`;
        }

        noClicks++;
    });
};
