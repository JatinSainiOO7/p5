const n = 21;  // Number of rows and columns
const boxSize = 10;  // Fixed size for each box
const spacing = 10;  // Spacing between boxes
const noiseScale = 1;  // Scale factor for Perlin noise

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);  // Use WEBGL for 3D rendering
  camera(100, 150, (n * spacing) );  // Position the camera further back

}

function draw() {
  background(80,100,90);

  orbitControl();  // Enable interactive control of the camera with mouse/touch gestures

  const time = millis() * 0.0009;  // Time variable for animation
  const centerX = (n * spacing) / 2 - spacing / 2;  // Center X position
  const centerY = (n * spacing) / 2 - spacing / 2;  // Center Y position

  const boxHalfSize = boxSize / 2;
  const maxHeight =  60;
  const minHeight =  -50;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const x = i * spacing - centerX;  // Center X position
      const y = j * spacing - centerY;  // Center Y position
      const distance = dist(0, 0, x, y);  // Distance from the center of the grid

      const h = map(sin(time + distance / 50), -1, 1, minHeight, maxHeight);  

      const noiseVal = (noise(i * noiseScale, j * noiseScale, time));
      const r = map(noiseVal, 0, 1, 50, 255);  
      const g = map(noiseVal + 0.1, 0, 1, 50, 255);  
      const b = map(noiseVal + 0.2, 0, 1, 50, 255);  

      fill(r + h/2, g + h/2, b + h/2);  
      strokeWeight(1);

      push();
      translate(x, y);  // Move to the grid position
      box(boxSize, boxSize, h);  // Draw the box with fixed size and dynamic height
      pop();
    }
  }
  frameRate(120);
}
