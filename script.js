// --- YouTube Player API Configuration ---
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '1',
        width: '1',
        videoId: 'NB7WuqWzDhw', // Ravyn Lenae - Love Me Not
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'NB7WuqWzDhw'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("Audio pipeline armed.");
}

// --- Ambient Sparkle System ---
const sparkleContainer = document.getElementById('sparkle-container');

setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    sparkle.style.opacity = Math.random();
    sparkleContainer.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 5000);
}, 150);

// --- Navigation Controller ---
function nextScene(sceneId) {
    // Starts the background track securely upon the very first cover action
    if (sceneId === 2 && player && typeof player.playVideo === 'function') {
        player.playVideo();
    }

    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById(`scene-${sceneId}`).classList.add('active');
    
    if (sceneId === 3) {
        startTypewriter();
    }
    if (sceneId === 4) {
        initCupidEngine();
    }
}

// --- Scene 2 Meter Mechanic ---
let meterProgress = 0;

function chargeMeter() {
    if (meterProgress < 100) {
        meterProgress += 20;
        document.getElementById('friendship-bar').style.width = meterProgress + '%';
        document.getElementById('meter-text').innerText = `Energy: ${meterProgress}%`;
        
        if (meterProgress >= 100) {
            const flash = document.getElementById('flash');
            flash.style.opacity = '1';
            flash.style.transition = 'none';
            
            setTimeout(() => {
                flash.style.transition = 'opacity 1s ease-in-out';
                flash.style.opacity = '0';
                nextScene(3);
            }, 100);
        }
    }
}

// --- Scene 3 Typewriter Engine ---
const letterLines = 
    "hey, lil teddy bear 🧸💚\n" +
    "hehe you actually found the secret thing.\n\n" +
    "first of all... yo 😭 bahaha\n\n" +
    "i know A Levels have been stressing you out a lot lately and your brain probably has like 500 tabs open at the same time 💀 lolol\n\n" +
    "mehh idiot, i need you to remember something okay?\n" +
    "you're doing better than you think.\n\n" +
    "i know sometimes it feels like there's too much to do and everything is just piling up, but i see how much effort you put in. i see you trying, even on the days when you feel tired or unsure.\n\n" +
    "so here's your tiny reminder:\n" +
    "stop being so hard on urself harida 🫵😭\n" +
    "take breaks when you need them. And don't be so mean to yourself yea? only I get to do that :3\n\n" +
    "remember that one stressful day doesn't decide your whole future. i'm always cheering for you, even when you don't realize you need someone cheering.\n\n" +
    "also btw... you better not underestimate yourself because you're actually so much more capable than you think 🤨💚\n\n" +
    "and dynamic update... I'm SOWWY for being annoying sometimes, and I miss u like actually crazy much right now. it's lowkey hurting my feelings how much I miss you 🥺 matching your energy is literally my favorite thing ever.\n\n" +
    "okay i'll stop being cheesy now before this becomes a whole novel 💀 just know that i care about you a lot.\n\n" +
    "i wuv u sooo much, harida?\n" +
    "more than yk 🥺❤️\n" +
    "mwahh 🧸💗";

function startTypewriter() {
    const container = document.getElementById('typewriter-text');
    let i = 0;
    container.innerHTML = "";
    
    function type() {
        if (i < letterLines.length) {
            container.innerHTML += letterLines.charAt(i);
            i++;
            setTimeout(type, 30);
        } else {
            document.getElementById('next-page-btn').style.display = 'inline-block';
        }
    }
    setTimeout(type, 500);
}

// --- Scene 4: Cupid Arrow Shooting Engine ---
function initCupidEngine() {
    const canvas = document.getElementById('canvas-finale');
    const ctx = canvas.getContext('2d');
    const plushie = document.getElementById('plushie-shooter');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setTimeout(() => {
        const rect = plushie.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        
        plushie.classList.add('shoot-kick');

        let arrowX = startX;
        let arrowY = startY;
        const speedX = 12; 
        const speedY = -4;  

        function animateArrow() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.font = "38px sans-serif";
            ctx.fillText("💘", arrowX, arrowY);

            arrowX += speedX;
            arrowY += speedY;

            if (arrowX < canvas.width + 50) {
                requestAnimationFrame(animateArrow);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                startHeartShower();
            }
        }
        animateArrow();
    }, 1200);
}

// --- Raining Hearts Storm Engine ---
function startHeartShower() {
    const heartsArray = ['❤️', '💖', '🧸', '💗', '💘', '💚', '🌹', '🌸'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartsArray[Math.floor(Math.random() * heartsArray.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }, 80); 
}
