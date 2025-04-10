let backToWelcomeBtn = document.getElementById("back-btn");

document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const bgMusic = document.getElementById("background-music");
    bgMusic.volume = 1;
    bgMusic.play().catch(error => {
        console.warn("Autoplay prevented by browser. User interaction may be required.");
    });

    // Typing Effect
    let message = "They say eyes are the windows to the soul—and yours are galaxies I could get lost in forever. Your beauty is not just in your face, it’s in your strength, your kindness, your presence. You don’t just turn heads… you turn hearts.";
    let index = 0;
    let typingSpeed = 50;
    function typeMessage() {
        if (index < message.length) {
            document.getElementById("typed-message").textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, typingSpeed);
        }
    }
    typeMessage();


    backToWelcomeBtn.addEventListener("click", () => {
        window.location.href = "site2.html";
    });


    // Back Button
    document.getElementById("back-btn").addEventListener("click", function () {
        window.location.href = "site2.html";
    });

    // Confetti Effect on Hover for Buttons
    function triggerConfetti(button) {
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

    // Add Confetti Effect to Specific Buttons
    document.querySelectorAll("#surprise-btn, #back-btn").forEach(button => {
        button.addEventListener("mouseenter", function () {
            triggerConfetti(this);
        });
    });
});
