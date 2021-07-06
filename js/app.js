const canvas = document.getElementById('canvas');
const gameOverDiv = document.querySelector('.gameOver')
const gameStartDiv = document.querySelector('.gameStart');
const backBtn = document.getElementById('back');
const startBtn = document.getElementById('start');
const span = document.querySelector('span');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;

//game settings
let gamespeed = 2;
let gamespeed1 = 3;
let gamespeed2 = 4.8;
let gamespeed3 = 5.3;
let gameStart = true;


//images loader
const background = new Image();
const background1 = new Image();
const background2 = new Image();
const ground = new Image();
background.src = 'img/BG2.png';
background1.src = 'img/BG3.png';
background2.src = 'img/BG1.png';
ground.src = 'img/Ground.png';

const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
};

const BG1 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

const BG2 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

const BG3 = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}


function handleBackground() {
    if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else BG.x2 -= gamespeed;

    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
   
}

function handleBackground1() {
    if (BG1.x1 <= -BG1.width + gamespeed1) BG1.x1 = BG1.width;
    else BG1.x1 -= gamespeed1;
    if (BG1.x2 <= -BG1.width + gamespeed1) BG1.x2 = BG1.width;
    else BG1.x2 -= gamespeed1;

    ctx.drawImage(background1, BG1.x1, BG1.y, BG1.width, BG1.height);
    ctx.drawImage(background1, BG1.x2, BG1.y, BG1.width, BG1.height);
}

function handleBackground2() {
    if (BG2.x1 <= -BG2.width + gamespeed2) BG2.x1 = BG2.width;
    else BG2.x1 -= gamespeed2;
    if (BG2.x2 <= -BG2.width + gamespeed2) BG2.x2 = BG2.width;
    else BG2.x2 -= gamespeed2;

    ctx.drawImage(background2, BG2.x1, BG2.y, BG2.width, BG2.height);
    ctx.drawImage(background2, BG2.x2, BG2.y, BG2.width, BG2.height);
}

function handleBackground3() {
    if (BG3.x1 <= -BG3.width + gamespeed3) BG3.x1 = BG3.width;
    else BG3.x1 -= gamespeed3;
    if (BG3.x2 <= -BG3.width + gamespeed3) BG3.x2 = BG3.width;
    else BG3.x2 -= gamespeed3;

    ctx.drawImage(ground, BG3.x1, BG3.y, BG3.width, BG3.height);
    ctx.drawImage(ground, BG3.x2, BG3.y, BG3.width, BG3.height);
}
 
function animate() {

    
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        handleBackground();
        handleLightBug();
        handleBackground1();
        handleLightBug1();
        handleBackground2(); 
        ogre.update();
        ogre.draw();
        createObstacle();
        addPoint(ogre, obstaclesArray);
        handleCollision(ogre, obstaclesArray);
        handleBackground3();
        ctx.fillStyle = 'white';
        ctx.font = '50px Impact';
        ctx.strokeText(`SCORE: ${score}`, 550, 60);
        ctx.fillText(`SCORE: ${score}`, 550, 60);
        
        let gameRun = requestAnimationFrame(animate);

        if (!gameStart) {
            cancelAnimationFrame(gameRun);
        }
}

    
window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);

backBtn.addEventListener('click', ()=>{
    gameStartDiv.classList.add('active');
    window.location.reload();
});

startBtn.addEventListener('click', ()=> {
    gameStartDiv.classList.remove('active');
    animate();
    
});
