document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("book");
    const bgMusic = document.getElementById("bg-music");
    const cover = document.querySelector(".cover");

    function openBook() {
        console.log("📖 Book clicked!"); // Debugging log
        book.classList.remove("closed");
        book.classList.add("open");
        bgMusic.play();
    }

    // Listen for both click and touchstart to work on mobile
    cover.addEventListener("click", openBook);
    cover.addEventListener("touchstart", openBook); 

    // 🌹 Generate Falling Rose Petals
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Randomize position & animation speed
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 5 + 3 + "s"; // 3s to 8s duration
        petal.style.top = "-10vh"; // 🌟 FIX: Petals Start from Above

        document.body.appendChild(petal);

        console.log("🌹 Petal created!"); // Debugging log

        // Remove petal after animation completes & create a new one
        setTimeout(() => {
            petal.remove();
            createPetal(); 
        }, 8000);
    }

    // Start the petals effect after DOM loads
    function startPetalEffect() {
        console.log("🌹 Starting petal effect...");
        for (let i = 0; i < 20; i++) {
            setTimeout(createPetal, i * 500);
        }
    }

    startPetalEffect();
});
