var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.5;
function setup() {
 createCanvas(1000, 800);
  background(255)
}
function draw() {
  fill(0,0,255,1);
  react(0, 0, width, height);
 var targetX = mouseX;
 x += (targetX - x) * easing;
 var targetY = mouseY;
 y += (targetY - y) * easing;
 var weight = dist(x, y, px, py);
  stroke(255);
 strokeWeight(1);
  fill(0,0,200, 1)
 ellipse(x, y,x , y);
 py = y;
 px = x;
  
  frameRate(3000);
}
