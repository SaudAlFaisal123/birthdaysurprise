document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const bgMusic = document.getElementById("background-music");
    bgMusic.volume = 1;
    bgMusic.play().catch(error => {
        console.warn("Autoplay prevented by browser. User interaction may be required.");
    });
});


let candlesLeft = 5;

function extinguishCandle(candle) {
    if (!candle.classList.contains("extinguished")) {
        candle.classList.add("extinguished");
        candlesLeft--;

        // Trigger confetti effect when a candle is clicked
        triggerConfetti(candle);

        if (candlesLeft === 0) {
            setTimeout(showMessage, 800); // Show message after a short delay
        }
    }
}

// Function to show the birthday message
function showMessage() {
    document.getElementById("messageBox").style.display = "block";
}

// Function to hide the message when "Thank You" is clicked
function hideMessage() {
    document.getElementById("messageBox").style.display = "none";
}

// Function to trigger confetti effect from the candle's position
function triggerConfetti(candle) {
    const rect = candle.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    confetti({
        particleCount: 20,  // Small burst of confetti
        spread: 50,         // Spread in a small area
        startVelocity: 30,  // Fast burst
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: ["#ff6699", "#ffcc00", "#ff6666", "#66ccff", "#66ff66"]
    });
}

document.getElementById("memory-lane").addEventListener("mouseenter", () => triggerConfettiButton("memory-lane"));
document.getElementById("next-surprise").addEventListener("mouseenter", () => triggerConfettiButton("next-surprise"));

function triggerConfettiButton(buttonId) {
    const button = document.getElementById(buttonId);
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    confetti({
        particleCount: 15,
        spread: 40,
        startVelocity: 25,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: ["#ff6699", "#ffcc00", "#ff6666", "#66ccff", "#66ff66"]
    });
}
