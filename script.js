document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const heartContainer = document.getElementById("heartContainer");
    const song = document.getElementById("valentineSong");
    const valentineImage = document.getElementById("valentineImage");

    const areYouSureContainer = document.getElementById("areYouSureContainer");
    const areYouSureYes = document.getElementById("areYouSureYes");
    const areYouSureNo = document.getElementById("areYouSureNo");
    const finalMessage = document.getElementById("finalMessage");

    let moveNoButton = false;

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

    yesButton.addEventListener("click", function () {
        finalMessage.classList.remove("hidden");
        valentineImage.classList.add("hidden"); // Remove initial image
        showHearts();
        song.play().catch(error => console.log("Audio playback error:", error));
    });

    noButton.addEventListener("click", function () {
        areYouSureContainer.classList.remove("hidden");
    });

    areYouSureNo.addEventListener("click", function () {
        if (!moveNoButton) {
            areYouSureContainer.classList.add("hidden");
            moveNoButton = true;
        }

        // Move the "No" button randomly
        areYouSureNo.style.position = "absolute";
        areYouSureNo.style.top = Math.random() * 80 + "vh";
        areYouSureNo.style.left = Math.random() * 80 + "vw";
    });

    areYouSureYes.addEventListener("click", function () {
        finalMessage.classList.remove("hidden");
        valentineImage.classList.add("hidden"); // Remove initial image
        showHearts();
        song.play().catch(error => console.log("Audio playback error:", error));
    });
});
