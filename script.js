document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("final-message").innerText = "Yay, I got you my princess, and I'm never gonna let you go. You are mine forever.";
    document.getElementById("response-gif").src = "dance.gif";
    document.getElementById("response-gif").classList.remove("hidden");
    createHearts(30);
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("final-message").innerText = "You have no option of saying no.";
    document.getElementById("response-gif").src = "gun.gif";
    document.getElementById("response-gif").classList.remove("hidden");
    moveNoButton();
});

function createHearts(num) {
    for (let i = 0; i < num; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

function moveNoButton() {
    let noButton = document.getElementById("no");
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}
