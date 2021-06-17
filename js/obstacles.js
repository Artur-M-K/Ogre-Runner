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

function createObstacle() {
     
                
                if (obstaclesArray.length >= 3) {
                    obstaclesArray.slice(0,3);
                    obstaclesArray.sort(compare);
                    if((obstaclesArray[0].x-obstaclesArray[1].x < 200 && obstaclesArray[0].x-obstaclesArray[1].x > -200)) {
                        obstaclesArray[1].x += 150;
                    }else if  ((obstaclesArray[1].x-obstaclesArray[2].x < 200 && obstaclesArray[1].x-obstaclesArray[2].x > -200 )) {
                        obstaclesArray[2].x += 150;

                    }else if(obstaclesArray[2].x-obstaclesArray[0].x < 200 && obstaclesArray[2].x-obstaclesArray[0].x > -200) {
                        obstaclesArray[0].x =obstaclesArray[0].x - 150;
                    }
                    obstaclesArray.forEach(element => {
                        element.update();
                    });
                    
                }else if(obstaclesArray.length < 3){
                    obstaclesArray.push(new Obstacle);
                }

                
            
            
}

    
    




