const lightBugsArray = [];
const lightBugsArray1 = [];

class LightBug {
    constructor() {
        this.x = (Math.random() * (canvas.width + 20)) + 20;
        this.y = (Math.random() * (200 - 50) + 50);
        this.speed = (Math.random() * 0.3) + 0.1;
        this.size = (Math.random() * 1.3) + 0.3;
        this.alfa = (Math.random() * 0.8 - 0.2) + 0.2;
        this.color = `rgba(255,218,${(Math.random() * 160 - 0) + 0}, ${this.alfa})`;
    }
    update() {
        this.x -= gamespeed + 0.5;
        
        
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleLightBug() {
    lightBugsArray.unshift(new LightBug);
    for (let i = 0; i < lightBugsArray.length; i++) {
        lightBugsArray[i].update();
        lightBugsArray[i].draw();
    }
    //if more than 60, remove 20
    if (lightBugsArray.length > 400) {
        for (let i = 0; i < 20; i++) {
            lightBugsArray.pop(lightBugsArray[i]);
        }
    }
}

class LightBug1 {
    constructor() {
        this.x = (Math.random() * (canvas.width + 20)) + 20;
        this.y = (Math.random() * (300 - 100) + 100);
        this.speed = (Math.random() * 0.2 - 0.07) + 0.07;
        this.size = (Math.random() * 2.2 - 0.8) + 0.8;
        this.alfa = (Math.random() * 1 - 0.5) + 0.5;
        this.color = `rgba(255,218,${(Math.random() * 160 - 0) + 0}, ${this.alfa})`;
    }
    update() {
        this.x -= gamespeed+1;
        
        
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleLightBug1() {
    lightBugsArray1.unshift(new LightBug1);
    for (let i = 0; i < lightBugsArray1.length; i++) {
        lightBugsArray1[i].update();
        lightBugsArray1[i].draw();
    }
    //if more than 60, remove 20
    if (lightBugsArray1.length > 200) {
        for (let i = 0; i < 20; i++) {
            lightBugsArray1.pop(lightBugsArray1[i]);
        }
    }
}