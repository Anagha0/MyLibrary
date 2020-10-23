var fixedRect,movingRect,rectange,object1;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green"
  rectange = createSprite(500,280,50,30);
  rectange.shapeColor = "green";
  object1 = createSprite(700,200,20,70);
  object1.shapeColor = "green";
    
  }



function draw() {
  background(0,128,128); 
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

 if(isTouching(movingRect,object1) ){
  movingRect.shapeColor = "red";
  object1.shapeColor = "pink";
  bounceOff(movingRect,object1)
 }
 else{
  movingRect.shapeColor = "green"
  object1.shapeColor = "green";
 }
  
  drawSprites();

}

