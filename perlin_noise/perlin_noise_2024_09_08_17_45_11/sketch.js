var xoff = 0;
var yoff = 0;
var xyoff = 0;
var yxoff = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  var esize = 20;
  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(noise(yoff), 0, 1, 0, height);
  var xy = map(noise(x), 0, 1, 0, width);
  var yx = map(noise(y), 0, 1, 0, height);
  xoff += 0.00001;
  yoff += 0.00004;
  xyoff += 0.0001;
  yxoff += 0.0021;
  ellipse(xy, yx, esize);
  stroke(1);
  fill(
    map(noise(y), 0, 1, 0, height),
    map(noise(xoff), 0, 1, 0, width),
    map(noise(xoff), 0, 1, 0, width)
  );
}
