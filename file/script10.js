document.getElementById("start-button").addEventListener("mouseenter", () => triggerConfettiButton("start-button"));

document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const bgMusic = document.getElementById("background-music");

    if (bgMusic) {
        bgMusic.volume = 1; // Adjust volume (0.0 to 1.0)
        bgMusic.play().catch(error => {
            console.warn("Autoplay prevented by browser. User interaction may be required.");
        });
    }
});


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