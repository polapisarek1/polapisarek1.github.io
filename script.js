document.addEventListener("DOMContentLoaded", function() {
    let noClicks = 1;
    const maxNoClicks = 4;
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1;

    // ✅ Make sure all elements exist before running script
    const gifElement = document.getElementById("meholdingroses");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");

    if (!gifElement) {
        console.error("❌ Error: Image with ID 'meholdingroses' not found!");
        return;
    }

    if (!noButton) {
        console.error("❌ Error: Button with ID 'no-btn' not found!");
        return;
    }

    if (!yesButton) {
        console.error("❌ Error: Button with ID 'yes-btn' not found!");
        return;
    }

    // ✅ Image change logic
    const gifs = [
        "assets/images/mehappy.png",
        "assets/images/revysad.png",
        "assets/images/mesad.png",
        "assets/images/mesad.png"
    ];

    // ✅ Button messages
    const buttonMessages = [
        "You take that back",
        "I'm gonna beat you so hard",
        "Oi :(",
        "If you say yes there's sexy photos after"
    ];

    // ✅ No button click event
    noButton.addEventListener("click", () => {
        console.log("No button clicked!"); 

        if (noClicks < maxNoClicks) {
            console.log(`Changing image to: ${gifs[no
