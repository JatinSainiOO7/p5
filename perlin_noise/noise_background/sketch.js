var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  background(0);
  var yoff = 0;
  loadPixels();
  noiseDetail(14,0.6)
  pixelDensity();
  push();
  for (i = 0; i < width; i++) {
    var xoff = 0;
    for (j = 0; j < height; j++) {
      index = (i + j * height) * 4;
      var r = noise(xoff, yoff) * 255;

      pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = r;
      pixels[index + 3] = r;

      xoff += inc;
    }
    yoff += inc;
  }
  pop();
  updatePixels();
}