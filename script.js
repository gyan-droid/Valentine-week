document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const initialMessage = document.getElementById("initialMessage");
    const message = document.getElementById("message");
    const valentineImage = document.getElementById("valentineImage");
    const heartContainer = document.getElementById("heartContainer");
    const song = document.getElementById("valentineSong");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Varying animation speed
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000); // Remove heart after animation
    }

    function showHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 200);
        }
    }

    function showMessage(text) {
        initialMessage.classList.remove("hidden"); // Show the initial message
        message.innerHTML = text; // Change message text
        message.classList.remove("hidden"); // Show message
        showHearts();
    }

    yesButton.addEventListener("click", function () {
        showMessage("I caught you, and I'm not gonna let you go. He he he he.");
        valentineImage.classList.remove("hidden");
        song.play().catch(error => console.log("Audio playback error:", error));
    });

    noButton.addEventListener("click", function () {
        showMessage("You have no option of saying no.<br><br>I caught you, and I'm not gonna let you go. He he he he.");
    });
});
