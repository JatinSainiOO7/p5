function setup() {
 createCanvas(800, 800);
  stroke(2,122,);
  background(0);
}
function draw() {
 // var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  fill(0,0,255,10)
  rect(0,0,width,height)
 strokeWeight(12);
  noFill();
 vertex(mouseX, mouseY);
  endShape();
}
