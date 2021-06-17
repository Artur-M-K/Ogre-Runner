let score = 0;
let scoreFlag = false;

function addPoint(player, obstacles) {
    obstacles.forEach(function(element) {
        const tree = element.x;
           
            if (tree <= player.x && tree > 15) {
                scoreFlag = true;
            }

            
    });

    if (scoreFlag) {
        score+=1;
        scoreFlag = false;
    } 

}

function handleCollision(player, obstacles) {
    
    for (let i = 0; i < obstacles.length; i++) {

    const playerX = player.x;
    const playerSZ = player.x + player.width;
    const treeX = obstacles[i].x;
    // const treeSZ = obstacles[i].x + obstacles[i].width;
    const playerY = player.y;
    // const treeY = obstacles[i].y;
    const treeWYS = obstacles[i].y - obstacles[i].height;


        if ((playerX + playerSZ) > (treeX+25) && (playerY > treeWYS-15) && (playerX < treeX)) {
           
            gameStart = false;
            gameOverDiv.classList.add('active');
            span.textContent = score;
            canvas.style.border = 'none';
        }
    }
    
}