const quotes = [
    "Animals follow you, but only because you have food for them.",
    "A heart is like a bedrock, it can only be destroyed by cheating.",
    "You can own the world, but still end up alone!",
    "Don't expect to find diamonds while mining at the wrong level.",
    "Nobody cares if you're in the cave until you find diamonds.",
    "Never leave trees floating.. Finish what you started.",
    "You can't control where you start, but you can decide where you can end up.",
    "Technoblade never dies.",
    "The fun part is not the ender dragon. the fun part is the way to ender dragon.",
    "In a vast world, loneliness can be the hardest challenge of all.",
    "You will miss 100% of the ores you don't mine.",
    "Death is only temporary, you can always re-spawn and find your Items.",
    "Some things can only be found in the Nether.",
    "A base is just blocks until it's filled with memories and purpose.",
    "Your pickaxe may break, but you can always craft another one."
];

let usedQuotes = [];
let isMusicPlaying = false;
const audio = new Audio('radio-sound.mp3');
audio.volume = 0.5; // Lower the volume of the radio sound effect
const backgroundMusic = new Audio('background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.pause(); // Ensure the background music is paused by default
document.getElementById('music-icon').src = 'no-music-icon.png'; // Set the default icon to muted

document.getElementById('steve').addEventListener('click', () => {
    audio.play();

    let quote;
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (usedQuotes.includes(quote) && usedQuotes.length < quotes.length);

    if (usedQuotes.length >= quotes.length) {
        usedQuotes = [];
    }

    usedQuotes.push(quote);
    document.getElementById('quote').innerText = quote;
    document.querySelector('.bubble').style.display = 'block';
    document.getElementById('instruction').style.display = 'none';
});

document.getElementById('music-toggle').addEventListener('click', () => {
    const musicIcon = document.getElementById('music-icon');
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicIcon.src = 'no-music-icon.png';
    } else {
        backgroundMusic.play();
        musicIcon.src = 'music-icon.png';
    }
    isMusicPlaying = !isMusicPlaying;
});