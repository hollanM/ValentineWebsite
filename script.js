// ------------------------------------------------------
//  SISTER'S PAGE LOGIC (Cherry Page)
// ------------------------------------------------------

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const kermitModal = document.getElementById("kermitModal");

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
}

function createCherryGlitter() {
    const cherry = document.createElement("div");
    cherry.classList.add("cherry-glitter");
    cherry.textContent = "🍒";

    cherry.style.left = Math.random() * 100 + "vw";
    cherry.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(cherry);

    setTimeout(() => cherry.remove(), 5000);
}

if (yesBtn) {
    setInterval(createCherryGlitter, 600);
}

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

if (yesBtn && kermitModal) {
    yesBtn.addEventListener("click", () => {
        const rect = yesBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        cherryBurst(centerX, centerY);
        kermitModal.style.display = "flex";
    });
}

if (kermitModal) {
    const kermitClose = kermitModal.querySelector(".close-btn");

    if (kermitClose) {
        kermitClose.addEventListener("click", () => {
            kermitModal.style.display = "none";
        });
    }

    kermitModal.addEventListener("click", (e) => {
        if (e.target === kermitModal) {
            kermitModal.style.display = "none";
        }
    });
}



// ------------------------------------------------------
//  FRIEND'S PAGE LOGIC (Top Gun Lock-On Page)
// ------------------------------------------------------

const reticle = document.getElementById("reticle");
const mcqueenModal = document.getElementById("mcqueenModal");

if (reticle && mcqueenModal) {

    let lockTimer = null;

    function moveReticle() {
        const area = document.querySelector(".lockon-area");
        if (!area) return;

        const rect = area.getBoundingClientRect();

        const x = Math.random() * (rect.width - 40);
        const y = Math.random() * (rect.height - 40);

        reticle.style.left = x + "px";
        reticle.style.top = y + "px";
    }

    setInterval(moveReticle, 1200);
    moveReticle();

    reticle.addEventListener("mouseenter", () => {
        lockTimer = setTimeout(() => {
            reticle.classList.add("locked-on");

            const overlay = document.getElementById("approvalOverlay");
            const gif = document.getElementById("approvalGif");

            // Show first GIF
            gif.src = "topgunApprove.gif";
            overlay.style.display = "flex";
            overlay.style.animation = "fadeIn 0.6s ease forwards";

            setTimeout(() => {
                overlay.style.animation = "fadeOut 0.6s ease forwards";

                setTimeout(() => {
                    // Show second GIF
                    gif.src = "cruiseYes.gif";
                    overlay.style.animation = "fadeIn 0.6s ease forwards";

                    // After 2 seconds, fade out second GIF
                    setTimeout(() => {
                        overlay.style.animation = "fadeOut 0.6s ease forwards";

                        setTimeout(() => {
                            overlay.style.display = "none";
                            mcqueenModal.style.display = "flex";
                            floatingInterval = setInterval(createFloatingElement, 500);
                        }, 600);

                    }, 2000);

                }, 600);

            }, 2000);

        }, 900);
    });


    reticle.addEventListener("mouseleave", () => {
        clearTimeout(lockTimer);
        reticle.classList.remove("locked-on");
    });
}

if (mcqueenModal) {
    const mcqueenClose = mcqueenModal.querySelector(".close-btn");

    if (mcqueenClose) {
        mcqueenClose.addEventListener("click", () => {
            mcqueenModal.style.display = "none";
            clearInterval(floatingInterval);
        });
    }

    mcqueenModal.addEventListener("click", (e) => {
        if (e.target === mcqueenModal) {
            mcqueenModal.style.display = "none";
            clearInterval(floatingInterval);
        }
    });
}

let floatingInterval = null;
function createFloatingElement() {
    const elem = document.createElement("div");
    elem.classList.add("floatF");

    const options = ["❤️", "🌹", "✨", "⚡", "🏁"];
    elem.textContent = options[Math.floor(Math.random() * options.length)];

    elem.style.left = Math.random() * 100 + "vw";
    elem.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(elem);

    setTimeout(() => elem.remove(), 5000);
}


