var ship, sea;
var shipimage, seaimage;

function preload(){
  shipimage = loadAnimation("ship-3.png", "ship-4.png");
  
  seaimage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  ship = createSprite(50,160,50,100);
  ship.addAnimation(shipimage);
  ship.scale = 0.25;
  
  sea = createSprite(400,20);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale=0.3;

}

function draw() {
  background(blue);
 
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}