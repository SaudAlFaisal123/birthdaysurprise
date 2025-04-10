document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const bgMusic = document.getElementById("background-music");
    bgMusic.volume = 1;
    bgMusic.play().catch(error => {
        console.warn("Autoplay prevented by browser. User interaction may be required.");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let slideshow = document.getElementById("slideshow");
    let startSlideshowBtn = document.getElementById("startSlideshow");
    let backToWelcomeBtn = document.getElementById("backToWelcome");
    let nextSurpriseBtn = document.getElementById("nextSurprise");
    let messageBox = document.getElementById("message-box");
    
    
    let images = document.querySelectorAll('.slideshow img');
    function startSlideshow() {
        let slideInterval = setInterval(() => {
            if (index >= images.length - 3) {
                clearInterval(slideInterval);
            } else {
                index++;
                slideshow.style.transform = `translateX(-${index * 265}px)`;
            }
        }, 2000);
    }

    let index = 0;
    let totalSlides = document.querySelectorAll(".slide").length;
    let slidesToShow = 4;
    let interval;



    let messages = [
        "You're an amazing person! 💖",
        "This moment is unforgettable! 🌟",
        "Friendship makes life beautiful! 🎉",
        "So many memories together! 🥰",
        "You deserve all the happiness! 🎂"
    ];

    startSlideshowBtn.addEventListener("click", () => {
        clearInterval(interval);

        interval = setInterval(() => {
            if (index < totalSlides - slidesToShow) {
                index++;
            } else {
                index = 0;
            }
            slideshow.style.transform = `translateX(-${index * 25}%)`;
        }, 3000);
    });

    // Hover Effect for Messages
    document.querySelectorAll(".slide").forEach((slide, i) => {
        slide.addEventListener("mouseenter", () => {
            messageBox.innerText = messages[i % messages.length];
            messageBox.style.display = "block";
        });
        slide.addEventListener("mouseleave", () => {
            messageBox.style.display = "none";
        });
    });

    // Navigation Buttons
    backToWelcomeBtn.addEventListener("click", () => {
        window.location.href = "site1.html";
    });

    nextSurpriseBtn.addEventListener("click", () => {
        window.location.href = "site3.html";
    });

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
    const buttons = document.querySelectorAll("#startSlideshow, #backToWelcome, #nextSurprise");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            triggerConfetti(this);
        });
    });



});

