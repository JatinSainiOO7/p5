var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  var yoff = 0;

  loadPixels();
  pixelDensity();
  for (i = 0; i < width; i++) {
    var xoff = 0;
    for (j = 0; j < height; j++) {
      index = (i + j * height) * 4;
      var r = noise(xoff, yoff) * 255;

      pixels[index + 0] = r;
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
