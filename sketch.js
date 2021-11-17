var quadrado;
function setup() {
  createCanvas(400,400);
  quadrado=createSprite(200,200,15,15)
}

function draw() {
  if(keyDown("UP_ARROW")){
    quadrado.y = quadrado.y - 5
  }
  if(keyDown("DOWN_ARROW")){
    quadrado.y = quadrado.y + 5
  }
  if(keyDown("RIGHT_ARROW")){
    quadrado.x = quadrado.x + 9
  }
  if(keyDown("LEFT_ARROW")){
    quadrado.x = quadrado.x - 9
  }
  background(30);
  drawSprites();

}




