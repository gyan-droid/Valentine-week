document.addEventListener("DOMContentLoaded", function () {
    const firstPage = document.getElementById("firstPage");
    const thinkAgainPage = document.getElementById("thinkAgainPage");
    const finalPage = document.getElementById("finalPage");

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const thinkYes = document.getElementById("thinkYes");
    const thinkNo = document.getElementById("thinkNo");

    const heartContainer = document.getElementById("heartContainer");
    const song = document.getElementById("valentineSong");

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

    // When "Yes" is clicked on the first page
    yesButton.addEventListener("click", function () {
        firstPage.classList.add("hidden");
        finalPage.classList.remove("hidden");
        showHearts();
        song.play().catch(error => console.log("Audio playback error:", error));
    });

    // When "No" is clicked on the first page
    noButton.addEventListener("click", function () {
        firstPage.classList.add("hidden");
        thinkAgainPage.classList.remove("hidden");
    });

    // When "No" is clicked on "Think Again"
    thinkNo.addEventListener("click", function () {
        if (!moveNoButton) {
            moveNoButton = true;
        }

        // Move the "No" button randomly
        thinkNo.style.position = "absolute";
        thinkNo.style.top = Math.random() * 80 + "vh";
        thinkNo.style.left = Math.random() * 80 + "vw";
    });

    // When "Yes" is clicked on "Think Again"
    thinkYes.addEventListener("click", function () {
        thinkAgainPage.classList.add("hidden");
        finalPage.classList.remove("hidden");
        showHearts();
        song.play().catch(error => console.log("Audio playback error:", error));
    });
});
