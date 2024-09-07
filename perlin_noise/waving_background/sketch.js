var inc = 0.01;
var start = 0;
var yoff = 0.0001;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  loadPixels();
  noiseDetail(14,0.6)
  pixelDensity();
  for (i = 0; i < width; i++) {
    var xoff = 0;
    for (j = 0; j < height; j++) {
      index = (i + j * height) * 4;
      var r = noise(xoff, yoff) * 255;

      pixels[index + 0] = sin(xoff);
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();

  frameRate(360);
}
