var box;


function setup() {
  createCanvas(500, 500);
  box = createSprite(200, 200, 25, 25);
}

function draw() {

  background(30);
  
  if(keyDown(RIGHT_ARROW)){
    box.position.x += 5
    background('green')
  }
  if(keyDown(LEFT_ARROW)){
    box.position.x -= 5
    background('yellow')
  }
  if(keyDown(DOWN_ARROW)){
    box.position.y += 5
    background("brown")
  }
  if(keyDown(UP_ARROW)){
    box.position.y -= 5
    background("blue")
  }
  drawSprites();
}




