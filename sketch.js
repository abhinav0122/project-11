var trackimg
var track
var boyimg
var boy
var edges
function preload(){
  trackimg = loadImage("path.png")
  boyimg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  track=createSprite(200,200)
  track.addImage(trackimg)
  track.velocityY=4
  track.scale=1.2

  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boyimg)
  boy.scale=0.08
}

function draw() {
  background("red");
 if(track.y>400){
   track.y=200
 }
 boy.x=World.mouseX
  edges=createEdgeSprites()
  boy.collide(edges)
 drawSprites()
}
