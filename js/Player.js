class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.
    this.playerBody=Bodies.rectangle(x,y,width,height,options)
    

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.playerBody);
  }

 
  display() {
    var pos = this.playerBody.position;
    var angle = this.playerBody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
