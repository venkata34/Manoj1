document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("book");
    const bgMusic = document.getElementById("bg-music");
    const cover = document.getElementById("cover");
    const photoPage = document.getElementById("photo-page");
    const eventPhoto = document.querySelector(".event-photo");

    function openBook() {
        book.classList.remove("closed");
        book.classList.add("open");
        bgMusic.play();
        eventPhoto.classList.remove("hidden"); // Show photo
    }

    // Open book on click/tap
    cover.addEventListener("click", openBook);
    cover.addEventListener("touchstart", openBook); // Fix for mobile devices

    // 🌹 Generate Falling Rose Petals
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Randomize starting position
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 5 + 3 + "s"; // 3s to 8s duration
        petal.style.top = "-5vh"; // 🌟 FIX: Petals Start from Above

        document.body.appendChild(petal);

        // Remove petal after animation completes & create new one
        setTimeout(() => {
            petal.remove();
            createPetal(); 
        }, 8000);
    }

    // Start the petals effect immediately
    function startPetalEffect() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createPetal, i * 500);
        }
    }

    // Ensure petals start immediately
    startPetalEffect();
});
