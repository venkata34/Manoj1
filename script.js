// script.js
function openBook() {
    document.getElementById("book").classList.remove("closed");
    document.getElementById("book").classList.add("open");
    document.getElementById("bg-music").play();
}

// Generate falling rose petals dynamically
document.addEventListener("DOMContentLoaded", function() {
    const numberOfPetals = 20;
    for (let i = 0; i < numberOfPetals; i++) {
        createPetal();
    }
});

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    document.body.appendChild(petal);
    
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    setTimeout(() => {
        petal.remove();
        createPetal(); // Continuously generate new petals
    }, 5000);
}
