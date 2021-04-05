class Player {
  constructor() {
    this.x = 30;
    this.y = 400;
    this.height = 200;
    this.width = 100;
    this.playerImage;
    this.score = 0;
    this.health = 150;
    this.level = 1;
    this.gravity = 0.6;
    this.velocity = 0;
  }
  preload() {

  }
  draw() {
    if (keyIsDown(65) && this.x >= 5) this.moveLeft();
    if (keyIsDown(68) && this.x <= 900) this.moveRight();

    //  gravity
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.y += this.gravity
    this.y = constrain(this.y, 0, height - this.height - 30)

    image(game.playerImage, this.x, this.y, this.width, this.height)
  }

  scoreDraw() {
    textSize(26);
    text(`💰: ${this.score}`, 885, 50);
  }

  healthBarDraw() {
    // white Bar
    push()
    stroke('black')
    fill('white')
    rect(20, 30, 150, 20)
    pop()


    // green Bar
    push()
    noStroke()
    // stroke('black')
    // strokeWeight('3');
    fill('rgb(0,255,0)')
    rect(21, 31, this.health - 2, 18)
    pop()


    // Red Cross
    push()
    fill('red')
    noStroke()
    rect(190, 30, 6, 20)
    rect(183, 37.5, 20, 6)
    pop()
  }
  moveLeft() {
    this.x -= 5
  }
  moveRight() {
    this.x += 5
  }
  jump() {
    if (this.y > 360)
      this.velocity = -20;
  }
  getDamage(damage) {
    this.health -= damage;
  }
}