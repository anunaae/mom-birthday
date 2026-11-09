
// Open birthday surprise

function openSurprise() {

    document.getElementById("home").style.display = "none";

    document.getElementById("surprise")
        .classList.remove("hidden");
    
        playMusic();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Open letter

function openLetter() {

    const letter = document.getElementById("letter");

    letter.classList.toggle("hidden");

    const envelope = document.getElementById("envelope");

    if (!letter.classList.contains("hidden")) {

        envelope.style.display = "none";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


// Floating hearts

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 700);


// Birthday celebration

function celebrate() {

    const emojis = ["❤️", "🌸", "✨", "💕", "🎉"];

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart = document.createElement("span");

            heart.className = "heart";

            heart.innerHTML =
                emojis[Math.floor(Math.random() * emojis.length)];

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.fontSize = "25px";

            document.getElementById("hearts")
                .appendChild(heart);

            setTimeout(() => heart.remove(), 7000);

        }, i * 80);

    }

}

const music = document.getElementById("bgMusic");

let isPlaying = false;

// Play music
function playMusic() {

    music.volume = 0.3;

    music.play()
        .then(() => {
            isPlaying = true;
            updateMusicButton();
        })
        .catch(error => {
            console.log("Хөгжим тоглуулах боломжгүй:", error);
        });

}

// Music on/off
function toggleMusic() {

    if (isPlaying) {

        music.pause();
        isPlaying = false;

    } else {

        playMusic();

    }

    updateMusicButton();

}

// Update button text
function updateMusicButton() {

    const button = document.getElementById("musicButton");

    button.innerHTML = isPlaying
        ? "🎵 Хөгжим унтраах"
        : "🎵 Хөгжим асаах";

}
