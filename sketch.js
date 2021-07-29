

function setup() {
  createCanvas(400,400);
  background("white");
}

function draw() 
{
  if ( keyIsDown(UP_ARROW)) {
    background ("red") 
  }
 if ( keyIsDown (DOWN_ARROW)) {
   background ("grey")
 }
if (keyIsDown (RIGHT_ARROW)) {
  background ("pink")
}
 
if (keyIsDown(LEFT_ARROW )) {
  background ("brown")
}
}
