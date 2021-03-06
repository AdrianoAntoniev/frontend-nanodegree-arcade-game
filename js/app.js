// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 68;              
    this.speed = 0;    
    this.sizes = {'x': 101, 'y': 171};    

    this.setSpeed = function(value) {        
        this.speed = speed;
    };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x = this.x * dt;
    var movement = Math.floor(this.speed * dt);      
    if(this.x > 500) {
        this.x = 0;
    } else {
        this.x = this.x + movement;    
    }    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {        
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {    
    this.sprite = 'images/char-boy.png';
    this.x = 101;
    this.y = 400;    
    this.prevX = this.x;
    this.prevY = this.y;

    this.sizes = {'x': 101, 'y': 171};    
}

Player.prototype.resetPosition = function() {
    this.x = this.prevX;
    this.y = this.prevY;
}

Player.prototype.update = function() {
}

Player.prototype.render = function() {    
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
};

Player.prototype.handleInput = function(key) {    
    if(key === 'right') { 
        if(this.x < 403)         
            this.x += 101;
    } else if(key === 'left') {        
        if(this.x > 1)
            this.x -= 101;
    } else if(key === 'up') {
        if(this.y > -14)
            this.y -= 83;
    } else if(key == 'down') {
        if(this.y < 399) 
            this.y += 83;
        }        
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];

var axisY = 83;
for(var i=0; i<3; i++) {        
    e = new Enemy();
    //var speed = Math.floor(Math.random() * 30) * 20;
    var speed = Math.floor(Math.random() * 8) * 10;
    e.setSpeed(speed);
    e.y += (axisY * i);    
    allEnemies.push(e);            
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
