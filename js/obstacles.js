const obstaclesArray = [];
let counterTree = 0;

const treeImg = new Image();
treeImg.src = 'img/tree.png';

class Obstacle {
    constructor() {
    this.x = Math.floor(Math.random()* (1250-850)+850);
    this.y = 330;
    this.width = 130/1.2;
    this.height = 130/1.2;
    this.speed = 5;
    }
    draw() {
        ctx.drawImage(treeImg, this.x, this.y, this.width, this.height);
    }
    update() {
        this.x -= this.speed;
       
        if (this.x < -150) {
            this.x = Math.floor(Math.random()* (1250-850)+850);
            
        }
        this.draw();
        
    }
}

function compare( a, b ) {
    if ( a.x < b.x ){
      return -1;
    }
    if ( a.x > b.x ){
      return 1;
    }
    return 0;
  }

  for (let i = 0; i < 3; i++) {
    obstaclesArray.push(new Obstacle);
}
function createObstacle() {
    
        obstaclesArray.sort(compare);
            if((obstaclesArray[0].x-obstaclesArray[1].x < 200 && obstaclesArray[0].x-obstaclesArray[1].x > -200)) {
                obstaclesArray[1].x += 120;
            }else if  ((obstaclesArray[1].x-obstaclesArray[2].x < 200 && obstaclesArray[1].x-obstaclesArray[2].x > -200 )) {
                obstaclesArray[2].x += 120;

            }else if(obstaclesArray[2].x-obstaclesArray[0].x < 200 && obstaclesArray[2].x-obstaclesArray[0].x > -200) {
                    obstaclesArray[0].x =obstaclesArray[0].x - 120;
                    }
                obstaclesArray.forEach(element => {
                    element.update();
            });

            }   
               


    
    




