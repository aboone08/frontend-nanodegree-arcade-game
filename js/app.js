// Enemies our player must avoid
class Enemy {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
  }
  update(dt){
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
class Hero {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/char-princess-girl.png';
  }
// This class requires an update(), render() and
// a handleInput() method.
  //update()
  //render()
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Hero();
// Place all enemy objects in an array called allEnemies
const enemy = new Enemy(['allEnemies']);
//handleInput()
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
