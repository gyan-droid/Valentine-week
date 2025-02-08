document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const heartContainer = document.getElementById("heartContainer");
    const song = document.getElementById("valentineSong");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }

    function showHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 200);
        }
    }

    function showMessage(text) {
        message.innerHTML = text;
        message.classList.remove("hidden");
        showHearts();
    }

    yesButton.addEventListener("click", function () {
        showMessage("I caught you, and I'm not gonna let you go. He he he he.");
        song.play().catch(error => console.log("Audio playback error:", error));
    });

    noButton.addEventListener("click", function () {
        showMessage("You have no option of saying no.<br><br>I caught you, and I'm not gonna let you go. He he he he.");
    });
});
