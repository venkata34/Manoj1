// script.js
function openBook() {
    document.getElementById("book").classList.remove("closed");
    document.getElementById("book").classList.add("open");
    document.getElementById("bg-music").play();
}

// Generate falling rose petals dynamically
document.addEventListener("DOMContentLoaded", function() {
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        document.body.appendChild(petal);

        // Set random position
        petal.style.left = Math.random() * 100 + "vw";

        // Random animation duration for natural effect
        let duration = Math.random() * 3 + 2; // Between 2s to 5s
        petal.style.animationDuration = duration + "s";

        // Remove petal after it falls
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // Generate petals continuously without gaps
    setInterval(() => {
        createPetal();
    }, 300); // New petal every 300ms
});
