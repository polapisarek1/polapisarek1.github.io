document.addEventListener("DOMContentLoaded", function() {
    let noClicks = 1;
    const maxNoClicks = 4;
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1; // This now tracks the scaling factor directly
    const gifElement = document.getElementById("meholdingroses");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.querySelector(".btn-container");
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    if (!gifElement) {
        console.error("Error: Image with ID 'meholdingroses' not found!");
    }

    // array of gifs - in order
    const gifs = [
        "assets/images/mehappy.png",
        "assets/images/revysad.png",
        "assets/images/mesad.png",
        "assets/images/mesad.png"
    ];

    // array of messages
    const buttonMessages = [
        "You take that back",
        "I'm gonna beat you so hard",
        "Oi :(",
        "If you say yes there's sexy photos after"
    ];

    if (!noButton) {
        console.error("Warning: No button not found, check HTML!");
    }

    // no button clicked
    noButton.addEventListener("click", () => {
        console.log("No button clicked!"); // ✅ Log when the button is clicked

        if (noClicks < maxNoClicks) {
            console.log(`Changing image to: ${gifs[noClicks]}`); // ✅ Log the new image path
            gifElement.src = gifs[noClicks];
        }

        // Change No button text
        noButton.textContent = buttonMessages[noClicks % maxNoClicks];

        // Adjust No button width
        noButton.style.width = 'auto';
        noButton.style.width = `${noButton.scrollWidth}px`;

        // Shrink No button
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Increment No clicks count
        noClicks++;
    });
});
