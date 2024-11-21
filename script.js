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
    "Your pickaxe may break, but you can always craft another one.",
    "Even the smallest torch can light the darkest cave.",
    "You can't always control the creeper, but you can control the blast.",
    "Every biome has its beauty, even if it’s hidden under layers of snow or sand.",
    "You can’t change the seed of your world, but you can make it your own paradise."
];

let usedQuotes = [];
let isMusicPlaying = false;
const audio = new Audio('radio-sound.mp3');
audio.volume = 0.5;
const backgroundMusic = new Audio('background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.pause();
document.getElementById('music-icon').src = 'no-music-icon.png';

const getRandomQuote = () => {
    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }

    let quote;
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (usedQuotes.includes(quote));

    usedQuotes.push(quote);
    return quote;
};

document.getElementById('steve').addEventListener('click', () => {
    audio.play();
    const quote = getRandomQuote();
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
