var x = 300; // x coordinate
var y = 420; // y coordinate
var bodyHeight = 130; // Body height
var neckHeight = 80; // Neck height
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius; // Neck Y
var speed = 20;
var easing = 1;
function setup() {
 createCanvas(800, 600);
 strokeWeight(2);
 ellipseMode(RADIUS);
}
function draw() {
 background(204);
 // Neck
 stroke(102);
 line(x+2, y-bodyHeight, x+2, ny);
 line(x+12, y-bodyHeight, x+12, ny);
 line(x+22, y-bodyHeight, x+22, ny);
 // Antennae
 line(x+12, ny, x-18, ny-43);
 line(x+12, ny, x+42, ny-99);
 line(x+12, ny, x+78, ny+15);
 // Body
 noStroke();
 fill(102);
 ellipse(x, y-33, 33, 33);
 fill(0);
 rect(x-45, y-bodyHeight, 90, bodyHeight-33);
 fill(102);
 rect(x-45, y-bodyHeight+17, 90, 6);
 // Head
 fill(0);
 ellipse(x+12, ny, radius, radius);
 fill(255);
 ellipse(x+24, ny-6, 14, 14);
 fill(0);
 ellipse(x+24, ny-6, 3, 3);
 fill(153);
 ellipse(x, ny-8, 5, 5);
 ellipse(x+30, ny-26, 4, 4);
 ellipse(x+41, ny+6, 3, 3);
  move();
}

function move() {
  if (keyIsPressed) {
 if (keyCode == LEFT_ARROW) {
   x = (x - speed) * easing;
   
 }
 else if (keyCode == RIGHT_ARROW) {
 x = (x + speed);
   
 }
 }
}



