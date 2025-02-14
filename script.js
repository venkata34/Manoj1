document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("book");
    const bgMusic = document.getElementById("bg-music");

    function openBook() {
        console.log("📖 Book clicked!");
        book.classList.remove("closed");
        book.classList.add("open");
        bgMusic.play();
    }

    // Fix: Attach event listeners correctly
    book.addEventListener("click", openBook);
    book.addEventListener("touchstart", openBook);

    // 🌹 Generate Falling Rose Petals
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 5 + 3 + "s";
        petal.style.top = "-10vh"; // Start from the top

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
            createPetal();
        }, 8000);
    }

    function startPetalEffect() {
        console.log("🌹 Starting petal effect...");
        for (let i = 0; i < 20; i++) {
            setTimeout(createPetal, i * 500);
        }
    }

    startPetalEffect();
});
