var x = 0;
var y = 0;
var gap = 10;
var deg = 0;
// var color2 = 'cyan';
function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  stroke(255);
	strokeWeight(random(0,5));
	if (random(2) < 1) { // The if statement changes the direction of the lines.
	line(x, y, x + gap, y + gap);
	} else {
	line(x, y + gap, x + gap);
	}
	
	x = x+ 10; //This allows the lines to go across the canvas.
	if (x > width+10) {
	x = -10;
	y = y + gap;
	}
	if (y > height+10) {
      noLoop();
	}
  frameRate(360);	
}