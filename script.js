let audio;  // Declare the audio variable outside the function to keep track of its state
let isPlaying = false;  // Track whether the audio is playing

function playMusic() {
    if (!audio) {
        audio = new Audio('ts.mp3');
        const startTime = 67; 
        audio.currentTime = startTime;
        audio.play();

    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    
generateHeart(0, 100, null, null, 0.5);
generateHeart(300, 150, null, null, 1);
generateHeart(350, 200, null, null, 1);
generateHeart(200, 300, null, null, 1);
generateHeart(900, 400, null, null, 1);
generateHeart(700, 600, null, null, 0.5);
generateHeart(900, 800, null, null, 0.25);
generateHeart(1000, 100, null, null, 0.85);
generateHeart(320, 150, null, null, 1);
generateHeart(350, 200, null, null, 1);
generateHeart(260, 800, null, null, 1);
generateHeart(950, 400, null, null, 0.77);
generateHeart(790, 600, null, null, 0.5);
generateHeart(900, 800, null, null, 0.25);
generateHeart(300, 100, null, null, 0.3);
generateHeart(340, 150, null, null, 1);
generateHeart(350, 200, null, null, 1);
generateHeart(200, 300, null, null, 1);
generateHeart(960, 400, null, null, 1);
generateHeart(700, 600, null, null, 0.5);
generateHeart(900, 800, null, null, 0.25);
generateHeart(1000, 100, null, null, 5);
generateHeart(320, 150, null, null, 1);
generateHeart(350, 200, null, null, 1);
generateHeart(260, 800, null, null, 1);
generateHeart(950, 800, null, null, 0.77);
generateHeart(790, 650, null, null, 0.5);
generateHeart(900, 860, null, null, 0.25);
generateHeart(400, 200, null, null, 3);
generateHeart(450, 250, null, null, 1);
generateHeart(500, 300, null, null, 1);
generateHeart(350, 400, null, null, 1);
generateHeart(1050, 500, null, null, 1);
generateHeart(850, 700, null, null, 0.5);
generateHeart(1050, 900, null, null, 0.25);
generateHeart(1150, 200, null, null, 5);
generateHeart(470, 250, null, null, 1);
generateHeart(500, 300, null, null, 1);
generateHeart(410, 900, null, null, 1);
generateHeart(1100, 500, null, null, 0.77);
generateHeart(940, 700, null, null, 0.5);
generateHeart(1050, 900, null, null, 0.25);
generateHeart(400, 200, null, null, 3);
generateHeart(440, 250, null, null, 1);
generateHeart(500, 300, null, null, 1);
generateHeart(350, 400, null, null, 1);
generateHeart(1110, 500, null, null, 1);
generateHeart(850, 700, null, null, 0.5);
generateHeart(1050, 900, null, null, 0.25);
generateHeart(1150, 200, null, null, 5);
generateHeart(470, 250, null, null, 1);
generateHeart(500, 300, null, null, 1);
generateHeart(410, 900, null, null, 1);
generateHeart(1100, 90, null, null, 0.77);
generateHeart(940, 750, null, null, 0.5);
generateHeart(1050, 960, null, null, 0.25);

    
    // Optionally, you can update the button text to indicate play/pause status
    document.querySelector('.buttons button span').textContent = isPlaying ? 'Pause' : 'Song For You!!';

    setTimeout(generateHearts, 2800);
}
}



function scrollToSection() {
    window.scrollTo({
        top: 800, /* Adjust this value to set where you want to scroll to */
        behavior: 'smooth' /* Smooth scrolling */
    });
}
function scrollToSection_a() {
    window.scrollTo({
        top: 2, /* Adjust this value to set where you want to scroll to */
        behavior: 'smooth' /* Smooth scrolling */
    });
}

var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
const duration = 3000;
const speed = 0.1;
const cursorXOffset = 0;
const cursorYOffset = -5;
var hearts = [];
function generateHeart(x, y, xBound, xStart, scale)
{
   var heart = document.createElement("DIV");
   heart.setAttribute('class', 'heart');
   brd.appendChild(heart);
   heart.time = duration;
   heart.x = x;
   heart.y = y;
   heart.bound = xBound;
   heart.direction = xStart;
   heart.style.left = heart.x + "px";
   heart.style.top = heart.y + "px";
   heart.scale = scale;
   heart.style.transform = "scale(" + scale + "," + scale + ")";
   if(hearts == null)
    hearts = [];
   hearts.push(heart);
   return heart;
}



var before = Date.now();
var id = setInterval(frame, 15);
function frame()
{
   var current = Date.now();
   var deltaTime = current - before;
   before = current;
   for(i in hearts)
   {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if(heart.time > 0)
    {
     heart.y -= speed;
     heart.style.top = heart.y + "px";
     heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) + "px";
    }
    else
    {
     heart.parentNode.removeChild(heart);
     hearts.splice(i, 1);
    }
   }
}
var before = Date.now();
var id = setInterval(frame, 5);
function frame()
{
   var current = Date.now();
   var deltaTime = current - before;
   before = current+50;
   for(i in hearts)
   {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if(heart.time > 1)
    {
     heart.y -= speed;
     heart.style.top = heart.y + "px";
     heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) + "px";
    }
    else
    {
     heart.parentNode.removeChild(heart);
     hearts.splice(i, 0);
    }
   }
}
