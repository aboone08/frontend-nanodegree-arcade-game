// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
  }
  update(dt){//https://medium.com/letsboot/classic-arcade-game-with-js-5687e4125169
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers
    this.x += this.speed * dt;
    if(this.x > 510){
       this.x = -50;
       this.speed = 100 + Math.floor(Math.random() * 222);
    };
    //checkCollisions, https://medium.com/letsboot/classic-arcade-game-with-js-5687e4125169
    if(player.x < this.x + 80 &&
       player.x + 80 > this.x &&
       player.y < this.y + 60 &&
       60 + player.y > this.y){
       player.x = 202;
       player.y = 405;
    }
  }
  //draws enemies to the board
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
class Hero {
  constructor(x,y){ //https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
    this.sprite = 'images/char-princess-girl.png';
    this.step = 101;
    this.jump = 83;
    this.x = x;
    this.y = y;
  }
// This class requires an update(), render() and
// a handleInput() method.
  //update()
  update(dt){

  }
  //draws hero to the board
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //handleInput() Used to execute a block of code based on user input https://www.w3schools.com/jsref/jsref_switch.asp
  handleInput(keypress){
    this.keypress = keypress;
    switch(keypress){
      case 'left':// allows hero to move left
        if(this.x > 0){
          this.x -= this.step;
        }
        break;
      case 'up':// allows hero to move up
        if(this.y > 0){
          this.y -= this.jump;
        }
        break;
      case 'right':// allows hero to move right
        if(this.x < this.step * 4){
          this.x += this.step;
        }
        break;
      case 'down':// allows hero to move down
        if(this.y < this.jump * 4){
          this.y += this.jump;
        }
        break;
    }
    if(this.y < 0){
      alert("Congrats! You've made it to the water.");
      this.y = 405;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
let enemyLocation = [63, 147, 230, 313]; //https://www.youtube.com/watch?v=7PHhRrjgTDA

enemyLocation.forEach(function (locationY){ //https://www.youtube.com/watch?v=7PHhRrjgTDA
  enemy = new Enemy(0, locationY, 200);
  allEnemies.push(enemy);
});
// Place the player object in a variable called player
const player = new Hero(202, 405);

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
