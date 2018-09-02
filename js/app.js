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
  constructor(){ //https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
    this.sprite = 'images/char-princess-girl.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 5)-20;
    this.x = this.startX;
    this.y = this.startY;
  }
// This class requires an update(), render() and
// a handleInput() method.
  //update()
  //render()
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //handleInput() Used to execute a block of code based on user input https://www.w3schools.com/jsref/jsref_switch.asp
  handleInput(input){
    this.input = input;
    switch(input){
      case 'left':
        if(this.x > 0){
          this.x -= this.step;
        }
        break;
      case 'up':
        if(this.y > 0){
          this.y -= this.jump;
        }
        break;
      case 'right':
        if(this.x < this.step * 4){
          this.x += this.step;
        };
        break;
      case 'down':
        if(this.y < this.jump * 4){
          this.y += this.jump;
        }
        break;
    }

  }
}
// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Hero();
// Place all enemy objects in an array called allEnemies
const enemy = new Enemy(['allEnemies']);

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
