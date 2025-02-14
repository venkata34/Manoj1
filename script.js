document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("book");
    const bgMusic = document.getElementById("bg-music");
    const cover = document.getElementById("cover");

    // Open book when cover is clicked
    cover.addEventListener("click", function () {
        book.classList.remove("closed");
        book.classList.add("open");
        bgMusic.play();
    });

    // Generate falling rose petals dynamically
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Randomize starting position
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 5 + 3 + "s"; // 3s to 8s duration

        document.body.appendChild(petal);

        // Remove petal after animation completes & create new one
        setTimeout(() => {
            petal.remove();
            createPetal(); 
        }, 8000);
    }

    // Generate multiple petals continuously
    function startPetalEffect() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createPetal, i * 500);
        }
    }

    // Start petals only when book opens
    cover.addEventListener("click", startPetalEffect);
});
