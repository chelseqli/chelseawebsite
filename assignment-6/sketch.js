// Name: Chelsea Li
// Class: ARTG2262
//Email: li.chel@northeastern.edu
//Assignment number: [6]
//How To Interact: To interact, click and drag to draw. Press the numbers 1, 2, 3 for different stroke widths. The random element is that depending on what side of the screen you're on, it is either pink or blue. Press S to save your artwork!

let currentTool = "pen";
let brushSize = 4;

window.addEventListener("keydown", function(e) {
  if (e.key === "1") { brushSize = 4; }
  if (e.key === "2") { brushSize = 12; }
  if (e.key === "3") { brushSize = 28; }
  if (e.key === "s" || e.key === "S") { saveCanvas("drawing", "png"); }
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // color depends on which half the screen the mouse is on
  if (mouseX < width / 2) {
    brushColor = color(255, 105, 180); // pink on left
  } else {
    brushColor = color(100, 149, 237); // blue on right
  }

if (mouseIsPressed) {
    if (currentTool === "pen") {
      stroke(brushColor);
      strokeWeight(brushSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (currentTool === "eraser") {
      stroke(255);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  drawinstructions();
}

function drawinstructions() {
  noStroke();
  fill(233,233,255);
  rect(10, 10, 220, 140, 10);

  textSize(11);
  fill(0);
  text("Click & drag to draw", 25, 30);
  text("Left = Pink, Right = Blue", 25, 45);
  text("Press 1 = small, 2 = medium, 3 = large", 25, 60);
  text("Press S to save as PNG", 25, 75);
 
  fill(0);
  textSize(11);
  text("Brush size: " + brushSize, 25, 100);

  drawButton("Pen",25,  110, currentTool === "pen");
  drawButton("Eraser",80,  110, currentTool === "eraser");
  drawButton("Clear",135, 110, false);
}

function drawButton(label, x, y, active) {
  noStroke();
  fill(active ? 60 : 255);
  rect(x, y, 50, 22, 6); //size of the buttons
  fill(active ? 255 : 30);
  textSize(11);
  text(label, x + 6, y + 15);
}

function mousePressed() {
  if (mouseX > 25  && mouseX < 75  && mouseY > 110 && mouseY < 132) currentTool = "pen";
  if (mouseX > 80  && mouseX < 130 && mouseY > 110 && mouseY < 132) currentTool = "eraser";
  if (mouseX > 135 && mouseX < 185 && mouseY > 110 && mouseY < 132) background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}