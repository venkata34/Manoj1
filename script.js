function openBook() {
    document.getElementById("book").classList.toggle("open");

    // Play music when book opens
    let audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}

// Create falling petals
function createPetals() {
    for (let i = 0; i < 15; i++) {
        let petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 5000);
    }
}

setInterval(createPetals, 500);
