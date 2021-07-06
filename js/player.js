const ogrePic = new Image();
ogrePic.src = 'img/ogre_spritesheet.png';
let counter = 0;

controller = {

    up:false,
    keyListener:function(event) {
  
      var key_state = (event.type == "keydown")?true:false;
      if(event.keyCode == 32) return false;

      switch(event.keyCode) {
  
        case 38:// up key
          controller.up = key_state;
        break;
        
      }
  
    }
  
  };

class Ogre {
    constructor() {
        this.x = 20;
        this.y = 300;
        this.velocity = 0; //velocity
        this.originalWidth = 1920 /12;
        this.originalHeight = 160;
        this.width = this.originalWidth / 2.5;
        this.height = this.originalHeight / 2.5;
        this.frameX = 0;
        this.jumping = true;
    }
    update() {
        
        if(counter == 2) {
            if(this.frameX < 11) {
            this.frameX++;
            } else this.frameX = 1;
            counter = 0;
        }else counter++;

        if (controller.up && this.jumping == false) {
            this.velocity -= 35;
            this.jumping = true;
        }

        this.velocity += 1.5; //gravity
        this.y += this.velocity;
        this.velocity *= .9;

        if (this.y > 355 - this.height) {
            this.jumping = false;
            this.y = 355 - this.height;
            this.velocity = 0;
        }
    }
    draw() {
        ctx.drawImage(ogrePic, this.frameX*this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x - 12, this.y - 6, this.width*2.5, this.height*2.5);

    }
    
}

const ogre = new Ogre();