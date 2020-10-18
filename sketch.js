var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(100, 100, 20, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 3;
  movingRect = createSprite(100,700,50,20);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -3;
}

function draw() {

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
 }
 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
    }
 

  background(0);  
  drawSprites();
}