var fixedRect,movingRect;
var box;
function setup() {
  createCanvas(800,400);
  box=createSprite(250, 100, 30,80);
  fixedRect=createSprite(500, 200, 30,80);
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.velocityX = 5
  fixedRect.velocityX = -5
  box.velocityY = -5
}

function draw() {
  background("green");

  //movingRect.x=mouseX;
 // movingRect.y=mouseY;
 
      
  
  bounceOff(movingRect,box);
    
  
 // console.log(fixedRect.x-movingRect.x);
  drawSprites();

}
