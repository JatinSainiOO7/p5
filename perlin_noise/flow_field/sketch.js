var inc = 0.1;
var scl = 10;
var zoff = 0;
var alfa = 10;
var particles = 10000;
var particle = [];
var cols = 0;
var rows = 0;
var speed = 5;
var particleSize = 1;
var flowfield;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowfield = new Array(cols * rows);

  for (var i = 0; i < particles; i++) {
    particle[i] = new Particle();
  }
}

function draw() {
  stroke(0);
  strokeWeight(10);
  fill(120, 100, 255, alfa);
  rect(0, 0, width, height);
  var yoff = 0;
  noiseDetail(10);
  for (var y = 0; y <= rows; y++) {
    var xoff = 0;
    for (var x = 0; x <= cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      // v.setMag(10);
      flowfield[index] = v;
      // stroke(255,0,0, 5);
      // strokeWeight(1);
      // push();

      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);

      // pop();
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0001;
  }

  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
  }
}
