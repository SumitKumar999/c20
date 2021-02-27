var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200, 50,50);
  fixedRect = createSprite(400,100,50,100);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
}

function draw() {
  background("black");
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(fixedRect.x-movingRect.x);

  if(movingRect.x-fixedRect.x <movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y <movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }


  drawSprites();
}