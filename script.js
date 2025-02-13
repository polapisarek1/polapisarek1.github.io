let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; // This now tracks the scaling factor directly
const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// array of gifs - updated order
const gifs = ["assets/images/meholdingroses.png", "assets/images/revysad.png", "assets/images/mesad.png"];

// array of messages
const buttonMessages = [
    "If you press yes there's sexy photos afterwards",
    "You better take that back",
    "OI! :(",
    "I'm gonna beat you so hard"
];

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[Math.min(noClicks, gifs.length - 1)];
    }

    // change no button text
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Calculate the scaled width of the yesButton
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    // Check if the scaled width is less than the max width
    if (scaledWidth < maxYesWidth) {
        yesScale += 0.5;
        yesButton.style.transform = `scale(${yesScale})`;
    }

    // increment the number of clicks
    noClicks++;
});


    // increment the number of clicks
    noClicks++;
});
