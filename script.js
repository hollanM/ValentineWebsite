const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function createCherryGlitter() {
    const cherry = document.createElement("div");
    cherry.classList.add("cherry-glitter");
    cherry.textContent = "🍒";

    cherry.style.left = Math.random() * 100 + "vw";
    cherry.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(cherry);

    setTimeout(() => cherry.remove(), 5000);
}

setInterval(createCherryGlitter, 600);

function cherryBurst(x, y) {
    for (let i = 0; i < 12; i++) {
        const cherry = document.createElement("div");
        cherry.classList.add("cherry-burst");
        cherry.textContent = "🍒";

        const angle = (Math.PI * 2 * i) / 12;
        const distance = 80;

        cherry.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        cherry.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        cherry.style.left = x + "px";
        cherry.style.top = y + "px";

        document.body.appendChild(cherry);

        setTimeout(() => cherry.remove(), 800);
    }
}

yesBtn.addEventListener("click", (e) => {
    const rect = yesBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    cherryBurst(centerX, centerY);
    openKermitModal();
});

function openKermitModal() {
    document.getElementById("kermitModal").style.display = "flex";
}

const modal = document.getElementById("kermitModal");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
