var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  movingRect.debug = true;

  fixedRect.velocityX = -5;
  movingRect.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceoff();

  
  drawSprites();
}

function bounceoff(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      fixedRect.velocityX = fixedRect.velocityX*(-1);
      movingRect.velocityX= movingRect.velocityX*(-1)
    }



}