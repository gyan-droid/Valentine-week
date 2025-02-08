document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
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

    yesButton.addEventListener("click", function () {
        message.innerHTML = "Yay! You made me the happiest person today! ❤️";
        message.classList.remove("hidden");
        valentineImage.classList.remove("hidden");
        song.play();
        showHearts();
    });

    noButton.addEventListener("click", function () {
        message.innerHTML = "Oh no! But I'll keep trying! 😜";
        message.classList.remove("hidden");
        showHearts();
    });
});
